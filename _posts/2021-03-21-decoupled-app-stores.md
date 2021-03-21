---
title: What happens with a decoupled App Store?
description: Concerns about walled-garden stores are growning. No-one talks about
             possible outcomes, and what that might look like.
tags: [ "techology", "opinions", "software"]
---
There’s a [lot](https://9to5mac.com/2021/03/15/apple-app-store-lobbying-bill/)
of
[discussion](https://www.politico.com/news/2021/03/03/apple-google-app-store-fights-move-to-the-states-473388)
&
[hand](https://www.reuters.com/article/uk-apple-probe-britain/uk-starts-probe-on-apple-over-alleged-app-store-monopoly-idUSKBN2AW136)
[wringing](https://9to5mac.com/2021/03/08/european-antitrust-complaint-critical/)
about the various [App
Store](https://techcrunch.com/2021/02/17/epic-games-takes-its-apple-app-store-fight-to-europe/)
walled gardens. Many are asking if they should be dismantled, some suggest they
be opened up through regulation. The final outcome is not yet clear, but what if
decoupled app stores are part of the aftermath? What does that world look like?
Lets explore!

*Assumption: The outcome is **more** stores, rather than mandatory opening
free-for-all or  side-loading.*
## There will only be a few landscapers
Maintaining a store is — and will continue to be — a non-trivial undertaking.
There will be many white-label services providing a top-to-bottom
store-in-a-box, a full revenue-generating bonafide-App Store (Apple, or
Google’s) clone.

Each part of the pipeline will be something you, a company who believes they
have a unique selling point, can replace & do yourself. Want to do your own
payments? Sure! Think you can provide a better recommendation system — plug it
in! Believe you have something unique to add to app review? Run it yourself! Or
just let the provider take on that burden.

Because of the complexity of the real-world security — piracy at one end, fraud
& financial exploitation on the other — most people won’t want to *actually* run
it.

I expect the cloud computing vendors — AWS, Azure, GCP — to offer these as
turnkey solution. Some more enterprise focused cloud providers will build for
very specific use cases — Oracle will have a Fortune-500 targeted solution. It’s
also possible is a startup appears out of the ether — Stripe maybe?

## There will be many gardens
The potential returns from running a store could be large, but it depends on
what the currency success is — political “freedom”? Not paying the
mobile-platform tolls? Government control & censorship? Whatever floats your
boat, all will be welcome.

This all leads to the conclusion there will be many stores, with many
consumer-facing identities. They’ll probably be powered by white-labelled
solutions from ‘store platform’ vendors (aka landscapers), rather than complete
bespoke implementations.

### Some will be botanical gardens
A small number of stores will be bonafide replacements for the existing
single-vendor stores — they’ll have apps from all the colours of the rainbow,
for every use case, and every type of app you see in stores today. These are
most likely to be from existing store vendors seeking to break the platform
lock-in and increase services revenue via relaxed-but-yet-not-very-open
transaction clauses on in app purchases et al. The platform / vendor breakdown
will be an approximation of this:

| Platform    | Vendors                                                      |
|-------------|--------------------------------------------------------------|
| iOS         | Apple, Google, Amazon, Microsoft, Facebook                   |
| Android     | Google, Amazon, Microsoft, Facebook, Samsung (Tencent, Alibaba outside of the west) |
| Xbox        | Microsoft, Google, Amazon, Epic, Steam                       |
| PlayStation | Sony, Microsoft, Google, Amazon, Epic, Steam                 |

A key motivation for Microsoft & Google getting into this game will be driving
people to their other services by providing ‘conveniences’ if you adopt their
SDK in your app.

It’s unlikely cellphone carriers will get involved — they don’t want to be
dealing with they complexity, and are already overextended with all the media
assets they now own. However, they *will* sign exclusivity deals with the above
providers, creating a weird out-of-the-box lock-in for new devices purchased via
the carrier. It’s unlikely whatever regulations are enacted will permit
exclusivity in any form, just a pre-bundling deal.

### Some with only a single variety of flower
Some stores will only contain one corporations (or organisations) apps. For
example, Ford Motor Corp. will have a ‘store’ where all the apps they need will
be surfaced — your car management app, your brand-specific pre-sales app (aka
the Lincoln, or Mustang app), and likely apps that are for the service techs.
Consider a media provider such as Comcast creating a single-varietal garden —
promises about content access, simplicity & flexibility of diversifying the
media brand experiences inside a store, rather than shoehorning into single app
today.

These stores will be built upon a single identity across apps, much like apps
from a single vendor can share identity today. Payments will be direct to the
corporation, leveraging existing transaction systems these corporations run
today.

These stores aren’t about deriving profit from running a store; they’re about
maintaining business independence for what are critical components of reaching
your customer for your businesses *actual* products (Cars, Grocery stores, etc).

Non-default stores will be cumbersome to enrol in, but not so difficult that
it’ll prevent the majority of people purchasing the target product — Car,
Groceries, well-known entertainment products — from doing so. This is because
due to the regulations store installation won’t be burdensome (likely a ‘store
of stores’ model) to make sure the playing field is as level as possible. Once
your customer has installed your store, it’ll be as easy as pie for any
incremental apps they need.

## What about the horticulturist?
The effort required by software engineering teams to be make their app available
on all the stores will be a significant burden. Because the big-box stores will
want to differentiate their service to drive revenue, they’ll require bespoke
API integration for things like piracy prevention, transactions (aka skimming
IAP revenue), and advertising attribution & targeting (and more).

This raises two interesting business and (implicitly) technical questions:
- Which stores should I be in to reach the most customers?
- How much will this cost me? (In engineering overhead)

The second has a significant impact on the first. It’s unlikely that to
participate in these “alt stores” it will be as simple as uploading *the same*
package as developers do today. These stores need to be viable businesses, and
have a reason to exist beyond a vanity project for specific brands. Given the
climate that will enabled these stores to be created, revenue generation in the
form of payments or advertising are likely to be the key battle ground. These
will result in different APIs, entitlements, and configuration, to the existing
in-market stores.

The reality is there will be significant variance in the APIs for
store-dependent features, which will require engineering investment, and require
careful consideration of which stores to invest engineering hours in.

## Gardening Tools
Because there is likely to be a collapse in the monopoly of stores by platform,
it won’t be possible to be in just *one* store. The API variance will become a
significant aspect of engineering architecture & investment.

Out of this will spring a cornucopia of component libraries, adapters,
intermediary services, and consultancies that trade on the false promise of ‘one
implementation, many stores, zero cost’. Some will get close, but will all fall
foul of the lowest common denominator and not deliver on those promises.
Consumers will suffer, and a cottage industry will bloom in an attempt to keep
it all running.

The reality is that it will become burdensome to be in all the stores. The
stores that offer the best developer experience will have an upper hand, with
many others falling by the wayside.

## How many gardens do we need?
The prevailing winds suggest that the industry desired the existing walled
garden stores to be opened to all, allowing a new golden age of pollination &
evaluation in the plants in those gardens. Politicians, press, and the people
seem to agree that **something** should be done.

But beyond “we want change”, there hasn’t been a lot of discussion about what
that **something** is. 

Enthusiasts are going to be clamouring for no-restrictions,
let-me-distribute-anything free-for-all to solve their subconscious needs to
tinker. (With a side dollop of political freedom)

FAAMG will demand *they* can access privileged components and remove
restrictions that harm *their* business today, irrespective of what might be
best for the consumers.

Government entities will seek to support regulatory capture and ostensibly
supporting free markets or consumer protection (depending on country & political
ideology a heavy seasoning of censorship should be expected).

But the question is — do we **really** need more than one garden? Maybe we just
need the garden to be *slightly* more accessible to everyone in the community.