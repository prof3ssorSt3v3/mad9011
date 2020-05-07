# Week 2 - Conditionals and Functions

## Booleans

Booleans are one of the Primitive types. They can have a value of `true` or `false`. The value must be written in lowercase and have no quotation marks around it. However, other values in JavaScript will also be considered either `truthy` or `falsy`.

[Learn about truthy and falsy](./falsy.md)

## if Statements

When your program needs to make a decision and carry out different tasks based on the value of one or more variables, then an `if` statement is how we do this.

They are known as Control Flow statements. Here is a simple example:

```js
let x = 123;
if (x < 100) {
  console.log("x is less than 100");
} else {
  console.log("x is more than or equal to 100");
}
```

[Learn more about if statements](./if.md)

## Ternary Statements

The ternary statement allows us to write simple logic statements similar to an `if..else` statement but one one line, with less syntax. Here is a simple example of one:

```js
let y = x < 100 ? 50 : 150;
//y will be assigned either the value 50 or the value 150
//depending on the value of x.
```

[Learn about ternary statments](./ternary.md)

## Functions

In JavaScript, functions are a way to bundle together a series of commands so that they can be called all together at the same time. Here is an example of what a function declaration looks like.

```js
function doSomething() {
  let num = Math.random(); //generate a random number between 0 and 0.99999999
  console.log(num);
}

doSomething(); //tell the  doSomething function to run
```

[Learn more about functions](./functions.md)

## Scope and Hoisting

Scope is a term that describes the area in your code where each variable and function is visible to other parts of your code.

When variables and functions are declared, they are actually hoisted to the top of their scope. This is done before any of your code is executed.

[Learn more about scope and hoisting](./scope.md)

## Future Video Reference

When trying to find one of Steve's videos on a certain topic, go to the [Channel Home page Video Tab](https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ/videos) and click on the Search icon beside the About tab. You can type in the name of the video title or part of it.

Alternatively, you can go to the [playlist page](https://www.youtube.com/channel/UCTBGXCJHORQjivtgtMsmkAQ/playlists) The videos are grouped by topic into playlists. Eg: Arrays, DOM, Events, Functions, etc.

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Read the notes for week 3 and watch all the videos in the notes for week 3.
  :::
