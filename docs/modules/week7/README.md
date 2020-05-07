# Week 7 - XML, JSON

## XML

XML is a data format that is designed to be human readable first.

It is a markup language like HTML except you get to decide on the tags yourself.

Most importantly, it is for **DATA NOT PRESENTATION**.

<YouTube
  title="XML Intro"
  url="https://youtube.com/embed/CiXeEkbj_yg"
/>

[Official reference for XML](https://www.w3.org/standards/xml/)

There are four special characters that need to always be handled in your XML files - `<`, `>`, `&`, and `"`. These four must be written as character entities - `&lt;` `&gt;` `&amp;` and `&quot;`.

Lynda.com video about [working with data formats like XML and JSON](https://www.lynda.com/CSS-tutorials/Working-Data-Web/133326-2.html)

[Learn more about Reading from XML files](./xml.md)

## JSON

JSON stands for JavaScript Object Notation. It is similar to XML in that it is a data file format but it is a slightly more compressed format. The reduced size means that your data files are smaller but it also means that they can be a little harder to read.

<YouTube
  title="JSON Intro"
  url="https://youtube.com/embed/P2LdhPpqSiU"
/>

The [official reference site for JSON](http://www.json.org/)

All the unicode characters can be found on [the Unicode charts](http://www.unicode.org/charts/).

Lynda.com video about [working with data formats like XML and JSON](https://www.lynda.com/CSS-tutorials/Working-Data-Web/133326-2.html)

<YouTube
  title="JSON vs JavaScript Objects"
  url="https://www.youtube.com/embed/912_cPllMyg"
/>

[Learn about Reading JSON with JavaScript](./json.md)

## Nested Loops

It is a common thing for data structures to have Arrays inside an Array. Visually, you can think of this as a grid or table of data. There will be rows and columns.

To write loops that will traverse over the whole data structure, we can use nested loops. The outer loop looks at the rows. The inner loop looks at the columns.

[Learn how to use nested loops](./nested.md)

## XML and JSON Validation

After you have created your XML or JSON files, you should ALWAYS validate your data.

You want to be sure that you have properly followed the standards.

Here are a couple websites that you can use to validate your data files.

[XML validation](https://www.xmlvalidation.com/)

[JSON validation](https://jsonlint.com/)

## Callback Functions

In JavaScript, functions are considered to be first-class Objects. This means you can treat them like any other variable or Object. You can pass them to a function or return them from a function.

This affords us the ability to pass functions to other functions and let it decide if and when it wants to call the function being passed in.

[Learn about Callback functions](./callback.md)

## Closures

Closures are a very important concept in Javascript. They have to do with how scope works in connect with functions and variables.

To really understand the value being saved or updated in a variable you need to understand its scope. To fully understand scope you need to understand what a closure is.

[Learn about Closures](./closure.md)

## Call, Apply and Bind

We have been calling functions from the start of the semester using a set of parentheses after the name of the function.

However, there are three methods that allow us to call a function and change the context of how the function runs.

[Learn about call, apply, and bind](./bind.md)

## Chrome Dev Tools

Chrome comes with an extensive set of Developer Tools, built into the browser.

[Here is the link to the official supporting guides](https://developers.google.com/web/tools/chrome-devtools/)

There are also excellent developer tools in MS Edge and Firefox, and to a lesser extent in Safari.

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 7 and watch all the videos in the notes for week 8.
  :::
