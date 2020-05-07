# Week 8 - AJAX, Promises, Timers

## AJAX

AJAX is a term coined back in 2005 by Jesse James Garrett. The actual technology has been in use since around 1999. The term stands for `Asynchronous JavaScript and XML` and was first available in Internet Explorer version 5.5 with the `XMLHttpRequest` object.

Basically, when we say `AJAX`, we are talking about the ability of the browser to request a new resource (XML, JSON, image, HTML, text, etc) and handle its receipt without having to replace the currently displayed webpage.

[AJAX and XMLHttpRequest](./ajax.md)

## Fetch

By 2014, and after a couple iterations of the `XMLHttpRequest` object, security problems were found and it became difficult to do all the things that developers wanted to do with AJAX technology.

So, a new approach was developed - `the Fetch API`. It included a single method called `fetch()` and a standardized collection of other Objects like `Request`, `Response`, `Body`, and `Headers`.

The process of making AJAX requests is now much easier and since support first rolled out in 2015 it is broadly supported now.

[Learn about fetch](./fetch.md)

## Promises

The `Fetch` API is actually built on top of another technology that became official with ES6 in 2015 - `Promises`.

Promises did for asynchronous programming, what fetch did for AJAX.

[Learn about Promises](./promise.md)

## Timers

If you want to do a task repeatedly and as quickly as possible then you use some type of loop. However, if you want to repeatedly do something with a delay between each task or you want to do something once after some delay, then you want to use the `setTimeout` or `setInterval` methods.

[Learn about setTimeout and setInterval](./timers.md)

## Keyword `this`

There is a keyword in JavaScript `this` which can be quite confusing to understand as it's value changes depending on the circumstances of where it is used.

Brendan Eich, the creator of JavaScript, has said that he regrets adding it to the language but did so because of pressure from his superiors to include more Object Oriented features and be more like another new popular language `Java`.

Despite all that, it can be a useful tool, once you understand how it works.

[Learn about `this`](./this.md)

## Arrow Functions and `this`

Arrow Functions are one of the cases where the meaning of the keyword `this` changes.

[Review Arrow functions and how they differ from other functions](./arrow.md)

## JSONP

There is a variation of JSON called JSON-P which was used to circumvent some of the restrictions imposed on fetching of JSON files. While not as common as it was five years ago, you may still come across it.

[Learn about JSON-P](./jsonp.md)

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 8 and watch all the videos in the notes for week 9.
  :::
