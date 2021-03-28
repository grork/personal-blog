---
title: Three Displays, Three Times the Fun, Triple the Pain
tags: [ "monitors", "working-from-home", "hardware" ]
description: Turns out, connecting three high resolution displays to a MacBook
  Pro 13” is a bit bothersome. Getting it just-so, total pain. Worth it.
---

I’ve always liked large displays. Prior to The Distancing™ I was constantly
going between meetings & my workspace, so one large 40” monitor sufficed to stop
me from being hunched over a 13” laptop display at my desk. With work-from-home,
I pined for mo’ monitor. I’ve never been able get into the groove with dual
monitors though. With one dead-ahead, one to the side always felt lopsided. If
you put one either side of the center, you’re staring at a seam all day; no
thank you!

_Obviously_, the answer to this conundrum is to have three.

_Update 23/03/2021: Updated to include details (see addendum at the end) on the
new Thunderbolt Hubs that have gotten me to the single cable life!_
## Constraints

### Going for the triple

My work-issued laptop is a 2018 13” Apple MacBook Pro. In contrast to my love of
large displays I prefer teeny laptops. This puts constraints on monitor count &
resolution, especially when one is aiming for the holy grail of [retina
resolution](https://en.wikipedia.org/wiki/Retina_display "Retina Display")
(Sweet, sweet integral scaling factor).

On the the 13” MacBook Pro — even in 2020 trim — you’re limited to:

- One Display, up to 5K (6K on 2020!)
- Two Displays, up to 4K

No triple option! Maximum of two, and then they only go up to 4K. _Yes, yes_ I
know I could use the internal display in the middle, or on the side. But 13” is
just **weird** slid between two 27” displays! Thats before you’ve thought about
getting text & windows to display at the same physical size to avoid **bloop** —
_blip_ — **bloop** as the text & windows get ickle or ginormous as you drag
things between displays.

But wait! The MacBook Pro has a trick up it’s sleeve — [Thunderbolt
3](<https://en.m.wikipedia.org/wiki/Thunderbolt_(interface)#Thunderbolt_3>
"Thunderbolt 3") &
[eGPUs](<https://en.m.wikipedia.org/wiki/Graphics_processing_unit#External_GPU_(eGPU)>
"eGPU")! With Thunderbolt 3 you can connect a GPU via an external enclosure, and
then plug monitors into the GPU, and everything works great.
Easy-peasy-lemon-squeezy!

Well, _almost_…

### Retina or bust

Yes, I love large displays. But I _also_ love crisp, beautiful text — I spend a
lot of time staring at code, text documents, and chat messages. It’s so much
easier on the eyes when that text is crisp & beautiful. To be specific: not just
‘high density displays’, but the ability to hit the Goldilocks scale factor of
2x. E.g. every effective pixel is two physical pixels. Simple maths, no half
pixels, no rounding.

This leads to a very short shortlist of displays that hit the 218 PPI needed:

- [LG
  27MD5KA-B](https://www.lg.com/us/monitors/lg-27MD5KA-B-5k-uhd-led-monitor),
  [LG 27MD5KL-B](https://www.lg.com/us/monitors/lg-27md5kl-b-5k-uhd-led-monitor)
  (27”, 5K — 5120 x 2880)
- [LG 22MD4KA](https://www.lg.com/us/monitors/lg-22MD4KA-B-4k-uhd-led-monitor)
  (22”, 4Kish — 4096 x 2304)
- [Apple Pro Display XDR](https://www.apple.com/pro-display-xdr/) (32”, 6K —
  6016 x 3384, and **comically** expensive)

The 27MD5KA is very unique in that it’s not a DisplayPort / HDMI / USB-C Alt
mode input, but Thunderbolt 3 (TB3). It **must** be connected to TB3 to receive
input — and it turns out there are basically no graphics cards with TB3 output.
There’s a real janky solution if you have a spare PCIe slot, where you use a
special card (Alpine/Titan Ridge) that converts DisplayPort input to TB3 output
(among other capabilities). But that requires a 2-slot enclosure, which don’t
_really_ exist.

To throw another spanner in the works, the 22MD4KA is USB-C only — it doesn’t
have any other inputs. Thats solvable with a normal cable, since USB-C to
DisplayPort is all the rage, yeah? **Nope**.

Turns out there are a lot of cables that are wired for USB-C output to
DisplayPort input. But thats not what you need here — we’re going the other way.
You need a **bi-directional** USB-C-DisplayPort cable. Luckily these aren’t
expensive — but you do have to watch out to make sure the one you purchase is
bi-directional.

### Bright ideas

Theres _one_ more wrinkle — none of these displays have any physical controls.
No power button, no input switching (only one input!), and critically **no
brightness control**. This means you’re gonna be blinded in your nerd cave at
02:00 in the morning.

For the TB3 display, this is fine because it’s going to be directly connected to
the laptop, thus full connectivity. But the USB-C displays would be connected to
a GPU DisplayPort output, which, _obviously_ isn’t USB-C. The 22MD4KA exposes
the brightness control via USB rather than
[DDC](https://en.wikipedia.org/wiki/Display_Data_Channel). This means I’d need
to connect the USB-C part of the display to my Mac somehow. But theres only one
input — USB-C, which was already being fed by the DisplayPort-USB-C cable…

After much googling, and searching I came across [this
thread](https://egpu.io/forums/postid/79127/) on [eGPU.io](https://egpu.io),
which broke down some of the detailed options for some of these displays. And
there was _one_ solution: a [VR headset cable
sold](https://www.giztop.com/belkin-charge-and-sync-cable-for-huawei-vr-glass.html)
_only_ in china.

This cable has 2xUSB-A & 1xDisplayPort on one end, and USB-C on the other — plug
these into the right places, and magic would happen.

## Wot I purchased

To recap: I needed to purchase one GPU, one eGPU enclosure, two **very**
specific displays, and two **rare** cables. Here's what I purchased in the end:

- Gigabyte [AMD 5500XT
  GPU](https://www.amd.com/en/products/graphics/amd-radeon-rx-5500-xt) (8GB
  VRAM, 3 DisplayPort, 1 HDMI)
- Razer [Core
  X](https://www.razer.com/gaming-egpus/Razer-Core-X/RC21-01310100-R3U1) eGPU
- LG 22M4DKA (Two, via eBay!)
- [Belkin Charge & Sync for Huawei VR
  Glass](https://www.giztop.com/belkin-charge-and-sync-cable-for-huawei-vr-glass.html)
  (Two, from somewhere random on the internet)
- Amazon Basics USB-C to USB-A 4-port hub (I had no USB-A ports!)
- Apple [Thunderbolt 3 Pro](https://store.apple.com/xc/product/MWP32AM/A) cable
  (The eGPU one was very short, and this one is 2m long **and** full speed)
- Fully Jarvis Dual Monitor Arms (to add to the single one I already had)

Lets, uh, not discuss cost. It _should_ last a long time. **Should**.

## Was it worth it?

Absolutely. There was a lot of research into both the _how_, and _what_ to make
this possible. Getting the displays was probably the hardest part — there were a
few bids lost very narrowly for the displays on eBay — they’re very good
displays, but very rare, which makes them cost almost the same as when they were
new. I lucked out on a “Buy It Now”.

My laptop is now connected via two cables. One to the 5K display, which also has
my keyboard, USB-A hub, and Ethernet adapters plugged in. Another to the eGPU
enclosure with the GPU & 4K displays. I don’t unplug often enough that it’s
really a problem. When I do want to switch it’s pretty easy: Disconnect the eGPU
in software, change the cables, and bobs you’re uncle.

It’s been mostly stable, and had the added advantage of enabling 49-person Brady
bunch support in Zoom.

There have been a couple of issues:

- Occasionally, my MacBook Air (2020) won’t see the USB ports on my TB3 display.
  I don’t know if this is related, but it’s annoying
- If I have a USB-C to Headphone adapter on the TB3 display, it will randomly
  switch to outputting nothing but loud static. This _only_ happens when the
  eGPU is connected. Not sure thats going on here, and I should try it again
  since there have been some macOS updates since I experienced it.

There has been **one** meaningful problem, and it’s related to the Razer Core X:
It never turns off it’s PSU fan if there is a laptop connected, even when the
laptop is asleep. It’s not a quiet (albeit not loud) PSU fan, which results in a
noticeable hum when the room is quiet.

If I was doing this again, I would pick the [Mantis Saturn Pro
V2](https://mymantiz.com). Based on a [review from
eGPU.io](https://egpu.io/mantiz-saturn-pro-review-king-of-the-ring/), it’s great
— and thanks to the team behind it being very responsive in the forums at
eGPU.io,
[confirmed](https://egpu.io/forums/thunderbolt-enclosures/unboxing-mantiz-saturn-pro-thunderbolt-3-egpu-enclosure/paged/27/#post-86800)
that the fan in the PSU is temperature aware.

Thanks for reading!

Oh, wait, you probably want to see what it looks like: [![3 Monitors on a desk,
two portait, one landscape, with a
screensaver](/ruminations/assets/triple-monitor-desk-thumb.jpg)](/ruminations/assets/triple-monitor-desk.jpg)

## Addendum: Single-cable is possible

In late 2020, OWC
([and](https://www.razer.com/gaming-pc-accessories/razer-thunderbolt-4-dock-chroma/RC21-01690100-R3U1)
[others](https://www.kensington.com/p/products/device-docking-connectivity-products/laptop-docks-usb-accessories/sd5700t-thunderbolt-4-dual-4k-docking-station-with-90w-pd/))
released a new generation of thunderbolt
[hubs](https://eshop.macsales.com/shop/owc-thunderbolt-hub) &
[docks](https://eshop.macsales.com/shop/owc-thunderbolt-dock), seemingly enabled
by a new Intel Thunderbolt controller - [Goshen
Ridge](https://www.anandtech.com/show/16333/intel-maple-ridge-thunderbolt-4-controller-now-shipping).
In conjunction with macOS BigSur 11.1, these enabled daisy chaining of TB
devices _reliably_. While it kinda worked before eGPUs were very unreliable.
There were very few TB devices that supported more than one downstream TB3 port
— a requirement due to my LG 5K display.

With these new devices that had three downstream ports, and the updated macOS
fully supporting it, I had to take another shot at the single cable life.

And it worked. **Perfectly**. Initially I’d picked up just the OWC
[hub](https://eshop.macsales.com/shop/owc-thunderbolt-hub) not realising the
Dock used the same chipset. After the hub worked great, I picked up the Dock
with it’s integrated audio & ethernet got everything hung off a single
thunderbolt cable. *yasssssssss*!