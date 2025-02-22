---
title: "🔗 Roundup No. 9"
description: "I hope these links find you well."
tags: [ "link-roundup", "opinions" ]
---
Huh. I've not posted one of these since May 2024. Good job I've collected up a
few to share out with my meaningless thoughts on each one. I think this roundup
is quite electic. Lets get to it!

# Technology
> Some what meta comment: Is AI separate from technology, or is it all part of
> technology know? 🤔 Anyway, I've lumped it all together.

- [Alignment faking in large language
  models](https://www.anthropic.com/research/alignment-faking): I thought this
  was interesting — not so much the concept of a model ‘concealing’ it’s true
  thoughts, but the extracting some ‘secret’ thought stack into a separate
  scratch pad. It’s not clear from the post if this is in the token stream (and
  trained to skip over?) of if it’s distinct from the token stream, so doesn’t
  influence the output token stream. On ‘concealment’ itself: It doesn’t feel
  *that* odd given the large input data set that even in a ‘pure’ token
  prediction scenario that *linguistically* the concealment would be covered
  through text. It doesn’t feel super insightful?

- [LLMs have say everything out loud. But maybe they
  don’t](https://arstechnica.com/ai/2024/12/are-llms-capable-of-non-verbal-reasoning/):
  I’ve long been… displeased? Disappointed? That the core capabilities of the
  LLMs seems to be exposed through… english prose. We’ve come thousands of
  years, a 100 years of computers, with hundreds of formats for data and we
  conclude… english? Is the *lingua franca* of the future of intelligence? That
  seems weird, and terribly inefficient. But this article suggests that there is
  hope to being able to have the conversion to english/text be *optional*. This
  gives me hope, because surely the future isn’t built upon a keen understanding
  of their / they’re & your / you’re…

- [Faith & Fate: Fuzzy
  Transformers](https://www.answer.ai/posts/2024-07-25-transformers-as-matchers.html):
  insert that standard distribution graph with the amateur at the start, enjoyer
  in the middle, and the expert at the end. Amateur & expert say “LLMs are just
  fancy auto complete”. Enjoyers ascribe consciousness…

- [The AI
  Summer](https://www.ben-evans.com/benedictevans/2024/7/9/the-ai-summer):
  Theres something different this time with AI. But it’s not that it’s going to
  be the fastest technology transformation — it’s going to take a long
  slumbering, lazy summer, to find out how they can actually be useful; how they
  can have purpose; how they can add value. How they can be something beyond a
  distraction.

- [Machines of Loving Grace](https://darioamodei.com/machines-of-loving-grace):
  This is a great read as the contrast to the fever dream that is [Situational
  Awareness](https://situational-awareness.ai). This seems to have its feet on
  the ground — albeit hopeful, aspirational feet — about what might happen. I
  think it’s too positive in its hope for biology/medical breakthroughs, and too
  hand wavy for the social/governmental impact (“idk, might be hard” doesn’t cut
  it). Definitely worth a read to at least level set how those that are running
  the foundation modelers are projecting their own dreams.

- [Where are we on AI
  expectations?](https://hardcoresoftware.learningbyshipping.com/p/220-are-ai-expectations-too-high?r=y1x1&utm_medium=email):
  as they say “it’s artificial intelligence until it works”, this takes a look
  at some of the historical cases of the last few AI boom-to-bust and asks us to
  learn from the past

- [What Do We Want Computers to
  Do?](https://lmnt.me/blog/what-do-we-want-computers-to-do.html): This is a
  great article that gets to the core of what the _value_ of generative AI is.
  Everyone’s own personal bar will be different. There are levels of care &
  passion that go into the various jobs we all do in our lives. But there is
  also context — if I’m  unskilled (in art, as I am), and I wish to obtain an
  image for a flyer etc, I have different choices available. I can pick from
  pre-existing stock art (from free clip art to a getty image), I can create
  something that does not meet what I envisioned, but is ‘authentic’, or I can
  accept something that gets closer, but still a long way from my minds eye (aka
  Generative AI). It’s not an absolute measure — the context does matter. But
  it’s also influenced by people who have something else in their life that **to
  them** matters more than creating something without ‘generative’ tools —
  either because of cost, time, or they dgaf. There is no one answer.

# Software Engineering
- [Decision-Making pitfalls for technical
  leaders](https://chelseatroy.com/2024/10/16/decision-making-pitfalls-for-technical-leaders/):
  Making decisions is more than just making the decision. Theres so much more
  about the context of the decision — not just the things that go *into* the
  decision, but your own framework of making that decision. It’s very easy apply
  one perspective to all decisions, but really you have to think about what it
  is you’re actually trying to achieve **and why**.

- [Systems: The purposes of a system is what it
  does](https://www.anildash.com//2024/05/29/systems-the-purpose-of-a-system/):
  Reading this article, I realised I do this _all the time_. I just wasn’t
  thinking about it in a pure systems sense. I was caught up in ‘incentives’,
  and how when people rail against behaviour of their coworkers — a faceless
  process implemented by their coworkers — I say ‘think about the incentives
  that the humans involved here have, and how they may cause the behaviours you
  see’. But this I think is so much better. The system is doing what it does. It
  is not ‘broken’. The context, and purpose of the system might be broken, and
  instead of changing the system — wagging the dog — change what the system is
  supposed to be doing.

- [Poets and police](https://randsinrepose.com/archives/poets-and-police/): This
  feels like “Dreamers” vs “Absolutists”, and I’m **so** in the Poet/Dreamer
  bucket. I love the contrast between someone painting a picture of a better
  future — a path forward — and someone who calls out the gap between what is
  being sold, and the reality ultimately in an attempt to destroy the dream.

- [Software Engineer Titles Have (Almost) Lost All Their
  Meaning](https://www.trevorlasn.com/blog/software-engineer-titles-have-almost-lost-all-their-meaning):
  There is a trope — one which I have observed first hand — that titles have
  been inflated over the last 5-8 years or so. I saw it before that with the
  phrase “Senior is the new SDE II”, and I’ve seen it recently as ‘Principal it
  the new Senior’. The reality is that it’s not that clear cut, but theres also
  more than a grain or nugget of truth here.

  There is — of course — the counter-argument that this theory is powered by
  capitalistic motivations on company **and** personal levels.

  1. As an employer, you *of course* want to keep titles deflated — it saves you
     money!
  2. As a coworker, you want to keep getting the bigger slice of the pie, and to
     laud your title over others. You need to punch down to keep yourself
     elevated.

- [Eng org seniority-mix model.](https://lethain.com/engineering-cost-model/):
  Will Larson has been on a tear recently using Systems Modeling to look at the
  impact of different policy or investment choices you can make in your
  organization — they’ve been great. This one, however, shone a light on a
  slightly uncomfortable truth: You can’t promote everyone all the time. You
  *have* to constrain and be *intentional* about your mix. You have to also
  manage those senior people out to promote from within.

  This is an interesting companion article to ‘Title Inflation’ I’ve also
  linked.
- [Writing Down (And Searching Through) Every
  UUID](https://eieio.games/blog/writing-down-every-uuid/): I love how
  everything is “fake”. None of it is an anything like what you would build to
  meet the “spec” because it’s all tweaked meet what your perceive correctly
  rather than the “factual” interpretation of the “spec”.

  For historical job experience reasons, I’m still impressed he got the
  scrolling almost perfect, when there is, infact, no scrolling happening.
- [Microsevices are technical
  debt](https://www.youtube.com/watch?v=LcJKxPXYudE): Interesting video, spicy
  title. More seriously: "Microservice all the things" **does** lead to
  technical debt. But it's better termed 'sociotechnical debt' rather than pure
  technical debt.

  But it also sparked this thang I've been grinding on for years: Microservices
  are 'dynamic libraries' from client software development with higher latency.
  It's the same problems but with latency. For the longest time I've been trying
  to find the right way for me to talk about it like that without people going
  'wtf'. This video actually made me realise: there is more active discussion of
  resolving these tensions *in the 'services world'* than the client world
  (E.g., big honking windows monolith), and that I should instead be trying to
  get the client monolith people to engage with the services world to make
  forward progress on understanding their problem.

  ([Post](https://bthdonohue.com/2024/09/26/microservices-are-technical-debt.html)
  that took me to this video)

# Leadership / Management / Career
- [Economic Termites Are
  Everywhere](https://www.thebignewsletter.com/p/economic-termites-are-everywhere):
  This would have been better titled as “Hidden Monopolies”. It opens really
  strong, and sets a great picture for an interesting deep dive. But then whiffs
  it by basically exposing some relatively obvious monopolies, rather than
  resolving the opening scenario of an expensive commercial space refit. Still
  an interesting skim.

- [Nobody knows whats going
  on](https://www.raptitude.com/2024/06/nobody-knows-whats-going-on/): Working
  in tech, at a time that tech is written about everywhere, really throws this
  into sharp relief. We’re all just moving around on hopium & copium highs.

- [Story Points are Pointless, Measure
  Queues](https://www.brightball.com/articles/story-points-are-pointless-measure-queues):
  I have, for over a decade, used the phrase “story points are not a convertible
  currency” to mitigate the inter-team battle of how-many-points-did-you-do that
  the Pointy Haired Types always catalyze. This article talks about this, and
  some other suggestions. It’s conclusions are reasonable, grounded, and well
  thought through (breakdown to tasks, measure you queue length). But at the
  same time it feels like it’s written from the perspective of ‘This is a pure
  way to do it’, and misses how you can actually get it in to an organization.
  It also feels grounded in ‘my problem can be mapped out without reams of
  pre-work’, which I feel some ‘high-tech’ companies can’t do — bringing up a
  new AI model integration into an OS seems like it’s not a ‘discovered set of
  work’, and makes it hard to extrapolate further out *in reality*.

- [Things I learned about
  strategy](https://www.techcanbebetter.com/things-i-learned-40-years-ago-about-strategy-layoffs-capital-intensity/):
  While short on ‘data’, this post resonates. “You make things, or you sell
  things” is a truism — I always thought “don’t work in a cost center” was also
  a good way to apply this. And the strategy — so much yes. “strategy is not
  something that some staff person does, strategy happens every day in every
  decision and your line managers need to be your best strategists”.

- [Grifters, believers, grinders, and
  coasters](https://www.seangoedecke.com/programmer-archetypes/): The article
  says this, but before you click: This isn’t about *deception* or *fraud* in
  the workplace. You need to go in thinking of different words to describe the
  archetypes. I would have picked ‘Pleasers, Believers, Grinders, and Minders’ —
  Pleasers want to present a perspective that ensures they move forward *by
  pleasing people*; minders are just minding their own business doing whats
  needed and getting on with life. **Anyway**, the article talks about the
  different relationships that they have with their jobs, and how you need a
  good mix for a healthy organization.

- [Why shouldn’t I go back to my
  ex?](https://www.threads.net/@3ambrokeness/post/DEg03vUxDyX): “Why shouldn't I
  go back to my ex?' He said, 'If you see the same tree twice in a forest; It's
  because you're lost.“. I can’t stop thinking about this — not in the context
  of romantic relationships (I don’t dispute in that context!), but life in
  general. That job you once had. That house you lived in. When you’re searching
  for a repeat, it means you’re not sure where you are any more and you need
  comfort and familiarity.

- [How AI will change
  democracy](https://www.schneier.com/blog/archives/2024/05/how-ai-will-change-democracy.html):
  The interesting take away isn’t “AI & Democracy”, it’s that automation has
  outsized impact when it enables order of magnitude changes (increases) the
  scale the system or process being automated. You can see echos of this across
  other times – where scale has changed through automation. Publishing (the
  internet) becoming free — changes everything about information flow. eCommerce
  changes how prices manifest — they change in a blink of an eye, and are even
  less uniformly distributed than “before”. Be conscious of what a step change
  would mean.

- [The Ghosts In The
  Machine](https://harpers.org/archive/2025/01/the-ghosts-in-the-machine-liz-pelly-spotify-musicians/):
  Musicians are taking contract work to make ends meet and feeling the loss of
  their ‘soul’ is the same software developers doing their job where they have
  become unmoored from passions - side projects are their true passion. The
  musicians are aghast at the fact that business went and businessed something
  that was clearly going to happen, even without Spotify/Streaming. Boy/girl
  band formulaic pop of the 90s-00’s for told this. Bowie was the harbinger with
  Bowie Bonds. We’re now surprised by the overtness, but it was inevitable.

  [Casual Viewing](https://www.nplusonemag.com/issue-49/essays/casual-viewing/)
  is essentially the same, but about the movie industry. It’s more impassioned,
  more existential, dare I say *ranty*. But it’s come across the same point —
  commoditization of content, because it turns people don’t care about what they
  read, what they watch, and what they listen to. It’s not chewing gum for the
  eyes or ears — it’s chewing gum for the soul. And it’s full of empty calories.

- [Home-cooked software and Barefoot
  developers](https://maggieappleton.com/home-cooked-software): I’ve long had
  this vibe that a lot of software is built solely in the context of ‘hitting it
  big’ or being ‘a success’ (by the larger social norms), and that we’re missing
  the fact there is a different world for software that ‘solves peoples
  problems’ — problems that are terribly narrow, and absolutely not a business.
  But they **do** make peoples lives better. This presentation/transcript from
  Maggie goes down this path under the banner of ‘local-first software’ (really,
  she means local software for local people) with a side helping of a concept of
  “barefoot developers”.

- [Design doesn’t have to end like
  this](https://www.jovo.design/writing/ai-and-design): A very thought provoking
  article about the relationship between business, AI, and the discipline of
  Design. Theres a thread of ‘stick it too the man’, and ‘it’s about the _craft_
  man’. But then I realized that if you substitute ‘design’ and ‘designer’ with
  ‘engineering’ and ‘engineer’, and it hit differently. It was clear I was
  saying the same things, taking the same stance — unwilling to embrace the
  inevitable, and thinking about ‘taste’ as the de facto determinator in
  everything.

- [How I use “AI”](https://nicholas.carlini.com/writing/2024/how-i-use-ai.html):
  This is such an interesting article. It’s how a real person really uses
  AI/LLMs. And it blows my mind in a way that I have to introspect a lot. This
  person deals in a currency that feels somewhat *ephemeral* — nothing is
  permenant. And the LLM does a great job here. But also seeing the level of
  detail and discussion they go into throws me off a little, and I can’t
  quantify why. We invest orders of magnitude more effort & time to get **actual
  fucking humans** to do this stuff. But this — chatting with an LLM — some how
  feels like more work for less valuable outcome. But, thats just the *feeling*.