---
title: "Inner Loop Buddy"
description: "tl;dr: I made a VS Code Extension (Inner Loop Buddy) that opens a browser tab when you run a task"
tags: ["vscode", "web", "programming", "releases"]
---
> I made an extension to automatically opens a browser inside VS Code when tasks are executed. Install it from the VS Code [marketplace](https://marketplace.visualstudio.com/items?itemName=codevoid.inner-loop-buddy). Leave feedback on [GitHub](https://github.com/grork/InnerLoopBuddy/issues)
{: .post-note}

I've [waxed](https://www.codevoid.net/ruminations/2022/04/05/file-new-project-innerloop.html) [lyrical](https://www.codevoid.net/ruminations/2022/04/12/demoralized-by-complexity.html) before about developer inner loops. Some tools take great care to keep them tight. [Some](https://medium.com/pinterest-engineering/developing-fast-reliable-ios-builds-at-pinterest-part-one-cb1810407b92) [companies](https://developer.squareup.com/blog/getting-squares-ios-build-ready-for-apple-silicon-with-bazel/) [dedicate](https://dropbox.tech/mobile/modernizing-our-android-build-system-part-i-the-planning) significant energy to making end-developer client developer experiences tight – above & beyond the vendors default experience. It falls up on the platform vendor – e.g., Apple, Microsoft, Google – to make sure that the foundations of that ecosystem work towards this goal. Often driven by the IDE from that vendor (Xcode, Visual Studio et al), the tools *try* to make it as fast as possible.

But the web has no single vendor, not even a defacto IDE vendor. Developer tools are trapped in the browsers themselves (Chrome Dev Tools vs Safari Web Inspector), albeit with some [attempting](https://marketplace.visualstudio.com/items?itemName=ms-edgedevtools.vscode-edge-devtools) to bring them into the IDE itself. The process of *getting* to your web page is ‘open browser, enter url, and go’. Sure, once you've gotten there hot reload et al does ✨magic✨ to keep the loop tight. But it’s still a chore (a small one) to get to that flow. 

After [tightening](https://www.codevoid.net/ruminations/2022/04/05/file-new-project-innerloop.html) the edit-compile-refresh loop for simple web sites, I wanted to get closer to that ‘open and go’ experience that you see on some platforms. 

# I’m lazy…
Turns out VS Code has the key pieces within reach — VS Code has browser [built in](https://github.com/microsoft/vscode/blob/main/extensions/simple-browser/README.md) after all. It’s *right* there in the IDE, with the same window management & lifecycle simplicity that one has come to expect from VS Code – it even restores if you reopen the workspace! There are also tasks that can be customised and monitored — which I leveraged in my previous inner loop endeavours.

Alas, one must type the URL of your site in **every time** you invoke the command. When re-opening the workspace it doesn’t care if your server isn’t quite ready yet, it just ends up as a blank page and you’ve gotta hit that refresh button.

# … but not that lazy
After some investigation, the Simple Browser *does* have an [API](https://github.com/microsoft/vscode/blob/main/extensions/simple-browser/src/extension.ts#L61) for other extensions to programmatically that browser to a supplied URL. VS Codes Task extension API lets you *monitor* when tasks start. This means if we know when the task starts, we can open a browser.

So, I created [Inner Loop Buddy](https://marketplace.visualstudio.com/items?itemName=codevoid.inner-loop-buddy), an extension that monitors task execution for matching task starting, and automatically opens the Simple Browser to a pre-configured URL. You can run command on-demand to open it to that URL whenever you want — no typing in a URL! It’s like an infinite candy machine, rewarding you for pressing a button.

# Show me the money!
Install it from the Visual Studio Code [marketplace](https://marketplace.visualstudio.com/items?itemName=codevoid.inner-loop-buddy). [Configure it](https://github.com/grork/InnerLoopBuddy#configuring-task-matching-rules) for your project. [Leave feedback](https://github.com/grork/InnerLoopBuddy/issues). [Multi-root](https://github.com/grork/InnerLoopBuddy#multi-root-support) configurations are fully supported. Only tasks are supported today, ‘debugging’ (E.g. debug a server, want a web page to open when you start debugging) is coming. Doesn’t yet work in VS Code for the web, but it’s on the horizon.