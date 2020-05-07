# level 1 heading

## level 2 heading

### level 3 heading

A paragraph is just any block of text with a carriage return before and after it. Actually, any item that you want space around should have a carriage return between the elements.

[This is the link text](http://www.example.com)

![alt text](http://picsum.photos/300/300)

- unordered
- list
- items

1. ordered
2. list
3. items

**BOLD TEXT**

_Italic Text_

The embedded YouTube video component:

<YouTube
  title="the title for the embedded youtube video"
  url="https://www.youtube,.com/embed/unique-video-id"
/>

## Tables

| Heading | Head    | Head    | Head    |
| :------ | :------ | :------ | :------ |
| content | content | content | content |
| content | content | content | content |

There needs to be spaces around the | characters

There needs to be a row with :---- as the content as the divider between the headings and the content.

Inside a paragraph we can add `inline code` with backtick characters.

````js{4}
let a = 'This is a code block';
let b = 'Three back tick characters at the start and end';
let c = 'After the first ``` add a language for the block';
let d = 'The {4} means line 4 in the code block will be highlighted';
````

> A paragraph that begins with the greater than sign will be an indented block of text with a grey background.

::: tip
This is a highlighted block of text with green border to the left and a grey background. Make sure you put a space after the three colons.

We can replace `tip` with `danger` or `warning`.

After `tip` or `danger` or `warning` you can add a second word (or words) to use as a title for the block.
:::

## Badges

<Badge text="30 mins" type="tip"/>

The badge element is a coloured block with white text. The default colour is green, because of the type="tip". The text will be whatever you put as the value for the text attribute. You can change the value of type from `tip` to `warning` or `error` to change the background colour.

## Emojis

You can add emojis to your page like this :smiley:

[Full list of emojis here](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)
