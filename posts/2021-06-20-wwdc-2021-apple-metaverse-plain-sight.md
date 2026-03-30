---
title: "WWDC 2021: Apple is building the metaverse substrate in plain sight"
tags: [ "apple", "opinions", "metaverse", "technology" ]
description: I thought it might be fun to take a semi-serious look at technology from the Apples WWDC21 keynote, and how it might help building the metaverse. I may have spent way too much time watching sessions at 1.5x, and it may have broken my brain a little.
---

The WWDC 2021 keynote made it ever clearer Apple is building the components of a metaverse substrate in the open. This isn’t their first year — WWDC 2019 was where they first pulled back the curtain. Since then, it's been clear they have the skills pull off the hardware & device software stack. I've been less sure they understood the full scope needed to build a compelling AR ecosystem – a *metaverse*. With this years features, it's become clear they might be able to pull it off. And it’s out there, in the open - every year they’re moving a little bit closer.

I'm still *unsure* of if they’ll be able to get people to create *content* for that ecosystem; “[Build it and they will come](https://www.youtube.com/watch?v=NZN0A0U6ysg)” might not be enough any more.

----
## Experience Substrate
End users will experience the metaverse through the default device delivered experience. Customers can’t just put the headset on and be dumped into the equivalent of the “[Construct](https://www.youtube.com/watch?v=AGZiLMGdCE0)” from The Matrix asking them to get some apps installed. It’s gotta provide *some* usefulness out of the box.

### Widgets / Shared With You / Spotlight
The AR metaverse aren’t about immersive, focused interactions. Ephemerality will underpin the experiences. Those experiences need to provide you with contextual information when & where you need it — either ambiently as you move about the world, or as part of a more intentional ‘tell me more’ interaction.

Widgets are the *visuals* that connect you to many of these occasional-use scenarios that are going to be prevalent across the AR metaverse. They’ll provide timely information driven by a remote device, so that the headset can present rich information without having to perform much of the computation for relevance itself. SwiftUI is a key partner in crime here — likely the real power, rather than the widget platform itself.

“Shared with you" will sift through context, and, uhh, surface the content that you need. Taking the different *types* of content from many sources (messages today, metaverse bag-of-holding in the future), and bubbling up the right things at the right time will be key to not overwhelming people.

Spotlight will leverage the same understanding of the content, context, and inputs, but tailored to support those situations when you’re *intentionally* seeking more information about the world through the metaverse.

Underpinning all of these smarts is the intents framework that enables developers to expose structured operations to system experiences, without the system having to have tailored pathways for ever eventuality.

### On-device Siri
Device-local speech recognition is fundamental to AR — we can’t tap our feet & twiddle our thumbs while we wait for a round-trip to the cloud to conclude how to handle “Group these five items, and remember them for next week when I’m at the office”. Speech — fast speech — is going to be key especially for AR since you won’t always be able to use your hands. Moving it to the device suggests that Apple has gained enough understanding to believe that the speech-to-text model is stable enough to encode in the firmware in some form. Understanding has advanced too, given you’ll be able to perform many operations offline.

### Shortcuts
The ability to manipulate things with your limbs is going to be important in AR, interacting with your voice is gonna be much more common for the more complex tasks. The reality is we have a computer strapped to our heads, with the intent of making us *more* capable. Don’t just make me go through the *physical* motions — moving things, touching things et al – *digitally*. I might as well just do *that thing* in the physical world if thats the case, and not be trapped by the need to digitise the world first.

Shortcuts is the glue to unlock this — interactions & connections across apps to bring together the complex automations that you can invoke through other input mechanisms. Apps will offer lots of actions to be performed, which we’ll be able to combine to make something greater than the sum of it’s parts.

### Notes
Notes seems like an experience for mobile devices & desktops. But with the wealth of information we'll be seeing & experiencing within the metaverse, we need *something* to help us catalog, curate, and organise all that information. With the improvements in tagging, mentions, etc *and* the quick notes (driven by your currently-being-used-app) are filling out the larger context of building out your digital notebook that will follow you in the AR world.

Quick Notes deriving it’s context, snapshots etc from apps today is that thread that leads to implicit system understanding of the metaverse & the world around you. You don’t want to take notes on a web page, or a document — you need to bring that physical world into the metaverse.

Notes is ultimately a way to inspect & understand your ‘[Bag of holding](https://forgottenrealms.fandom.com/wiki/Bag_of_holding)’ that follows you in the metaverse.

----
## Metaverse Substrate
You can’t just magic the metaverse out of thin air. You’ve gotta build it — and those components need to live off-device. Sure, they are surfaced on the devices through the experience substrate, but they are about things that extends past your local device to sharing, receiving, and deriving context about the world.

### Memoji
Until we have models of people with super-high fidelity that able to be easily generated & shared, we need some sort of proxy (aka avatar). Memoji seem pretty good for representing yourself in the digital world. Apple continues to improve the ways to express your identity appropriately with Memoji, and that will only continue into the future. We have to be able to express the right identity, at the right time, in the right places, controlled by ourselves, not the ecosystem.

### Maps
Maps – or more specifically the data that enables maps – is the oxygen that powers the AR metaverse. Without it, there are no bones to hang any other experiences on. Being able to understand *where* you are on the planet is what allows the rest of the experience to efficiently localise around you.

Leveraging ARKit’s scene understanding & location anchors to locate your physical real-world orientation when you emerge from transit is a great example of building on lower level foundations — albeit along side the foundation that is maps.

With the new enhanced detail buildings & physical infrastructure models that extend beyond rectangular blobs to complex representations of bridges, buildings, squares, and even tree placement within the map data shows a confidence in the [data](https://www.justinobeirne.com/new-apple-maps) that they haven’t had before.

### ShazamKit
It’s for music, right? *Nope*. It's GPS for audio. Ever since they got bought by Apple a few years ago, I’ve been leaning into ‘[this isn’t about music](https://www.pcmag.com/news/shazam-gets-visual-recognition-sort-of)’.

Now the ShazamKit API lets you recognise any audio, and use what matches to drive your experiences. This is just another aspect of ‘recognise all the things’ that is going to underpin AR (and scare the living 💩 out of everyone).

The ShazamKit API — driven around sessions and buffers of inputs to generate the required signatures to match to — is only a hop-skip-and-a-jump away from generating other matches based on different signature sources outside of audio. Matching signatures of a point cloud – video input for matching – seem tantalisingly close. Imagine that instead of exposing media items (e.g. Songs), locations, landmarks, people, buildings, stores, experiences, and transit points etc were exposed instead. This would tailored experiences driven by apps (or AppClips 👀) & the context of wherever you are, whatever you are experiencing.

When you consider that you can now create custom catalogs — a set of signatures w/ your own metadata — it starts to pull back the curtain a little on a compelling substrate for discovery of *augmentations*. These signatures can be generated on device for later sharing or pre-computed inclusion in a larger service catalog, allowing users to start painting their own world for themselves, and for others.

The [examples provided](https://wwdc.io/share/wwdc21/10045) in the WWDC talk leverage a constant stream of matches to create screen experiences, such as enabling automatic content advancement in time with the matches. Imagine this at world scale.

Even the “Shazam Library” that catalogs a users matches starts to seem like part of your ‘Bag of holding’ you collect as you journey through the world (or metaverse) (Notes is the vessel you use to rummage through your bag of holding).

When you start to think about ShazamKit as a higher level abstraction over pre-generated models & content anchors from ARKit & CoreML, you can see how the foundation starts to enable value to be accrued further and further up the stack.

### Find My
Location awareness driven by *local* information to lift the weight of GPS, cameras et al for knowing where you are within a space is key. Knowing where you are on the planet & within a local space, is fine until you need to know the semantic meaning of things *within* that space. As an additional input into the orientation of the space relative to you (aka the device), "Find My”-style devices will help tighten up the mapping of the physical world to enable augmentation — really this is part of the platform substrate, but the same tech underlies a key bridge between physical and virtual.

With the ultra-wide-band hardware & the “Find My” network a level of richness is enabled for physical anchors — creating a way for you to concretely interact with a physical item, and bring it into the digital world. These devices can just be simple beacons, but also with the data network & ranging they can become rich waypoints to underpin the ability to overlay digital with the physical. As these devices are discovered they can participate in your bag of holding, and create tailored experiences with in a localised space.

The [Nearby Interaction Framework](https://developer.apple.com/nearby-interaction/) is the underlying stack that powers this.

### Reality Composer
This isn't about accessing the metaverse, but the generation of experiences for the metaverse. You can’t just stand metaverse up as a big empty room and say ‘have at it’ to people wearing goggles and tripping the light fantastic. Reality Composer lets us *bootstrap* it. Primarily an experience to facilitate composition of scenes on professionally created models sourced else where, WWDC21 opened up a new way for those models to be created, and it seems *pretty* snazzy.

Demoed in the keynote, but just an API, the “[Object Capture](https://developer.apple.com/documentation/realitykit/creating_3d_objects_from_photographs)” API enables generating digital twins of the physical world through a camera. It’s not point-and-shoot-camera level, since it requires a desktop device to do it’s work (A mac, even with an M1... like an iPad Pro 🤔). It also doesn’t require an iPhone or iPad to capture the input images: any SLR will work – although an apple device with LIDAR will provide depth map information that I can only assume makes it *moar bettar*.It [looks pretty damn good](https://twitter.com/mikkoh/status/1402114761538605062?s=21).

Getting these models generated *without* professional help at a level [good enough for government work](https://idioms.thefreedictionary.com/Good+Enough+for+Government+Work), and able to integrate them into your scenes — either through Reality Composer or RealityKit — will unlock a bunch of content generation to help create *things* in the metaverse. Without that, we’re left to paying artists to do a *great* job, when we’re not sure if it’s the *right* job yet, and it's gated by the availability of artists with the appropriate skills.

----
## App Substrate
You’ve got the baseline device experiences, and a metaverse provided substrate. But what about building apps & delivering content? We’re going to need those developer-targeted tools & APIs to build those experiences. Apple has been on this for a while, it turns out.

### SwiftUI
SwiftUI is getting more capable with every release, and appears to be the long-term UI platform for apple. It also isn’t just about ‘below the glass’ experiences.

Driven by ‘diffable’ concepts providing ‘Right work, at the right time, offloaded to the platform’ paradigms — state management, declarative binding, and functional patterns for you views.

This one is a slow burn, and it doesn’t feel like an AR platform component (Where’s the third dimension?). But AR isn’t going to be ‘all 3D, all the time’ — there are contextual experiences that are ultimately 2(.5)D experiences. RealityKit covers all the depth of a 3D experience — and there will be places that blend the two. Minimising the baseline cost of participating in the ecosystem is key: 3D immersive experiences have multiple-orders-of-magnitude more cost — technically and design wise. The SwiftUI patterns have value in that space, but it *also* can be a bridge for getting 2(.5)D experiences into users hands in a way that doesn't require committing to that increased cost.

But it’s not just about the developer experience — it’s also about reducing the baseline computational cost. We can’t run complex apps, with complex logic, directly on headsets yet — the physics just isn’t there. [Rumours](https://www.macrumors.com/roundup/apple-glasses/#ar_smart_glasses) are that the apple goggles will be (wirelessly) tethered, with the goggles being a projection of things computed on your companion device. SwiftUI’s declarative, ‘diffing’ model will make this *possible*, and have the rendering itself offloaded to the headset, but drive the state & logic from a companion device.

### RealityKit
RealityKit is the immersive sibling of SwiftUI. It’s a full 3D engine for building rich, dynamic experiences. For WWDC 21, RealityKit is focused on quality of life improvements — a better ECS system, and improved rendering — all in aid of getting more people to adopt it.

This is a table-stakes platform for enabling true immersive experiences for AR. I don’t think this platform is done, or intends to deliver AR ‘as is’, but it also represents the most obvious need: Build a viable 3D app plat without asking everyone to drop to the level of METAL & buying a game engine.

### AppClips
AppClips are likely to be the infrastructure underpinning discovery of apps in the real world. Sure, we’re going to have complex rich apps — say Facebook, or LinkedIn (😬) — that everyone installs, but there will be other experiences that you stumble into. Similar to the original intent of AppClips (menu at a restaurant, or scooter rental), they’ll appear when you need them.

Ultimately, AppClips is a automated binary deployment tool for some definition of ‘Small Binary’. People are already building AR experiences in AppClips, so this seems a slam dunk.

There isn’t a lot new here this year, but they’re closing out the loop for some key parts — specifically the HTML metadata tag to take you direct to an app when you navigate to it. Whatever the anchor & location context dreams up will drive seamless installs based on your location.

### Spatial Audio
This year Apple added [PHASE (Physical Audio Spatialisation Engine)](https://developer.apple.com/wwdc21/10079), primarily focused on improving the experience in games. But *audio* is foundational to AR — you’d can’t just play some simplistic stereo audio and expect the result to be a natural and compelling experience. You’ve got to model the user within the blended AR world, and use that to position the sources & compute the impact.

PHASE makes this possible by providing a way to describe your world, and have it computationally impact the audio based on that world. It abstracts all the head positioning, location of originating device, and the aural experience that gets layered over the real world. Consider the fact that enabling that audio is not as simple as ‘play audio file’. You’ve got to describe the properties of that audio & the environment — shape, sound behaviour etc. Within an app or game experience this seems just what you’d want. If these could pulled in automatically from the real world mesh generation *and* with the scenes built in RealityKit, and we’re really cooking with gas.

Consider how the *system* uses this paradigm and model, you’ve got a very compelling world system for audio across more than a single app. If you squint a little you can see them building the ability place an Apple Music audio source in different physical spaces *virtually*, creating perfect multi room audio without physical audio sources, and they’re doing it in the open and telling everyone about it.

### SharePlay
Synchronised experiences driven around digital content is clearly going to be a key experience with AR. People will need to exchange & synchronise data across multiple participants in real time — placing static information for later discovery isn’t a super compelling experience.

SharePlay enables people to establish a mutual session through FaceTime. But FaceTime is just the vector *today* — nothing about SharePlay, from an external perspective, is fundamentally dependent on it, and other vectors can be added.

At it’s core, SharePlay is a realtime message exchange system over an opaque transport. These messages are developer defined and can contain anything — the media driven experiences are effectively just wrappers over this, and tailored for that specific paradigm.

While they’re not combined today, SharePlay and ARKit’s collaborative experiences enable a clear pay-for-play model for creating experiences that span more than one person.

----
## Platform Substrate
The really hard problems are on device — on the platform. There are some interactions & capabilities that can only be offered by a local device, and their solutions are novel *and* constrained by power & latency requirements. Aka hard.

### AssistiveTouch for Apple Watch
For Global Accessibility Awareness Day apple announced a number of features — one of which was ‘[AssistiveTouch for Apple Watch](https://www.apple.com/newsroom/2021/05/apple-previews-powerful-software-updates-designed-for-people-with-disabilities/)’. This feature, intended to facilitate use of a watch for those with motor control challenges, is a little bit of a glimpse into the future. It’s driving interaction with a watch using only one hand, on the arm the watch is attached to. Just some hand gestures (Clench, Double-Clinch, Pinch, and Double-Pinch), or wrist movement (effectively a pointer controlled through tilt), you can control the watch. This is awesome for those of us that need it.

But when we’re talking about the metaverse & AR interactions, gestures through the hands are going to be a significant interaction method. Voice will help with the ambient scenarios, but when you’re in a scenario that requires focus you’re going to want to directly interact. These gestures are rudimentary in nature, but they’re just the beginning. Others experiences (Hololens, Oculus) are driven by video tracking, but Apple already has a device attached to your wrist – a watch! That can do gestures! Leveraging this as part of the holy trinity of phone / watch / goggles to create a [Voltron](https://www.youtube.com/watch?v=tZZv5Z2Iz_s) for your AR goggles experience seems a slam dunk.

### Create ML
Previously Create ML had added the detection of [hand presence and poses](https://developer.apple.com/wwdc20/10653), but couldn’t really tell you *what* it was doing. Sure, you could derive individual phalanges, but you were on your own if you wanted to recognise *what* it was doing. This year they’re closing that gap.

The experience here isn’t focused on driving gestures in an arbitrary way — this is Create ML, not the input stack — but instead focused on classification of key poses of hands & their motion to those positions.

It’s important to note that these are driven by video & images. It’s unclear how this might work in an AR glasses model OH HEY CAMERAS STRAPPED TO YOUR FACE.

### ARKit
Are we really on v5? Huh! Anyway… ARKit *looks* like where you'd be looking for all the snazzy-and-cool features. The problem is that it's *really* RealWorldPositioningAndUnderstandingKit. It's a *really* important part of the experience, but it's not a *complete* story (duh, see the rest of this article!).

You’ve got the positioning tracking at a planet (GPS), and local (where / what angle you camera is point), so you can find what someone might be able to augment their reality with. It’s still trapped in the phone, but ultimately the APIs for exposing the world-relative location is going to be the same.

Some of the more subtle parts of ARKit include motion & face tracking — these feel like they’re driven by face-mashup experiences, and sports motion tracking. But understanding peoples motion will be key part of the compelling augmentation of people in the real world — you want to place that little ‘It’s So-and-So’ floating on above them and track them accurately, right?

It’s interesting to note, that some of the multi-peer session work here dovetails well with SharePlay for exchanging information after facilitating the rendezvous of interested humans.

### Universal Control
It’s just about mice & keyboards over IP, right? Maybe, but it can be so much more. This is about providing a low latency experience for input control sourced from other than devices. If the device “fusion” / Voltron of phone, watch, and goggles are to believed, the processing will be distributed to the device most capable of a specific task. Input will need to be delivered *already processed* on the source device into the higher level abstractions such as taps, and drags.

Universal control, a mirror to [Sidecar](https://support.apple.com/en-us/HT210380), lets you control an iPad with the input devices on your mac — and provides a real mouse / keyboard input. The input from one device is automatically paired into the target device, and controls it like it’s local. Not new, not radical, but they’re shipping it at scale in a way that lets them validate challenges in the open.