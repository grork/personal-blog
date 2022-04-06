---
title: File/New/Project &mdash; Simple Developer Innerloops with VS Code
description: Developer inner loops are critical. Getting them setup requires
             many steps. I take a few steps to make the simplest cases simple in
             Visual Studio Code and Panic Nova.
tags: [ "open-source", "opinions", "programming", "web", "javascript", "ide", "vscode" ]
---

You have a programming idea. It’s not complicated, it’s not fancy, and doesn’t matter to anyone but you. You have limited time, and you just kinda wanna get on with it. You don’t want complexity, you’re not looking for “best practices”, and you’re not looking for the latest whizzbang thing. But you do want it to be *easy*.

I grew up on IDEs such as Visual Studio (Xcode, IntelliJ for non-Microsoft stacks), which enabled me to go `File > New > Project...`, and *mash that keyboard* till I'd scratched that itch. I got *syntax checking*, *compilation*, and *debugging* – it was just me & my ideas, supported by some great tooling.

For simple web pages – you know, just a little page that does something in the browser. Not a server, or API. A nice little web page. – it’s has never been quite as simple as `File > New > Project...` [^template-tools]. I just want to write some code (editor), get told when I'm a dumbass (compilation), and help me fix it (debugging).

Recently, the lack of ‘code & go’ flows in simple projects got to me as I worked on my simple single page, single script [site](https://countdown.codevoid.net) that I built with TypeScript. I’ve been executing `npm run build` by hand every time I make a change. I wanted to tidy up some loose ends in the site itself and was discouraged every time I thought about the process of making changes & validating them. So, I thought:


- “Let me add watching & auto reload” (compilation)
- “Wouldn’t it be nice to have this automatically work in VS Code” (don’t make me think)
- “Maybe I want this to work on windows too”. (Work wherever I am)

Why do I do this to myself… 

# Watching


For a simple HTML/CSS/TS page, we have a few moving pieces that require processing:


1. The TypeScript compilation (e.g, processed by `tsc`) 
2. The Dependencies™  (`.css`,`.html`, a `node_module`)

All need to end up in `output` – the directory that gets deployed. `tsc` can be configured to do automatically (in my case, already is) via the `outFile` or if multiple files using `outDir`. The other steps are simple file copies (`css`, `html`), although in the future an equally simplistic build step would be desirable. This leads to two watches:


- `tsc` compilation for `.ts` files
- “copy”, for `.css`, `.html`, and `node_modules`?

These watches can be configured as [`npm run-script`](https://docs.npmjs.com/cli/v7/commands/npm-run-script) (the `scripts` section of `package.json`). For `tsc`, this is trivial using the `tsc --watch` [command](https://www.typescriptlang.org/docs/handbook/configuring-watch.html). With help of [`npm-watch`](https://github.com/M-Zuber/npm-watch), we can do this for the other files.

This works *fine* for the integration in VS Code because you can configure multiple tasks that do their *thing* as part of VS Codes task handling. However, if you're using other tooling – e.g., vim – then you'd need to run two commands. We could extend our use of `npm-watch` to handle this by running the appropriate tasks (e.g., `compile`) when any file changes. But you don't want *that* to be present in VS Code since it muddies the waters. This leads to *three* commands to watch: `watch-all`, `watch-compile`, and `watch-dependencies`. There’s no *context* that the basic tooling (e.g., `npm`) can use to manage this more cleanly.

`npm-watch` when run without a parameter will watch for *all* the configured files for all scripts. This removes the need to handle running the tasks concurrently ourselves (e.g., something like [`concurrently`](https://github.com/open-cli-tools/concurrently)). It does lead to a small amount of repetition, specifically the duplicated `compile` command that is `build` but without the automatic copying of dependencies via a `post` npm script.

# Serving files & automatic browser refresh


[`browser-sync`](https://browsersync.io) is a great package that makes it trivial to have your browser auto refresh on a change in the files that make up your site. It's a simple [configuration](https://browsersync.io/docs/command-line), and easily added to `package.json`. We used this command line:

```other
browser-sync start --server output --watch --no-ui --listen localhost --no-online --no-open --reload-debounce 250
```

- `start` – starts it!
- `--server output` – roots the server in the `output` directory
- `--watch` – watches all files in the `output` directory (or any other directory you specify)
- `--no-ui` – we won't want the management UI for BrowserSync
- `--listen localhost` – don't bind to any external IP addresses. This is just for us
- `--no-online` – don't use any of the advanced features, so it works well offline
- `--no-open` – don't open the browser automatically, so that different tooling can manage the browser session
- `--reload-debounce` – since multiple files are written to disk during saving, we want to wait for 250ms of file change notifications before asking the browser to reload

However… 

## TypeScript compiler behaviour detour


Adding the dependency on `browser-sync` causes compile failures: [`setTimeout`](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout) no longer returns `number`, but a [`NodeJS.Timeout`](https://nodejs.org/api/timers.html#class-timeout) type. Why is that – we didn't change our API target!?

Turns out, `browser-sync` transitively includes a TypeScript types file (`@types/node` at the type of writing, via its [`engine.io`](https://github.com/socketio/engine.io) dependency). By default, these files are *automatically* discovered by the TypeScript compiler. We don't want that behaviour because of the *implicit* nature of it – you no longer know what types you're using. This specific case it a classic example of that, as causes clashes with the browser API.

To fix this you can set [`compilerOptions.types`](https://www.typescriptlang.org/tsconfig#types) in [`tsconfig.json`](https://www.typescriptlang.org/tsconfig) to `[]`. This will disable automatic 'global' type import from discovered TypeScript files. This **does not** prevent those types from being imported with an `import` statement!

Before you ask: No, having `node_modules` in the `exclude` path doesn't prevent this – that just prevents in an excluded path from being included in *compilation*.

# VS Code Integration


There are two parts to VS Code integration:


1. Configure debugging
2. Integrate the `npm` scripts we created

## F5 Debugging

> *Note*, this only works in Microsoft Edge & Google Chrome. Safari doesn't support external debuggers.
{: .post-note}

Through the [`vscode-js-debug`](https://github.com/microsoft/vscode-js-debug) extension – which is built in! – we can get all the debugger goodness one could want: Breakpoints! F5 Launch! Tracepoints! It's magic.

However, we need to do a little configuration in the `.vscode/launch.json` file. (For a deep dive, see the [docs](https://code.visualstudio.com/docs/editor/debugging)):


1. Set the `url` to our `browser-sync` port / host. e.g., `http://localhost:3000`
2. Set the `cleanUp` property to `onlyTab`
3. Set `webRoot` to be our `output` folder (e.g., `${workspaceFolder}/output`)

*Why `onlyTab`?* Without this, when you close the tab, the extension causes an unclean exit of the browser. At first this looks *ok*, until your next run, you see a prompt from your browser asking to restore tabs. *Annoying*. By setting `onlyTab`, this behaviour is mitigated, and the browser exits cleanly.

You need to do these for the browser you want to support, setting `type` for the specific browser you're using (`pwa-chrome` for, uh, Google Chrome, `pwa-edge` for Microsoft Edge).

## NPM Script Integration


We’ve made some useful for users of basic text editors, but one still must run them manually. Since some people — myself included — like full-featured IDEs, we can build upon that work to create an even tighter inner loop in VS Code.

### Wrapping the tasks

> See VS Code’s [task documentation](https://code.visualstudio.com/docs/editor/tasks) for the full details of running tasks in VS Code.
{: .post-note}

VS Code will *automatically* discover npm scripts in `package.json` and allow you to run them without any setup. **But** this doesn't lead to a seamless experience – you've still got to run the commands manually (albeit with buttons now), and the various terminal windows can get confusing.

But if you *wrap* the scripts with specific configuration in `tasks.json`, you can customise that experience. We're going to set some fields for each of the npm scripts (`watch-compile`, `watch-dependencies`, and `serve-reload`):


- `label` for a friendly name
- `isBackground: true` to make them execute in the 'background’
- `presentation` object to customise terminal group, focus, and reveal behaviour
	- `reveal: "never"` – we don't want these to popup on running (since they're going to be in the background)
	- `panel: “dedicated”` – Don't want shared terminals, since they're running concurrently
	- `group: “watching”` – We'd like *one* panel, with three splits. The name here is just one I picked since they're *watching* for files. Seemed appropriate.
- `runOptions: { runOn: "folderOpen" }` – this one is the magic that really makes this seamless


> See the [schema](https://code.visualstudio.com/docs/editor/tasks-appendix) for full details
{: .post-note}

`runOptions` is key to making this work – by setting `runOn` to `folderOpen` we're telling VS Code to start this task upon open. This kicks off watching & serving without us having to manually run any commands.
> By default, VS Code prevents these scripts from starting for security reasons. You can enable them by using the command palette (⌘⇧P) to run the “Tasks: Manage Automatic Tasks In Folder” (`workbench.action.tasks.manageAutomaticRunning`) once you've opened the folder.

> See [here](https://github.com/grork/innerloop-template/blob/main/.vscode/tasks.json) for a fully worked example
{: .post-note}

# Supporting Windows


This worked great — on a mac. Windows doesn’t have `cp`, it has `copy`. Nor does it have `rm -rf`, it has `rd /s`. `npm` doesn't support an abstraction natively to select platform-specific scripts, but there are a few paths one can try. The first [`run-os-scripts`](https://github.com/charlesguse/run-script-os) – maybe the most logical – lets you write platform specific scripts, and have it make the decision about which one gets run. Another alternative is to create your own node script (e.g., `tools/copy-things.js`) and call that. In my case I'm *trying* to be simple, I decided not to go down either of those paths. Instead, I looked for replacement for those two commands. I found `copyfiles` to replace `cp`, and `rimraf` to replace `rm`.

Substituting these in package.json was simple — `rimraf` being a simple replace, and `copyfiles` needing some extra parameters since it's more of a tree-copy, than an individual file copy.

Now it works on windows *and* mac. Yay!

# Template Repo
Overall, these steps are not complicated, and only need to happen once per project. But I’d rather not have to do it every time I want to start a simple – dumb – web page. I could have made some extensions for `create-react-app` or `neutrino`, but it felt like it was 'baggage' for my *aspirations.* So I made a [template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) [repo](https://github.com/grork/innerloop-template) – these are repos that GitHub makes it easy to click-once to create a new *independent* repository that you can just start working in. It's not connected to my repo, and lets you get going quickly & make whatever changes you wish. You can find the template at [https://github.com/grork/innerloop-template](https://github.com/grork/innerloop-template) – click "Use this template” if you want to use it.

[^template-tools]: There are tools such as `create-react-app` or [Neutrino](https://neutrinojs.org) (both templating tools), as well as kitchen-sink tools like [Parcel](https://parceljs.org) that make *parts* easier. But they bring some foundational opinions (React requirement for `create-react-app`, general dependency growth with Neutrino), minimal progressive disclosure (Neutrino), or don't solve sensible editor/IDE integration (all of them).

    This leads to the paradox that you're either bringing baggage, or still left fumbling for what to do next. None of them make debugging *simple* people are likely to gravitate to `console.log` or spray & pray debugging.

    It's certainly possible to create templates that would get you to the right place but they're all “and” solutions on top of an already opt-in path (install extra tool, get extension to tool, then create project). It would be amazing if `npm` added something like .NET’s `dotnet new` [template](https://docs.microsoft.com/en-us/dotnet/core/tools/custom-templates) format. There’s a whole other rant in here, but that’s for another day.
