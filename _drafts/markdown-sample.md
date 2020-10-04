---
title: Markdown Sample containing many items of interest
tags: [ "draft", "markdown", "dont-publish" ]
---
Sample page, containing all the supported markdown content we can
possibly imagine. Useful for testing. Don't publish.

# h1 Heading 8-) that is quite long and goes on and on and on really for a while
This is some text. It's quite a sensible amount, talking about different things
to allow us all to consider the variations of presentation.

When the quick brown fox jumps over the lazy dog, we all learn something new.

Fall asleep upside-down bathe private parts with tongue then lick owner's face
man running from cops stops to pet cats, goes to jail, but poop on floor and
watch human clean up for spot something, big eyes, big eyes, crouch, shake butt,
prepare to pounce but play time purr when being pet.

Meow. I will ruin the couch with my claws lick master's hand at first then bite
because im moody taco cat backwards spells taco cat loves cheeseburgers yet
side-eyes your "jerk" other hand while being petted but kitty ipsum dolor sit
amet, shed everywhere shed everywhere stretching attack your ankles chase the
red dot, hairball run catnip eat the grass sniff. Nyan fluffness ahh cucumber!. 
## h2 Heading, also long and annoying. Maybe too long some would say.
Also some text
### h3 Heading. Nope-rope. Danger-noodle. Murder-Floof. WHO KNOWS.
Still text, yo.
#### h4 Heading
Honestly, i think it's text
##### h5 Heading
Srlsly, text?
###### h6 Heading
WHO WOULD THINK?
## Horizontal Rules

___

---

***

## Typographic replacements
test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'

## Emphasis
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes
> Blockquotes can also be nested...
> > ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

But also a single quote on it's own:
> Single quote, with many words

## Lists
### Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

### Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
    1. Something

Lazy

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

## Code

Inline `code`

Indented code
{% highlight javascript linenos %}
// Some comments
line 1 of code
line 2 of code
line 3 of code
{% endhighlight %}

Block code "fences"
```
Sample text here...
```

Syntax highlighting

``` csharp
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

## Images

![Minion](https://octodex.github.com/images/minion.png){: .image-full-bleed }
{: .image-container }
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.

### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b