---
title: "Demoralized by complexity – a rant"
description: "Sometimes, software development gets you down. Sometimes a rant about it helps."
tags: [ "opinions", "programming", "vscode" ]
---

On the back of my [blog post](https://www.codevoid.net/ruminations/2022/04/05/file-new-project-innerloop.html) about a simple dev inner loops, I decided I need an extension that would open the internal browser in VS Code when my project opened, or my http server started. Seems simple right?

1. Wait for task to run
2. Call command to open browser
3. Profit

Well, in this endeavour I’ve been down multiple rabbit holes, and I’m both struck by the _time_ it takes to make _good_ software _and_ the complexity of even the simplest idea. Its demoralising when you look over the precipice, and the abyss stares back.

I tweeted about it:

> Software development can be incredibly demoralising. You have an idea. On the surface it seems simple. As you get to the details distinct from the idea itself (ecosystem & infra), you’re dragged into a maze resembling an Escher drawing.
>
> Brought to you by VS Code’s extension API.

It’s not that it’s _overwhelming_, or _discouraging_ (ok, maybe a little demoralising), but it does take some of your _energy_, and _wonder_ away.

What follows is effectively a rant. Sorry.

# Demoralisation, Step By Step

- If someone doesn’t configure a URL to open, you need to present a message. I can direct them to the right part of settings with an [explicit command](https://github.com/microsoft/vscode/blob/204d0247033ab7d2f6d1949ae6fd6d87e46a91b3/src/vs/workbench/contrib/preferences/browser/preferences.contribution.ts#L303). But it’s not explicitly documented, so I had to search the VS Code implementation to [reverse](https://github.com/microsoft/vscode/blob/204d0247033ab7d2f6d1949ae6fd6d87e46a91b3/src/vs/workbench/contrib/preferences/browser/preferences.contribution.ts#L128) [engineer](https://github.com/microsoft/vscode/blob/27dd7b41b6a830d5ea8eb896d5b2bb9c4bcd95ee/src/vs/workbench/services/preferences/browser/preferencesService.ts#L274) the parameters
   - Additionally, it _seems_ that button handling of alert-type message boxes is done by getting a promise that completes with the _displayed_ button text. Not an abstract ID, but the actual user text. I’m assuming there is a better option here, but it’s not immediately obvious, and I don’t need _another_ rabbit hole stopping me from getting to my **actual** idea
- How would I know the task being executed is the one you want to match for? We don’t want to open it on _every_ task that starts. So the user needs to define a set of criteria. But the [task declaration](https://code.visualstudio.com/docs/editor/tasks) is v. rich, _and_ varies by task type (i.e. there is no single schema). But the API to inspect tasks doesn’t present in the same structure as the declaration, so it’s messy. Came up with `_.isMatch` to get me close (Task added: “Command to help dump task information in a format people can just paste into the config”)
- What if the task has already started? Ok, enumerate executing tasks. 👍️  But what if it _hasn’t_ started? Well, now I need to ‘wait’ for that if it happens. Need to only do _one_ of those, since I don’t want to open it every time the task executes. Or do I? Depends on the user! (Task added: “Allow configuration of opening triggers”)
   - But how do you _know_ it’s started? In the extension itself the code, thats OK since I don’t really care when it’s started there. _But,_ for testing, I needed to wait for the service to start up to make sure it _really_ started — but the task starting API completes when the _process_ starts, not when it’s ready. So I have to poll the http service… which also takes a while to shutdown, and `terminate` doesn’t return a promise, so doesn’t let me await the shutdown. Suppose I’d better poll again!
      - Thanks to a friends insightful question, I realise for _termination_ I can listen to some more events to see when the task process terminates. (Task added: “Update tests to monitor task for ending”)
- For testing, I would like a known state for my ‘sample’ workspace. Except that there isn’t a clear way to run ‘setup’ scaffolding before each test because VS Code _testing_ doesn’t support reloading the project while the tests are running. So instead of ‘reset to known state’ or ‘copy project in known state’, I’m writing clearing of all settings for my extension _and_ a helper to explicitly set them to a known state. This also means I refactor 99% of my extension class out of ‘extension’ into something I can drive from the tests
   - This is mostly due to different configuration options I need / would like to test. Maybe I don’t need to test those, but I don’t want to manual test a bunch of scenarios
   - I _might_ be able to support more complex / multiple sample workspaces when the tests are run from the command line tools (Task Added: “Check command line test execution passes”, and “Add multi-root workspace tests to command line”
- VS Code supports opening multiple folders in a single window (“multi root workspaces”). These look to the user like multiple projects in a single window. Yay! _Except_ they don’t merge the config (for obv. reasons) from _across_ the folders. Which means the extension itself now has to work out _which_ root folder is actually the intended target
   - You can derive it from the active editor, ’cause you can pass the URI of the document to the configuration API
   - But what if the task is executing from a workspace that _isn’t_ the active editor? Well, thankfully, the task API does define scope. But now I need to kinda smuggle that around. Not so bad, but you know “eh”.
   - What if there is no active editor and the user invokes the command manually? Well, theres _another_ API that shows a workspace picker async API that will let you get that scope
      - Should I rely on the _active_ editor and use that, or if you’re in a multi-root workspace always prompt if manually invoked? No ‘cause that doesn’t help disambiguate between workspace setting and per-folder setting, which might _both_ be set
      - I can inspect a setting with [`inspect`](https://github.com/microsoft/vscode/blob/main/src/vscode-dts/vscode.d.ts#L5487) , and determine if it’s set on a folder, or workspace
         - If I iterate over all the workspaces and only show the prompt if there is more than one configuration for my extension, that seems good, right?
      - Tasks can be defined _globally_, but I don’t have a _global_ setting. So if the source is global, I need to… decide which workspace to get it from? Can I show that picker when it wasn’t user invoked? Thats a problem for another day
- This feels useful in a web instance of VS Code, like [github.dev](https://github.dev). Turns out you gotta bundle a bunch of your dependencies into a single file, and can’t rely on Node APIs — for obvious reasons. Now you need to have a separate build pipeline to pull in different depend. I think? Can I constrain my API to _only_ use web-available, or shimmed? This is a problem for another day.

All I wanted was have a browser tab open in VS Code when my project opens! I think I’m finally at the point where I can get to the real meat of monitoring tasks. I _think_.

