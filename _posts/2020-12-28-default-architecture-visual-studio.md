---
title: Better default architecture target for Visual Studio Solutions
tags: ["programming", "uwp", "pro-tip" ]
description: Ever wanted to make your Visual Studio solution buildable on open?
            Read on!
---

For a long time, I’ve always been frustrated with the default CPU target when
opening a Visual Studio solution — ARM. I don’t have an ARM CPU device to deploy
to, let alone the machine opening the solution having an ARM CPU.

**Sure**, you only have to change the build target once (it gets saved in the
`suo` file), but if you're cloning repos often, or regularly cleaning up your
existing one, it's a pain:
1. Open Solution
2. Forget to change to x64 or x86
3. Hit build
4. Stare while machine builds lots of C++ and takes a while
5. Go to Step 1

Recently while open sourcing [Storyvoid (UWP
WWA)](https://github.com/grork/StoryvoidWWA), I wanted to make it quicker &
simple for people cloning the project to just build and go. It also makes the
`README.md` easier to write, since you don't have to *waffle* about 'please
follow these 9834 steps to actually get it to build’.

You’d think that **maybe** the `sln` file might have some default settings, but
no. The `suo` file is very much a local file, and shouldn't be put into the repo
(it changes all the time)

For a tl;dr example [see this change in the
Storyvoid](https://github.com/grork/StoryvoidWWA/commit/df70c4184f28cd4792b4f03dbb352824a0c1bb03)
repo.

## Ok, but how?
The `sln` format is 'undocumented' (that I am aware of), and not really sensibly
readable. But it *is* a text document, so maybe we can futz with it?

Turns out that there are two things I wanted to make sure were true:
- Default project that was selected for build & run
- Default architecture for the build configuration

## Setting the default project
This was is easy-peasy-lemon-squeezy: The projects at the top of the `sln` are
the order they're displayed in alphabetical order, **but** the default is picked
based on the order in the file – e.g. the first one in the list will be the
default launch target.

Given the following, the default will be `App\App.jsproj`:
```
Project("{262852C6-CD72-467D-83FE-5EEB1973A190}") = "App", "App\App.jsproj", "{84FD802D-0F7C-4B15-A01A-8CD4377EB8FE}"
EndProject
Project("{262852C6-CD72-467D-83FE-5EEB1973A190}") = "Test", "Test\Test.jsproj", "{75649025-5099-4C32-9F57-084461404DDF}"
EndProject
Project("{8BC9CEB8-8B4A-11D0-8D11-00A0C91BC942}") = "Codevoid", "NativeInfrastructure\NativeInfrastructure.vcxproj", "{95ACA049-0CF6-4361-9AA3-AB16EF0F6F9E}"
EndProject
```

However, with the following it will be `Test\Test.jsproj`:
```
Project("{262852C6-CD72-467D-83FE-5EEB1973A190}") = "Test", "Test\Test.jsproj", "{75649025-5099-4C32-9F57-084461404DDF}"
EndProject
Project("{262852C6-CD72-467D-83FE-5EEB1973A190}") = "App", "App\App.jsproj", "{84FD802D-0F7C-4B15-A01A-8CD4377EB8FE}"
EndProject
Project("{8BC9CEB8-8B4A-11D0-8D11-00A0C91BC942}") = "Codevoid", "NativeInfrastructure\NativeInfrastructure.vcxproj", "{95ACA049-0CF6-4361-9AA3-AB16EF0F6F9E}"
EndProject
```

Boom, Bob’s your aunties brother.

## Setting the default architecture
This one is a little more subtle, since the changes are as obvious, so you have
to be a little more focused, and require editing two section in a specific way.

Key insight: The default CPU architecture is chosen **alphabetically**. e.g. a
processor architecture that is displayed as 'Zebra', will never be selected as
the default. But one called Aardvark? Yep, that'll be selected.

So there are two steps:
1. Change the display name of the configurations
2. Change the configurations of the projects

First, if we look at the `GlobalSection(SolutionConfigurationPlatforms) =
preSolution` section, by default it looks something like this:
```
Debug|ARM = Debug|ARM
Debug|x64 = Debug|x64
Debug|x86 = Debug|x86
Release|ARM = Release|ARM
Release|x64 = Release|x64
Release|x86 = Release|x86
```

While the order here is alphabetical, and matches the display order, it doesn’t
have to be based on my testing. However, for your own sanity I’d recommend you
keep them sorted that way.

The key here is to rename them so your favoured architecture sorts first. For
me, I wanted x64 to be first, so changed it to be as follows:
```
Debug|AMD64 = Debug|AMD64
Debug|ARM = Debug|ARM
Debug|x86 = Debug|x86
Release|AMD64 = Release|AMD64
Release|ARM = Release|ARM
Release|x86 = Release|x86
```

aka renamed `x64` to `AMD64`. These names will be used later, so keep a mental
note.

Next, you need to update the same type of information, for all the projects in
the list. The more projects you have in the solution, the more laborious this
becomes. Because it’s such a long list, I’m only including examples for one
project — but this needs to repeated for all the projects, and all the
configurations. Before:
```
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.ActiveCfg = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.Build.0 = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.Deploy.0 = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x64.ActiveCfg = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x64.Build.0 = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x64.Deploy.0 = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.ActiveCfg = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.Build.0 = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.Deploy.0 = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.ActiveCfg = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.Build.0 = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.Deploy.0 = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|x64.ActiveCfg = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|x64.Build.0 = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|x64.Deploy.0 = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.ActiveCfg = Release|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.Build.0 = Release|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.Deploy.0 = Release|x86
```

After:
```
{75649025-5099-4C32-9F57-084461404DDF}.Debug|AMD64.ActiveCfg = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|AMD64.Build.0 = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|AMD64.Deploy.0 = Debug|x64
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.ActiveCfg = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.Build.0 = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|ARM.Deploy.0 = Debug|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.ActiveCfg = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.Build.0 = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Debug|x86.Deploy.0 = Debug|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|AMD64.ActiveCfg = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|AMD64.Build.0 = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|AMD64.Deploy.0 = Release|x64
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.ActiveCfg = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.Build.0 = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|ARM.Deploy.0 = Release|ARM
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.ActiveCfg = Release|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.Build.0 = Release|x86
{75649025-5099-4C32-9F57-084461404DDF}.Release|x86.Deploy.0 = Release|x86
```

The key change here was that `<preamble>|x64.<postamble>` was changed to
`<preamble>|AMD64.<postamble>` – note the `.` after the architecture, if you're
doing a search  & replace. The **left** side is what needs to change, with the
**right** *remaining unchanged*. This is because the right is (I believe) a
reference the actual configurations in the project, and changing those has a lot
of downstream changes that just result in *work* without really any benefit.

With these two changes, you should be able to clone the repo, and hit F5 to
build, deploy, and run. And *yes,* I know some are running on an ARM laptop, but
they are in the minority right now – and still don't have a native version of
Visual Studio.