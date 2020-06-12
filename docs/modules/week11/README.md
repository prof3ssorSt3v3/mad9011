# Week 11 - SVG Animation 

## Applying CSS animations to SVG elements

SVG can have lots of effects inside it, including hovers, transitions, animations, masking, filter, and patterns etc. First, we will put our SVG into our HTML document and then apply some of these effects in our CSS file. We will learn how to use/reuse SVG symbols and icons and apply animation to them. Lastly, we will make SVG accessible and discuss SVG best practices.

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

#### CSS transition

Watch this tutorial to understand the CSS transition properties: `transition-duration`,  `transition-property`, `transition-timing-function`, `transition-delay`

<YouTube
  title="Animating with CSS Transitions - A look at the transition properties"
  url="https://www.youtube.com/embed/Nloq6uzF8RQ"
/> 

#### CSS transform

We will follow along this video to practice adding transitions to an SVG by using CSS `transform` and `transition` properties. Create an HTML file, and then add _`flower.svg`_ and _`CSS`_ code to your `HTML` file. [Download code](../week10/svg.html#resources)

<YouTube
  title="SVG Transitions"
  url="https://www.youtube.com/embed/vwIVdI3WMIc"
/> 

#### Transform Origin with pixels 

The `transform-origin` SVG attribute sets the origin for an item's transformations and it defults to the top left corner of the SVG canvas. However, the default transform origin for HTML elements is in the middle of themselves. To ensure the SVG animation working correctly in all browsers, we may need to set the pixel value to CSS `transform-origin` property. 

<YouTube
  title="SVG transform-origin"
  url="https://www.youtube.com/embed/AcdOzdoB390"
/> 

**Reference**

- [CSS `transition` properties](https://www.w3schools.com/css/css3_transitions.asp)
- [CSS 2D `transform` properties](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [CSS 3D `transform` properties](https://www.w3schools.com/cssref/css3_pr_transform.asp)

---

### ADDING ANIMATIONS

The three most common SVG properties we can animate with CSS, are SVG `fill` property, `opacity`, and CSS `transforms` on SVG elements. 

To use CSS animation, we will first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.

#### The @keyframes Rule

When we specify CSS styles inside the `@keyframes` rule, the animation will gradually change from the current style to the new style at certain times. To get an animation to work, you must bind the `animation` to an element.

#### CSS animation

The `animation` property is a shorthand property for:

- animation-name
- animation-duration
- animation-timing-function
- animation-delay
- animation-iteration-count
- animation-direction
- animation-fill-mode
- animation-play-state

<YouTube
  title="SVG animations"
  url="https://www.youtube.com/embed/8s70jpw5B5c"
/> 

Let's watch the 3rd video from LinkedIn Learning tutorial *CSS: Animation* to review 
- [Animate SVG with CSS](https://www.linkedin.com/learning/css-animation/animate-svg-with-css)


**Reference**

- [CSS `animation` shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [CSS `animation` properties](https://www.w3schools.com/cssref/css3_pr_animation.asp)

---

## SVG icons

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
