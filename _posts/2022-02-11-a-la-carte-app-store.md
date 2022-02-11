---
title: A-la-carte App Store
tags: [ "apple", "appstore", "opinions", "technology", "business" ]
description: aka What do I get for that 30%?
---

Apple’s [proposal](https://developer.apple.com/news/?id=uub8j2f1) for the Netherlands Dating App Purchase ACM ruling has had many decrying the proposal. At best the proposal is obtuse, at worst it's pure greed. South Korea has laid out similar [requirements](https://www.reuters.com/technology/skorea-targets-apple-over-new-app-store-regulation-2021-10-15/). What does it cost Apple to deliver apps for developers?

> Note, [others](Going Dutch https://daringfireball.net/2022/02/going_dutch) have gone deeper into the larger topic. This post focuses specifically on the cost aspects.
{: .post-note}

Today, Apple has a ([mostly](https://developer.apple.com/app-store/review/guidelines/#3.1.3a)) blanket 30% commission on all transactions. Apples proposal to the Netherlands: (**emphasis** mine)

> Apple will charge a **27% commission** on the price paid by the user, net of value-added taxes. This is a reduced rate that excludes value related to payment processing and related activities. Developers will be **responsible for the collection and remittance of any applicable taxes**, such as the Netherlands’ value-added tax (VAT), for sales processed by a third-party payment provider.

This seems disingenuous. 3% for credit card processing _and_ handling the vagaries of taxation? That's going to be _difficult_. Surely, there’s more in that 27% for Apple to relinquish, ensuring that the developer isn't penalised for choosing a non-Apple payment method?

But what _might_ be the total cost to deliver App Store apps to end users? How much of _that_ does the $99 annual developer membership fee cover? What do these costs _to Apple_ look like for the top apps in the Apple App Store?

> This article is **not** an attempt to nickel-and-dime the cost of this to ‘the cheapest’. “I use VIM, my IDE is free!”, “I could host this cheaper with XYZ”, or “I can make a static web page! It’s trivial!” are legitimate points, but are not an accurate reflection of real-world concerns.
{: .post-note}

# What do developers get from Apple’s 30%?

There are three buckets of “value” that Apple provides to developers:

1. Developer Tooling (e.g. Xcode, Device Management, Crash Logs)
2. App Delivery / Hosting (e.g. Last-Mile QA, Binary Hosting & Delivery, Product Pages)
3. Purchasing (e.g. Purchase the app, In-App Purchase / Subscriptions)

None of these are ‘free’ – someone has to build & operate them at scale. None of these are viable to be cobbled together from bubble gum & sticks except for small-projects (e.g. hobbyist).

# What would these cost on the open market?

If we [tot up](https://www.merriam-webster.com/dictionary/tot%20up) the median costs of the individual component, assuming first-month costs only, guessing that customer growth doesn’t vary significantly month to month, along with some sweeping generalisations, we arrive at some dollar-values:

See [spreadsheet](https://1drv.ms/x/s!Ap3hdML7twidk58sVkJK_lZMKh8J9g?e=ZR54Se) for a breakdown, and the Appendix for details.

| **Item**                         | **Median Cost**   |
| -------------------------------- | ----------------- |
| Developer Tooling                | $30/month         |
| _App Delivery_                   |                   |
| Product Listing                  | $15/month         |
| Last Mile QA                     | $114/month        |
| Delivery (Acquisition + Updates) | $85,580/month     |
| _Purchasing_                     |                   |
| Purchase cost                    | $0.41/purchase    |
| IAP cost                         | $0.40/monthly sub |
| Developers Revenue (3rd Party)   | $2,095,281        |
| Developers Revenue (Apple)       | $2,234,413        |

The fixed costs – Tools, Product Listing, and Last Mile QA – become rounding errors for even a moderately successful app (even a hobby app!). It’s the _delivery_ costs that dominate, along with transaction fees, depending on your specific pricing model.

At the _low_ end of app purchases & IAP, it's almost a wash between Apple and 3rd Party a-la-carte. When you focus on the IAP costs, it starts to look ridiculous – it's apples [money machine going brr](https://www.youtube.com/watch?v=O1hCLBTD5RM), all for basically not cost to Apple, right?

**But**, if it’s free-to-download app, the only place for Apple to recoup the delivery costs is through the 30% on the IAP. If your subscribers are > 1 year of tenure (or you're in the small business program) – 15% cut – your monthly update CDN costs are likely eclipse that 15%, leading to a loss for Apple.

Projecting further, we can take a free-with-optional-subscription app (e.g YouTube) and make some assumptions (acquisitions stay constant, customer keeps app installed for 3 months, [delta-updates](https://developer.apple.com/documentation/xcode/doing-advanced-optimization-to-further-reduce-your-app-s-size) at 30% of original binary), we see the cost of user acquisition + updates at $810,691 a month. Apple's 30% cut covers this, with approximately 50% of that going on the CDN costs _alone_. That means for those tenured subscribers, the 15% won't cover the CDN costs. Ultimately, if you compare the 3rd party costs to Apple's revenue, it's ~$500k in apples favour. Thats a margin of 35% – not uncommon in the digital space.

Across the Top apps on the App Store, there is significant diversity on on costs, pricing model, user base, etc. –  there’s no one-size-for-all solution.

# An a-la-carte App Store

To me – a non-expert, screaming into the void – it seems clear that there should be an _unbundling_ of the developer-side services that Apple provides for its 30%. You have the choice of Apple its 30% as the one-stop-shop for everything needed to deliver an app. **Or**, you purchase each component separately, and optimise for your specific business:

1. Fixed-fee per app submission/review
2. Fixed monthly price for using Xcode, Product listing, etc.
3. Choice of either Apple’s CDN, or provide your own (and all that comes with running that)
4. Purchases transact through a third party, or some other % to continue to use Apple’s purchase flow.

As I’ve [previously talked about](https://www.codevoid.net/ruminations/2021/03/21/decoupled-app-stores.html), others will flock to providing turnkey services that attempt to undercut Apples 30%. For some this will be a slam dunk choice – especially for apps with large user bases + significant revenue. Others will not be worth the energy compared to the 'best in class' bundle from Apple.

There are some technical challenges here (aka if you host on your own CDN, how does that work with App Review?), but it’s mostly just a _policy_ and _billing_ choice.

Apple believes it delivers ‘best in class’ in anything it does. The App Store is pretty good as a store. But it needs to let it be **seen** as best-in-class by offering _choice_, and that requires it to [unbundle](https://stratechery.com/outline/bundling-and-unbundling/) the _developer_ services of the store.