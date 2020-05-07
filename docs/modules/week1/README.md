# Week 1 Introduction to JavaScript and Tech

## Introduction and Inspiration

Here is [a series of videos](./inspiration.md) to help get you thinking about what is coming and how you can contribute to the world.

## Tools and Software

You can also find most of these links on the [Resources page](../../resources/).

### VSCode

The main IDE (Integrated Development Environment) that we will use for all our web technology related work will be VSCode.

You need to download and install it on both MacOS and Windows. [VSCode download link](https://code.visualstudio.com/download)

<YouTube
  title="Getting started with VSCode"
  url="https://www.youtube.com/embed/Y_lWpD66oT8"
/>

### Git

Git is the source control software that we will be using throughout the program. You will learn more about this in MAD9013 and MAD9112. It comes included when you install **VSCode**.

<YouTube
  title="Get started with Git"
  url="https://www.youtube.com/embed/EdEWigP6zxQ"
/>

### GitHub

[GitHub](https://www.github.com/) is a website with a Git Server built-in. It is basically free hosting for all your Git Projects, Gists, and Static Git Websites.

You need to **create an new account on GitHub** for use with the MAD&D program.

::: warning
Use your @algonquinlive.com email address and your algonquin username to create the GitHub account. Do **NOT** use your private email and username.
:::

<YouTube
  title="Get started with GitHub"
  url="https://www.youtube.com/embed/M9uTajSRytE"
/>

[Learn more about Git and GitHub](./git.md)

### NodeJS

[NodeJS](https://nodejs.org/en/) is a JavaScript runtime that allows us to write programs using JavaScript without the browser.

::: warning
Install version 10.x of NodeJS on both Windows and MacOS.
:::

### NPM

[NPM](https://www.npmjs.com/) Is the Node package management system for programs written with JavaScript and running with NodeJS. It gets installed when you install NodeJS.

Over the next 4 semesters we will be using this A LOT.

### Cordova

[Cordova](https://cordova.apache.org/docs/en/latest/s) is the Open Source version of PhoneGap, which is the framework and packaging tool from Adobe to turn web apps created with HTML, CSS, and JS into native-like mobile applications for Android and iOS.

The original version of PhoneGap was created by a Canadian company called Nitobi from Vancouver. Adobe bought Nitobi after the success of PhoneGap and the day after the purchase was finallized they created an Open Source version of PhoneGap called Cordova and gave it to the Apache Software Foundation to host and manage.

We will be using NPM to install and manage Cordova.

### Android SDK & Android Studio

An SDK is a Software Development Kit. Basically it is a collection of tools and software to create and compile applications for a specific platform. The Android SDK will be what we need to create Android apps. We will need this in addition to the Cordova framework.

We will be [installing Android Studio(https://developer.android.com/studio) to be able to update and choose components and APIs for our Android apps.

For this semester we will be using Android Studio **on Windows only**.

Next semester we will be installing Android Studio and the Android SDK on MacOS too.

### iOS SDK & XCode

The iOS SDK comes bundled with XCode. XCode is the Apple software for creating iOS and MacOS applications. Currently it only runs and compiles applications from MacOS.

Next semester, in MAD9022, we will using XCode and the iOS SDK in combination with Cordova to create iOS apps.

XCode is a free download from the MacOS App Store. You can install it any time you want. Just make sure that you update it next semester.

## JavaScript

JavaScript is a dynamic interpreted language. This means that you create your program as a text file, then that text file will be passed to and read by another program, like a browser, without any changes to what you wrote. The file is interpreted by the program that the end user is using.

Some languages are compiled, which means you write your text file and then send it to a compiler. The compiler reads your file, combines it with others possibly, and generates a binary file which is often the final application which the user will run. Applications get compiled to run on a specific platform - like Windows or Android.

If you open up a compiled program you will not be able to see the original code that was written to create it.

Javascript files are text files with a `.js` file extension. Until quite recently the only place you would use a JavaScript file would be in the browser with a webpage. The browser would read an HTML file and see that it needed to load and interpret the JavaScript file too.

Now, with NodeJS, we can run our JavaScript files on the command line. We can embed our scripts inside other applications or devices. There are many iot devices that use embedded JavaScript to run programs.

### Declaring Variables

A variable is a container for holding information. When we write programs in JavaScript we need to be able to hold pieces of information and pass that information around. A variable is the thing that holds that data.

There are three ways to declare a variable in Javascript.

```js
var name;
let age;
const id;
```

The original way of creating a variable was with the keyword `var`. You will see many code samples online that use `var`.

In 2015, a new version of JavaScript was released with two new keywords - `let` and `const`. These are new and improved versions of `var`.

For most of what we do this semester we will just use `let` to create our variables.

A variable is, as the name implies, something that can change its value. We will use `let` to create our variables.

Something that never changes is constant. We will use `const` to create variables whose value is not allowed to change.

The process of writing `let` followed by a name is called `declaring` a value.

When we want to put a value inside the variable, this is known as `assigning`.

```js
var name = 'Bob';
let alive = true;
const ID = 40123456;
```

The convention for naming constants is to write the name in all capitals.

Strings need to have either single ' or double quotes " around the value. Numbers and Booleans do NOT use quotation marks.

<YouTube
  title="variables"
  url="https://www.youtube.com/embed/RpU7NezV8PM"
/>

<YouTube
  title="let and const"
  url="https://www.youtube.com/embed/HukePwm-XG8"
/>

### Datatypes

In JavaScript, the variables (not the constants) are dynamic. This means that you can replace one value with any other value you want.

In staticly typed languages, like C++, when you create a variable you also have to state WHAT KIND of value you want to put in the variable.

A datatype defines what kind of information you can store in a variable. In JavaScript there are two main groups of datatypes: `Primitives` and `Objects`.

There are seven types of `Primitives`: `String`, `Number`, `Bigint`, `Boolean`, `null`, `undefined`, and `Symbol`. We probably won't be talking about BitInt or Symbol this semester. BigInt was just added to the language and isn't supported in most places yet. Symbols are used in very specific places and mostly in pre-built features.

**Everything** else is an Object.

A Primitive is only a value. It has no other capabilities.

If the thing that you are working with has properties or methods then it is some type of Object. There are lots of kinds of Objects. Most of what we do will be creating Objects and using Objects.

<YouTube
  title="Primitive Data Types"
  url="https://www.youtube.com/embed/fLKzh4L00TI"
/>

### Comments

When programming it is recommended that you add lots of comments to your files. this helps to identify who wrote the file, the current version of the code, what things need to be updated or changed, which features still need to be finished, things that need to be fixed, and also notes to yourself about what certain lines of code do.

Sometimes there will be months between the times that you look at your file. In cases like this it can be very helpful to yourself as well as people who work with you if you add comments explaining your thinking behind your code.

#### Single Line Comments

If you want to add a comment on a single line in JavaScript, do this:

```js
let name = 'Steve'; //Create the variable to hold the user's name
```

#### Multi-line Comments

If your comment is more extensive and extends beyond a single line then we use a forward slash and an asterix to start the comment and an asterix and forward slash to end the comment.

```js
const ID = 40123456;
/*
This is a multi-line
comment.
It can be as long as we want.
*/
const KEY =
```

#### Comment File Header

It is considered a best practice to add a multi-line comment at the top of your JavaScript file. Inside this you would include information like a description of the purpose of the file, your name, the date and version of the most recent update.

```js
/**
 * @file
 * This file controls the main web app. It
 * loads data from thee MovieDB API and displays
 * a list of current recommended movies to
 * the user.
 *
 * @author abcd0001@algonquinlive.com
 * @version 1.2.16
 *
 ***************************************/
```

This method of naming the parts of the header is following a convention known as JSDoc. [Learn more about JSDoc tags](https://devdocs.io/jsdoc/)

#### Function Comments

Another place you can add comments is to describe the purpose of a function.

```js
/**
 * Update the settings object
 * @param  {String} key The setting key
 * @param  {*}      val The new value
 */
var setting = function(key, val) {
  // if the setting doesn't exist, bail
  if (!(key in settings)) return;

  // Update the settings
  settings[key] = val;
};
```

[Read more about documenting code](https://gomakethings.com/how-i-document-my-code/). Also see the JSDoc reference above.

## TODO

::: tip TODO before next week

- Read all the notes for Week 2 and watch the videos. This will help you to answer quiz questions and prepare you for the lectures and the Hybrid exercises.
  :::
