# Week 10 - Introduction to SVG

## Scalable Vector Graphics (SVG)

Scalable Vector Graphics (SVG) is an XML-based vector image format for two-dimensional graphics with support for interactivity and animation. SVG images are defined in XML text files. In this section, we are going to learn how to generate good SVG code using Illustrator and preparing it to be animated and used on the web as well as how to write our own SVG code from scratch. 

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
