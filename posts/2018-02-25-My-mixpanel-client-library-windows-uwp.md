---
title: My Mixpanel client library for Windows UWP
tags: [ "storyvoid", "mixpanel", "uwp", "open-source" ]
---
_tl;dr_: I needed a client for calling [Mixpanel](https://www.mixpanel.com/)’s
API to log telemetry. Existing ones were either C# or
Javascript-delivered-over-the-web. I wrote one C++. Find source
[here](https://github.com/grork/MixpanelClient), and NuGet
[here](https://www.nuget.org/packages/Codevoid.Utilities.Mixpanel).

In my ever ongoing (6 years!) development of an [Instapaper client for
Windows](https://www.codevoid.net/storyvoid/), I've reached the point where the
app is very nearly done. But before I unleashed it on the world, I knew I need
to add telemetry to the app. _But which service to send it to_?

My first requirement was that it had a good library for UWP that was supported
in Javascript — e.g. WWA/PWA. The primary motivation wasI didn’t want to add
.net to it, since that was another runtime, another garbage collector, another
large dependency.

Turns out _no one did that_. No one has written a C++ client, or a pure JS
implementation meant for offline delivery (E.g. in package). So this set me off
on a journey to build my own.

Thus my next requirement was a _well documented_ HTTP API: Turns out _those_ are
pretty rare too! After much searching I found Mixpanel:  
1. Great [Documentation](https://mixpanel.com/help/reference/http)
2. Good reference [source](https://github.com/mixpanel/mixpanel-iphone) to
   understand those poorly captured peccadilloes

And so I embarked on writing a C++/CX library for uploading to Mixpanel — and
1.5 years later, I’ve finished it, and published v1.0 to the world.

Things that happened along the way:
1. Created a background work queue for processing items, and handing off to some
   other worker. Turns out there aren’t any good, simple ones for C++ — at least
   that I could find.
2. Learned all about using the stl threading primitives for my worker. I still
   don’t quite get why there isn’t “Mutex” in the STL that I can create and wait
   on till it’s signaled — since it really tries hard to take ownership on
   creation, and on obtaining the lock (rather than waiting to be signaled)
3. Created many unit tests to make sure I wasn’t a muppet. And proved that just
   because you have unit tests doesn’t mean you got it right (see the [most
   recent unit test](https://github.com/grork/MixpanelClient/commit/6d11f5a8260d855dfd0b563df8128b30d0a58e10)
   I added)
4. Learned about creating & publishing nuget packages, including getting an
   update published to the nuget
   [documentation](https://github.com/NuGet/docs.microsoft.com-nuget/pull/711).
5. Thought way to deeply about the overall architecture
6. Accepted the right thing to do was make private APIs visible to my test code
   to keep a _clean_ public API

Anyway, I hope it’s useful to someone that isn’t me, and I’m interested in feedback, and suggestions.