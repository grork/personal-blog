---
title: Generating sharable UWP test certs
tags: [ "uwp", "windows", "pro-tip" ]
---
Have you ever created a UWP project that you check into a Source Control system?
Tried to build it on multiple devices, or share with a team? I’m pretty sure
you’ve seen the warning from Visual Studio during build saying “`Couldn’t find
Foo_TemporaryKey.pfx`” (`*.pfx` is in the default .gitignore), or "`Cannot
import the key file “Foo_TemporaryKey.pfx"`”.

I find this frustrating because it makes it difficult to get the quick check of
“No warnings, or messages, I must be good” by looking at your output window.

Thanks to some stuff I had to figure out at [work](https://www.microsoft.com), I
found the right way to generate the keys/certs that you can check in, and don't
require a password. This also has the advantage of working well in a build
server environment.

I know, I know “But it’s a cert! It’s super special!”. Sure, but these are your
**self-signed certs**. These are used for, at worse, side loading on PC you own.
They’re also unchained — there’s no real root cert, so you have to _install_
them, which requires _admin rights_. There’s minimal spoofing risk, since I
dearly hope you’re not using this for broad distribution.

Before you ask, these certs are only for signing the _package_, and when you
publish through the store, the package is signed with a real cert from
Microsoft, _not_ this certificate.

Anyway, this is a **tl;dr** based on an [MSDN
article](https://docs.microsoft.com/en-us/windows/win32/appxpkg/how-to-create-a-package-signing-certificate), which while it claims it is out of
date (it probably is), it works:  
1. Open up a developer Command Prompt
2. Change to the directory where you want the files
3. Run `makecert -sv <a name>.pvk -n “CN=SomeName” <a name>.cer -a sha256 /r
   /h 0 /eku “1.3.6.1.5.5.7.3.3,1.3.6.1.4.1.311.10.3.13”`
4. When prompted, _don’t_ enter a password — select ‘None’ (This is the key step
   to making this smooth
5. Then, in that same directory, run `pvk2pfx -pvk <a name>.pvk -spc
   <a name>.cer -pfx <a name>.pfx`
6. In VS, open the package.appxmanifest, and change to the packaging tab
7. Click ‘Choose Certificate…’
8. Select your file
9. BOOM!

**Note**: If you’re working in a git repository created by VS, it’s default
.gitignore file excludes this file from being added to to the repo. You’ll need
to use git on the command line to get it added/staged (ditto, for future
updates):  
```
git add <a name.pfx> --force
```