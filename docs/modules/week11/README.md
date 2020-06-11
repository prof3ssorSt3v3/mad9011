# Week 11 - SVG Animation 

## Applying CSS animations to SVG elements

SVG can have lots of effects inside it, including hovers, transitions, animations, masking, filter, and patterns etc. First, we will put our SVG into our HTML document and apply some of these effects in our CSS file. We will learn how to use/reuse SVG symbols and icons and apply animation to them. Lastly, we will make SVG accessible and discuss the best practices of using SVGs.

[Reference: SVG Animation](../week10/svg.md#svg-animation)


## Animation with CSS

We are going to apply what we learned last week to animate SVGs using CSS. We will cover transitions, transform origin with pixels, and animations in this lesson. 

To begin, let's review adding a CSS `hover` state to an SVG which is no different than other HTML elements.

```xml
<svg width="100" height="100" viewBox"0 0 100 100">
   <circle class="my-circle" cx="50" cy="50" r="40" />
</svg>
```

Then in CSS, we can do this:

```css
.my-circle {
  fill: yellow;
}

.my-circle:hover {
  fill: orange;
  stroke: red;
  stroke-width: 8;
  stroke-dasharray: 4;
}
```

### ADDING TRANSITIONS

Transitions allow us to smoothly change CSS properties on some elements from one state to another controlling the duration of that change as well as some other properties such as delay and timing function. 

Watch this tutorial to understand these CSS transition properties: `transition-duration`,  `transition-property`, `transition-timing-function`, `transition-delay`

<YouTube
  title="Animating with CSS Transitions - A look at the transition properties"
  url="https://www.youtube.com/embed/Nloq6uzF8RQ"
/> 

We will follow along this video to practice adding transitions to an SVG. Create an HTML file, and then add `_flower.svg_` and `_CSS_` code into your `HTML` file. [Download code](../week10/svg.html#resources)

<YouTube
  title="SVG Transitions"
  url="https://www.youtube.com/embed/vwIVdI3WMIc"
/> 

#### ADDING TRANSFORM ORIGIN 

Many cities around the world are starting to provide information about the City and its infrastructure to the public as `Open Data`. This is data available free of charge to the general public which most people believe should be public domain information.

Ottawa, [Calgary](https://data.calgary.ca/), [Toronto](https://www.toronto.ca/city-government/data-research-maps/open-data/), [Vancouver](https://vancouver.ca/your-government/open-data-catalogue.aspx) and [Edmonton](https://data.edmonton.ca/) all provide Open data.

[Learn more about OpenData in Ottawa](./ottawa.md)

### ADDING ANIMATIONS

ClientURL (CURL) is a command line tool that lets you make HTTP requests from the command line. It comes preinstalled on MacOS but can be installed on any OS. It can be very useful for testing APIs and avoiding CORS issues when planning your fetch code.

[Learn more about CURL](./curl.md)

## Async - Await

As part of ES6, there were two new keywords `async` and `await` that allowed us to tell JavaScript that we were calling a method, which we expected to be an asychronous one, and have our function wait for the response in a synchronous way. Effectively it wraps the command inside a `Promise`.

[Learn more about async and await](./async.md)

## Iterable and Enumerable

Some objects are iterable and others are enumerable, and some are both. Understanding the difference between the two can help you write your code more effectively and without unexpected errors.

[Learn more about Iterable and Enumerable](./iter.md)

## Content Security Policy

There is a `meta` tag that you should add to all your webpages. This Content-Security-Policy tag will help you to protect your users from Cross-Site Scripting (XSS) attacks.

You should add this to ALL your webpages, web apps, and hybrid apps.

[Learn more about CSP](./csp.md)

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 11 and watch all the videos in the notes for week 12.
  :::
