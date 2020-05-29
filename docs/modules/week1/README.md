# Week 1 Introduction to Mobile Design Fundamentals

## Introduction and Inspiration

Welcome to MAD9011, Mobile Design Fundamentals course, your level one design course. We are going to learn a lot of fun and useful material to help you design graphics and interfaces.  To have a smooth start: 

- Download and install the Adobe Creative Suite and Adobe Illustrator today 
- Ensure all tools are ready for the course this week, including Photoshop and XD
- Review Course [Overview & Policies](../../overview/)

For visual design inspiration, check out [Adobe Create online magazine](https://create.adobe.com/)

Got a question for our class? Feel free to post it on **Weekly Question Page (FAQ) - MAD9011:** [http://tiny.cc/e7y5oz](http://tiny.cc/e7y5oz)


## Design references
- [Psychology of colour](https://www.bcrpainting.com.au/bcrpainterblogs/2017/9/1/why-should-you-pay-attention-to-colour-psychology)
- [The Design Elements of Composing a Drawing](https://www.dummies.com/art-center/performing-arts/drawing/the-design-elements-of-composing-a-drawing/)
- 


## Tools and Software

The design tools we use are: Adobe Illustrator, Photoshop, XD, SVG (with code editor). You can find most of the links on the [Resources](../../resources/).

Download and install Illustrator, Photoshop, and Xd this week. [Adobe software download link](http://www7.algonquincollege.com/byod/adobe.htm)

You can aslo download other [BYOD Digital Resources.](http://www7.algonquincollege.com/byod/software.htm) 


### Adobe Illustrator

We will use several tools in **Adobe Creative Could.** Adobe Illustrator (Ai) will be the tool we use to create vector-based graphics.

- [Adobe Illustrator User Guide](https://helpx.adobe.com/illustrator/user-guide.html)
- [Ai Tool Gallery](https://helpx.adobe.com/illustrator/using/tool-galleries.html)
- [Ai Keyboard Shortcuts](https://helpx.adobe.com/illustrator/using/default-keyboard-shortcuts.html)
- [What's new in Illustrator](https://helpx.adobe.com/ca/illustrator/using/whats-new.html)


### Adobe Photoshop

We will start using Adobe Photoshop (Ps) in Week 5/6 to design raster-based graphics. Ps is an execllent tool for image optimization which can be loaded quickly on both small and large devices with the best resolution.  

- 

### Adobe XD



### VSCode

Git is the source control software that we will be using throughout the program. You will learn more about this in MAD9013 and MAD9112. It comes included when you install **VSCode**.

<YouTube
  title="Get started with Git"
  url="https://www.youtube.com/embed/EdEWigP6zxQ"
/>


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
