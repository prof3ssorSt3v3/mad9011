# Week 5 - DOM

## Running JavaScript in the Browser

You can attach one or more JavaScript files to your your webpage by using a `<script>` tag.

[Learn How](./script.md)

## Document Object Model

When the browser reads an HTML file it creates an Object model representing all the content on the page. It builds a tree structure that helps it to know which elements are nested inside each other, which elements are parents and which are children.

This is a visual representation of how a browser sees the page. You can think of each indent as the start of a new branch in the DOM tree. Inside the `html` object, there are two children - `head` and `body`. Inside the head are two more children - `title` and `link`. title has a child, which is `#text`. The `link` element has no children. Inside `body` > `header` > `h1` there are two children - `img` and `#text`. The `img` and the `#text` are siblings.

```
doctype
html
  head
    title
      #text
    link
  body
    header
      h1
        img
        #text
    nav
      a
        #text
      a
        #text
      a
        #text
    main
      h2
        #text
      p
        #text
    footer
      p
        #text
```

You need to be able to visualize every page in this manner. Understand when you are searching for things or altering things that you will be working with parents, children, and siblings.

### Nodes and Elements

Each one of the things listed above, in the DOM diagram, is a `Node`. There are several kinds of types of nodes, including `ElementNode`, `TextNode`, `DocumentFragement`, and `Comment`. There are others but these are, by far, the most common.

There are node properties and methods which work on all the types, some that work only on Element nodes, and some that work only on Text nodes.

[More about DOM and Nodes](./dom.md)

## querySelector, querySelectorAll, and getElementById

The two methods we use the most to find elements on the page are `document.querySelector` and `document.querySelectorAll`. The difference between them is that `querySelector` finds the first match starting at the top of the page and `querySelectorAll` finds ALL the matches.

[Learn more about querySelector](./query.md)

## Creating, Changing, and Removing Content

Manipulating HTML can be done quite easily once you understand the parent-child-sibling relationship between Nodes and the difference between Element nodes and Text nodes.

[Learn about altering HTML with JS](./append.md)

## Live Preview

Once you start testing things in the browser, you will want to be able to get a live preview, meaning that every time you save a change to your files the browser will refresh itself.

There is an extension for VSCode called "Live Server" by Ritwick Dey. Currently, version 5.6.1. You should add this extension to VSCode.

If you want to add HTTPS support to the live preview, here is how:

<YouTube
  title="https support for VSCode Live Server"
  url="https://www.youtube.com/embed/v4jgr0ppw8Q"
/>

This extension is NOT required now. Save this for future reference.

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 5 and watch all the videos in the notes for week 6.
  :::
