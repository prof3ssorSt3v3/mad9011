# Week 10 - Prototype, Async, APIs

## JavaScript is a Prototype Based Language

You will hear a lot about `prototype` and `class` over the next few semesters. They are two different approaches to designing and architecting software. The problem is that in your early days of programming they can seem like almost the same thing.

We will try to help you understand the differences here in simple practical terms that will let you write better JavaScript with fewer unexpected errors.

A `Class` is a blueprint for building objects. It is not an object itself, just the plans for building a certain kind of object. Classes inherit properties and methods from parent classes. When you create (`instantiate`) an object from a class, the object will be given copies all the properties and methods from it's class blueprint as well as copies of all the properties and methoods from all the ancestor parent classes. So, when you call an Object's method, the method actually exists inside the Object.

A `prototype` is an example Object. It is an Object. Think of it as the first one built. In JavaScript, when we create an Object a constructor function is used to build the object. That function has a `prototype` object. We can put any methods that we want to share with all the objects built with that constructor into that prototype object. We can still link our objects to parent ones but we don't copy the methods, instead, we just link to the parent's prototype. There is a chain of prototype type objects. When we create (`instantiate`) our Object, it doesn't need copies of all the methods and parent methods. If we call an Object's method and the method does not exist inside our Object, then JavaScript will look up the prototype chain for the method and delegate (borrow) the method to run.

[Learn more about Prototype](./proto.md)

## Asynchronous vs Synchronous

JavaScript has a mechanism known as the event loop. When you pass a list of commands to the event loop, it will keep running each of those commands in order until it gets to the end of your list. This list is known as the main stack. JavaScript keeps trying to run commands as long as there is something on the main stack.

However, sometimes there is a command that would stop the event loop from getting to the next command. It gets blocked from going to the next command in the stack. These types of commands are things that take a long time to complete, like talking to a database, or the file system, or a network request for a file, or a timer that needs to wait before running.

There are specific tasks that are going to take too long and they get put into a secondary area so they can wait for their result. These tasks are known as asynchronous.

If the code stays on the main stack and insists on being run before the event loop moves on to the next item then it is called synchronous.

[Learn more about asychronous](./synch.md)

## APIs

An API is an `Application Programming Interface`. Which is a fancy way of saying - here is a list of commands that you can call when talking to a web server, a program, a framework, a library, etc.

There are HTML5 APIs that we will be using. There are online APIs that we will be using too. Most of the time, as web developers, when we talk about an API, we are referring to a web server that has specific URLs which we can use to retrieve data or files.

[Learn more about APIs](./apis.md)

## Custom Sorts

Want to move beyond just the built-in string sort method available on the Array object? Want to be able to do numeric sorts or sort objects?

[Learn more about doing custom sorts on Arrays](./custom.md)

## Content Security Policy

There is a `meta` tag that you should add to all your webpages. This Content-Security-Policy tag will help you to protect your users from Cross-Site Scripting (XSS) attacks.

You should add this to ALL your webpages, web apps, and hybrid apps.

[Learn more about CSP](./csp.md)

## CORS

CORS stands for Cross-Origin Resource Sharing. It is the mechanism through which the browser determines whether a resource from a different web server is allowed to be used on your webpage. This is built into the browser. You need to work with the process, not try to find ways to avoid it.

[Learn more about CORS](./cors.md)

## Passing Data to APIs

The two Request methods that we use the most are `POST` and `GET`. The different request methods determine how data is bundled and sent to the server along with your resource request.

When you need to pass data there are actually several ways to do this - headers, querystring, and formdata.

[Learn more about uploading data](./headers.md)

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 9 and watch all the videos in the notes for week 10.
  :::
