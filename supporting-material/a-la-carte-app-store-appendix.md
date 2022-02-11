---
title: Appendix - A-la-carté App Store
layout: post
comments: false
---
# Developer Tooling

Xcode is a full-featured, world-class developer tool — compilation & build, debugging, documentation, distributed build, performance diagnostics, crash analysis, and whole load more.

If you look across the industry, there are only a few competitors that come close to the quality & feature richness: Microsoft’s Visual Studio, and JetBrains IntelliJ. Sure, theres also Android Studio, but thats IntelliJ licensed as part of the [Google Play developer fee ($25)](https://support.google.com/googleplay/android-developer/answer/6112435?hl=en#zippy=%2Cstep-pay-registration-fee).

| **Product**                | **Monthly Cost per Engineer** |
| -------------------------- | ----------------------------- |
| IntelliJ                   | $14.90                        |
| Visual Studio Professional | $45                           |

These seem like reasonable alternatives to gauge pricing.

Ultimately, outside of the small indie w/ no-revenue, these are effectively rounding errors to any other costs. Even then, those costs are not *prohibitive*, and offer student/learning editions for free.

This starts our cost tab *per month* at **$30**.

# App Delivery / Hosting

You’ve built your app using the purchase tools, now you need to deliver it. To do that you need:

1. Hosting of the product page including the promotional images & videos
2. Last Mile QA (aka App Review)
3. CDN costs for end user downloads of the app itself

*Sure*, Last Mile QA is debatable (If you're just putting it on the internet, why do you need a review?), but every developer has submitted something that didn't work / crashed during app review.

How much do these items cost?

## Product Page Hosting

App store pages include text, images, and *video*. Depending on the app these pages may get significant traffic. Ideally, you don't want to have to manage this, so you'll contract out.

Most simple eCommerce pages offer a low-cost, unlimited hosting with up to 30 of video.

| **Service** | **Hosting** |
| ----------- | ----------- |
| Squarespace | $16         |
| WIX.com     | $14         |
| WordPress   | $8          |
| *Average*   | *$14*       |

Because the App Store product listing pages include review comments, we'll need content moderation service – $1/thousand text reviews through [Azure Content Moderator](https://azure.microsoft.com/en-us/services/cognitive-services/content-moderator/).

This gives us an approximate cost of **$15** a month for a product page.

## Last Mile QA

Assuming that it takes a skilled QA engineer 2 hours to review you app, as well as the tooling/support for supporting that engineer (e.g. App Store Connect on the *other* side).

How much does a QA engineer cost? According to [salary.com](https://www.salary.com/research/salary/posting/software-development-engineer-test-sdet-hourly-wages), the 90th-% cost/hr is $52. Lets hand wave, and suggest that on an annual basis the cost of supporting the tooling is $10 a month for some sort of App Store Connect *thing*.

We’ve got an additional **$114** added to our tab.

## CDN Costs

There are many ways to skin this cat. Taking a conservative approach, and calculating the average cost Azure, AWS, and Google Cloud’s CDN delivery costs, across all regions, multiplied by the number of downloads & size of the app binary size. Binary size was picked from the app store product page for the app.

Looking across the top apps in the app store, we get a Median cost of **$0.02** per download. Pretty cheap!

But how many downloads does a top-tier app get? At the time of writing, the top free app was [Wordle!](https://apps.apple.com/us/app/wordle/id1095569891). According to [Sensor Tower’s](https://app.sensortower.com/ios/us/steven-cravotta/app/wordle/1095569891/overview) stats, this is 3,000,000 downloads a month. With an app binary size of 127.4mb thats $41,057 in CDN costs. For a free app. Its starting to look spendy.

The median cost for the top apps is **$46,581**.

# Purchasing

Accepting credit card costs is not low-cost — the cost / challenges of performing the *transaction* itself are not insignificant. And thats before we get into the requirements for tax collection, remittance, refunds, fraud.

Lets take a look how much it might cost for an almost turn-key solution through Stripe:

| Item                                                  | Cost                                   |
| ----------------------------------------------------- | -------------------------------------- |
| [Credit Card Processing](https://stripe.com/payments) | 2.9% + $0.30 / 1.4% + €0.25[^eu-cards] |
| [Billing](https://stripe.com/billing/pricing)         | 0.5%                                   |
| [Tax Mangement](https://stripe.com/tax#pricing)       | 0.5%                                   |
| [Fraud Management](https://stripe.com/radar)          | $0.07                                  |

These are the *raw* transaction costs that stripe offers. One has to assume that for someone like apple to turn this into a completely turn-key solution there would also be a markup. But for now, lets say it's just the raw costs - **2.9% + $0.37 per transaction. (1.4% + €0.25 in the EU)[^eu-cards]** 

Then you get into *mandatory* work & processing for any legitimate business – taxes. It's [non-trivial](https://stripe.com/guides/introduction-to-sales-tax-vat-and-gst-compliance) to collect, process, and pay taxation in a single country. Thats before you cross international borders, and transact in multiple currencies. Multi-nationals already do this, but smaller companies do not. But *someone* has to do it. Stripe charges 0.5% fee to tran

Median purchase price of apps that charge for ‘download’ is $1.23, and the median of the lowest-cost-IAP is $0.99. That gives us $0.41 for download, and $0.40 for an IAP. Thats a lot more than 30% flat fee.

Clearly this isn’t a complete story of the purchase costs – at median prices, the fixed cost dominates the overall transaction.

If we look at some top apps with significant monthly fees (e.g. Streaming Video), we can see they fair a little better with costs around 4% of the IAP cost.

[^eu-cards]: The EU places a [cap on credit card merchant fees](https://en.wikipedia.org/wiki/Interchange_fee#European_Union).