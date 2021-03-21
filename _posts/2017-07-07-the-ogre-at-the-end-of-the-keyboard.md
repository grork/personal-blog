---
title: The ogre at the end of the keyboard
tags: [ "software", "opinions", "pull-requests", "empathy" ]
---
I’m not talking about trolls on Twitter, flunkies on Facebook, or the
ill-informed on the internet that have you seeing red.

I’m talking about the calm, peaceful, genuine, and amenable human at the end of
a pull request or code review. They just happen to come across as the biggest,
most insensitive asshole that you’ve ever had the displeasure to communicate
with. And they keep doing it. All the damn time.

![Gif of Ferris Bueller, Pardon my french, but you're an asshole](https://media.giphy.com/media/82ydvKFHMCdFK/giphy.gif){: .image-fill-width}


But you can’t avoid these jerks. Pull Requests (nee, Code Reviews) are a
fundamental part of software development. Its critical that they’re productive,
welcoming, and inclusive. But they’re not:  
> When you write and/or submit code for review, do you feel emotionally vulnerable? [poll]
> — Stephanie Hurlburt (@sehurlburt) [May 1, 2017](https://twitter.com/sehurlburt/status/859108203056857088)[^deleted]

[^deleted]: This tweet was deleted, but copied from prior to deletion


Slack recently published a great article “[On empathy & Pull
Requests](https://slack.engineering/on-empathy-pull-requests-979e4257d158)”.
It’s sentiment reminded me of the constant battle between good & evil that
humans have as they give & receive feedback in the little text boxes that appear
all over pull requests. Those text boxes — so innocuous, so simple — provide a
direct & unshielded way to inflict harm straight to ones core, with but the
tiniest barb.

## Humans aren't telepathic
When you’re reading that code from that peep millions of electrons (20 feet)
away, you have the seed of an idea for a comment. You let it grow into a full
formed textual representation of that idea, clear to everyone as to your intent,
concern and fully conveyed context complete with subtle nuance.

Except it isn’t. It’s barely coherent, stripped of the tone in your voice, and
_totally_ lacking in those unconscious body language cues. You, in fact, sound
like a insensitive & uncaring tosser, who has barely taken the time to read and
understand what is right in front of you.

On top of coming across less than favorably, you have failed to _actually_
convey the point we’re originally trying to make. The code author is hurt &
angry, and you are annoyed that they can’t grasp such simple feedback. It’s so
clear! _Right_?

Nope. Humans can’t replay exactly what the other person was thinking; we can’t
read minds.

It’s clear that text isn’t the best form for conveying constructive feedback —
without careful authorship, [it lacks all of the non-verbal cues that make us
human](http://nautil.us/issue/50/emergence/why-you-need-emoji). But, it’s also
the best we have in these situations.

This means you have to overcompensate. Not by writing more, but by writing
[_authentically_](http://www.printwand.com/blog/15-tips-for-writing-in-a-conversational-tone).
Read it back — imagine standing next to yourself and saying the words you just
typed in the most unflattering way possible. I know it wasn’t meant that way,
but by golly it’ll be read that way. Then rewrite it. Use punctuation,
[emoji](http://nautil.us/issue/50/emergence/why-you-need-emoji), symbols, links
to make it sound like you actually meant it 😇.

A pull request is not the time to apply English 101, hoping you can make your
teachers proud. Think more like those quirky back ‘n forth exchanges you read
in your favourite novel.

## Really, humans aren't telepathic
You’ve written some fantastic, beautiful code. It’s the most _amazing_ code; so
simple to read & understand that anyone can follow along like a children’s book.

Except no-one else can see the
[matrix](https://m.youtube.com/watch?v=7-GTcHZkfCs) you are seeing. They’ve not
spent 3-days understanding all the complexities of this particular component.
They haven’t understood the history that led you & the code here. Or heard from
the team wizard about why its fucked up the way it is, but it’s the least fucked
up it could be.

To help with this, and to bring clarity to the 200 line & 4 file change, you’ve
added a clear message to your commit:  
> Bug fixes & adding feature wibble

I mean, it’s clear from the code changes which bug fixes are present? And the
`Wibble.*` files being added show exactly what the wibble feature is. Not only
that, you’ve written copious inline code comments clarifying the **why** of the
code, _right_? Thought not.

The commit & pull request descriptions are your opportunity to tell a **story**
about about the change. It’s a chance to provide information to code
archeologists when you are no longer around (or on vacation). It’s a chance to
provide clarity today, _right now_, for this change — for this _journey_.

## They still can't read your mind
Even when you’ve written the 🎉**best**🎉 pull request message, and you’ve
word-smithed your feedback to include just the right gif you still might come
across as an ass. You tried your best, but some how something still got
misunderstood.

Then, you, the reader, have to give them the benefit of the doubt. You **have**
to assume that wasn’t their intent (if it was, find new coworkers &
collaborators). Assume they are sweetness & light. Assume that the code is being
authored with the best intentions & motivation, it has reason & logic behind it,
and was intended to be that way for good _reasons_.

If you just can’t do that, go talk to the other person. 📞 them. IM them.
Approach them from the side of _you_ being the one at fault — not screaming down
the pipe at them about being an insensitive arse. Chances are it’s just a small
miscommunication.

Remember, most of all:
> **We're all in this together**