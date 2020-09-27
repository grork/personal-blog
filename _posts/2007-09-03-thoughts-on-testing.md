---
title: Thoughts on testing
tags: [ "testing", "programming", "opinions", "book" ]
description: Extract from my book on testing with Visual Studio 2005
---
_Many_ — many — _years ago I wrote a few chapters for a book: “[Professional
Software Testing with Visual Studio 2005 Team System](https://www.wiley.com/en-us/Professional+Software+Testing+with+Visual+Studio+2005+Team+System%3A+Tools+for+Software+Developers+and+Test+Engineers-p-9780470149782)”.
While I think the book is now probably out of date, I thought it would be
worth posting some of the more timeless content (aka not the “Press this button”
parts) as a blog post. Do note this was written back in **2007**. Also, the
publisher was pushing to hit a specific page count to justify the price, so in
some cases I am… wordier… than one should be. Sorry._

# Chapter 3 - Unit Testing
Often developers ask when they’re writing their applications, “Am I doing this
right? Did I break anything else?” Unit testing provides a simple, efficient,
and flexible way to achieve a greater peace of mind through fast, reproducible,
automated tests. However, unit tests can go beyond simple unit tests toward
scenario testing — it all depends on the problem you’re trying to solve

## Overview of Unit Testing
When I first heard about unit testing I didn’t understand it, and I didn’t see
the point. Why should write some tests that don’t really test anything specific?
You’re just testing some small, minimally functional method. How does that help?
Over time I saw that so many fixes broke simple functionality which would bubble
up the layers of an application to the point that it would cause major issues. I
realized if I had written a small test that I could run every time I made a
change, I would have saved myself an enormous amount of work.

### Why Unit Test?
When you are building an application, over time you create a number of layers —
each layer relying on the assumptions, assertions, and implied behaviors of the
layer below it. It is when these beliefs start to be broken and torn down that
you start to see issues in your applications. Unit tests allow you to revalidate
these assumptions after every change. You are asserting your beliefs about the
application layers.

As a lone developer of an application (or “on a project”), it is often easy to
understand your codebase from end to end, and understand all the interactions of
different components of the application. However, as soon as you become a team
(that is to say, more than one person), your personal knowledge starts to wane.
The other people with whom you are working at not able to read your mind, and
conveying your assumptions and interactions becomes more and and more difficult.
While to a certain extent it is possible to rely on clan knowledge, this does
not survive the ravages of time and begins to wane as people leave the team and
move onto different projects. Unit tests become a great way to translate this
knowledge into code — a universal language that reflects what is really going on
rather than what is believed to be going on. If your project has a collection of
unit tests, whenever anyone on your team makes a change, they can validate the
application behaviors quickly, allowing them to be confident that the changes
they have made are the correct ones.

### Approaches to Unit Testing
While unit testing itself is a specific approach to testing your application,
there are actually several different approaches within the world of unit
testing. The basis of these is often more more ideological than practical, but
there are lessons to be learned from each different approach.

The major differences revolve around the question of what to test with your unit
tests is related to the public versus private implementation. There are many
drawbacks and benefits to each — often determined by what you are actually
building. But using public versus private as the only deciding factor is unwise.
This is why the following sections are broken down into “Test What You Want” and
“Testing Only Publics.” The first imposes no pre-defined suggestions on what you
should test, whereas the second implies that you should and encourages you to
test all your publicly exposed code. The other major approach is more of a
development methodology rather than a flavor of unit testing. Instead of
starting with coding, you start by building tests to validate that which you
have not yet written. This is often counterintuitive but can turn out to be an
especially powerful approach.

#### Test What You Want
When the author of the tests sits down to start creating unit tests, one of the
biggest questions they face is what to test. With new code this can be easy:
Just start testing everything that you are writing, section by section. However,
as your codebase starts to grow, this can become unwieldy and also complex. What
about that legacy codebase that you need to shore up to ensure that it stays
stable? That’s even harder. There are thousands of lines of code and hundreds of
classes, all of which have complex interactions that are ever so difficult to
untangle to a state that you can test.

This brings us to the important realization that you test what you want to test,
not what some prescribed mandate has dictated you should test. You don’t test
everything, and you don’t test nothing. You use your understanding of your
codebase, the bug history, and your intuition to know what to write tests for.
This can be very useful, and is also a pay-as-you-go model. There is no huge
cost upfront, and you can incrementally build out the test set for your
application.

The only major drawback with this approach is the level of trust you place in
yourself and the test of  your team to author your tests.

#### Test Only Public Implementations
When one performs proper encapsulation, there is a set of public and private
methods, each performing different and more locally scoped operations. These
provide a clear boundary for types that are shared between components. Only the
public members are the entry points between your application layers.

Because of the assertion that your most likely area for defects is changes in
the behavior between layers, why bother testing that the behavior of private
implementations of the types is correct? The private implementation details are
just that — private details that are irrelevant to anyone and should not be
tested. If they are private they will be fluid, and the overhead of having to
test privates (and maintain those tests) will be too significant to provide any
value.

The very basic premise here is that you have to test the publics, and if you
break one of the privates, your tests for those publics will ensure the
validation of the privates. Depending on your understanding of the code, this
can also have the drawback of having to track back through the failure to
understand exactly which private method has failed.

#### Test-Driven Development (TDD)
Test-Driven Development (TDD) is a very different approach to unit testing —
insomuch as it is not in reality a way of testing, but a way of development. It
provides a significant change to your development process and appears on the
surface to be very similar to “test-first development”; however, this is an oft
held misconception. A great example of this was the Visual Studio Team Test
team, who published an article on how to do test-driven development in VSTEST,
only to have the TDD community cry out against the article. Fundamentally, the
team misunderstood what was meant by _Test-Driven Development_ — believing it
was test-first development. The TDD community is very passionate about ensuring
that the underlying design process of TDD does not get confused or lost, and
because of this they were very passionate about ensuring that the article
portrayed TDD correctly. Test-first development is an approach in which all your
tests are authored up front, and then you author the code, running the tests as
you go. This seems very similar to TDD, but the fundamental difference is what
the tests look like. Test-first development results in tests that take a typical
form of attempting to test functionality as described below. TDD takes a much
more fine-grained perspective.

Within the team there was great discussion about the article and how to resolve
the concerns with the community — both by publishing an updated article and also
by investigating unit test IDE (integrated development environment) integration
feature improvements for future versions of Visual Studio by actively engaging
the TDD community.

It’s important to understand that TDD changes the whole workflow of your code
authoring. You write your tests before you have written even one line of
application code: Your tests start to dictate the design of your application, as
you write only the minimal amount of code to ensure that the tests pass. As you
build out your tests, you may go so far as to create empty methods in your
application code that return immediately — a placeholder implementation of that
method.  This reiterates that the tenet  that your tests are validating
assumptions. Knowing your code is “good” and your tests passing means that you
can move forward on the implementation and allows you to validate immediately
that your new, expanded implementation is good. If your test fails, you need to
resolve that issue before progressing forward.

TDD is a very powerful approach and is something that can only really be
understood through experience. It is also very difficult to talk about from an
abstract perspective, or even to provide a step-by-step guide for. It’s about
how you approach the problem,. And your thought processes. Learning through
application is the key here.

_Many screen shots, and Visual Studio specific talking removed from the rest of
the chapter_

# Chapter 8 -  Using Code Analysis and Dynamic Analysis
_This chapter was about static analysis, profiling, and code coverage. Code
coverage was the most timeless of the content_

## Code Coverage
Part of instrumentation in profiling is about finding out how often functions
(or lines within a function) are executed. A side effect of this functionality
is you can see which lines within your application have and have not been
executed, enabling you to detect dead code and untested sections of your
application. This means better testing, and if you find real dead code, you can
remove it, which will result in less code to maintain.

_More how-to-click-buttons removed_

### Blocks, Lines, and Partial Coverage
Code coverage is measured using two measures — lines and blocks. Lines are
exactly what one expects them to be: the lines in your source code. However,
blocks are not quite what one may interpret them to be — blocks of source.
Blocks are sections of control within the compiled binary. These blocks may no
the manifested in the source code in anyway, which is an example of why you may
find it difficult to attain 100% coverage. The uncovered blocks have no source
construct to interpret to write additional tests. These blocks are inserted by
the compiler and are for housekeeping purposes.

When one is looking at lines, there are three states that a line is in —
covered, not covered, and partially covered. The first two states are clear:
Either your line of code was executed, or it was not. However, with a
“partially” covered line, it’s not completely covered. This is the case with a
multi-condition if-statement, where by you have many clauses that are not
evaluated at every execution; tertiary statements are also an example of these
statements. Finally, if you place many lines on one line, these also will show
up as partially covered if something causes the statements to not be executed
(e.g., an exception being thrown).

```cs
Random rand = new Random();
int rand1 = rand.Next(1, 10);
int rand2 = rand.Next(1, 10);
if((rand1 < 5) && (rand2 > 5))
{
    Console.WriteLine("Random number in range");
}
```

When you execute this code, for example, by placing it in a unit test and
executing that unit test (with coverage enabled), viewing the results will show
that the if-statement is only partially covered.

This means that after evaluation of the first clause proved the entire condition
could not be evaluated to `true`, the second statement was not executed —
therefore only “partially covered”. While this contrived example seems
unimportant, in the case of two clauses requiring two method calls to be
evaluated, it can have a significant impact on what you are actually testing.
You can see the opposite with “or” clauses, where it will not evaluate the
second class because the first has evaluated to `true`.

### When to Care, When Not to Care
Code coverage is measured in percentages — the percentage of all lines in the
chosen binary that are executed over a specific execution of that binary. While
at first it seems like you should aim for 100%, this turns out to be a bad idea,
because as your application grows both in size and complexity, it becomes
increasingly difficult to maintain that 100% coverage. One specific example of
this is trying to ensure coverage of error handling code. It can be very
difficult to cause error conditions occur, and in many cases it can be
impossible without the addition of fault injection tools, which can be very
costly.

If you set a goal of 100% at then beginning of the project, when the inventible
missed goal occurs, it will be a precipitous fall from that goal, rather than a
momentary lapse. It’s under these circumstances that you usually have the
epiphany that while code coverage is very significant in ensuring that the
important parts of your application are being tested, it cannot prove that your
application has been tested.

For a moment, lets suppose your application has 100% coverage — every line of
your application has been executed, and all of your tests have passed. What does
that tell you? That your application is bug free? That you are successfully
testing all the possible paths through your application? It doesn’t tell you
either of these things. The coverage number is a good “canary in the coal mine”
metric; it can tell you when things are mostly okay and when things are
definitely going bad (no coverage is a bad sign). What it doesn’t tell you is
whether your QA team is testing the right part of the application, in the right
way. They could just be calling all the functions (private and public)m or they
could just be making sure that the error conditions are occurring and being
tested.

Take as an example the following code snippet:

```cs
MyType myInstance = null;
if(OtherCondition())
{ myInstance = new MyType(); }
myInstance.DoWork();
```

When you get 100% coverage on this snippet, it is missing a very important code
path that would create a `NullReferenceException` after the if-statement. But
because of the false security of 100% coverage, it won’t be found until much
later in the product cycle, where it is most expensive to fix, test, and
release.

The key takeaway from this is that 100% coverage does not mean your application
is being fully tested. It means that all lines of code have been executed and
some different paths through the code require more investigation to ensure that
they are correctly tested. It’s a canary in a coal mine, not a conclusive
answer.