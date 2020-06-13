# Week 11 - SVG Animation 

## Applying CSS animations to SVG elements

SVG can have lots of effects inside it, including hovers, transitions, animations, masking, filter, and patterns etc. First, we will put our SVG into our HTML document and then apply some of these effects in our CSS file. We will learn how to use/reuse SVG symbols and icons and apply animation to them. Lastly, we will make SVG accessible and discuss SVG best practices.

[Reference: SVG Animation](../week10/svg.md#svg-animation)


## Animation with CSS

There are SVG specific animations, named SMIL, but they are becoming deprecated. So CSS animations are a better way to go. Just treat your SVG elements like any other HTML elements. We will cover `transition`, `transform`, `transform-origin` with pixels, and `animation` in this lesson. 

To begin, let's review adding a CSS `hover` state to an SVG and then we will apply trasitions to it.

```xml
<svg width="120" height="120" viewBox="0 0 120 120">
   <rect class="button" x="10" y="10" width="100" height="60" />
</svg>
```

Then in CSS, we can do this:

```css
.button {
  fill: gold;
}

.button:hover {
  fill: green;
  stroke: red;
  stroke-width: 8;
  stroke-dasharray: 4;
}
```

### ADDING TRANSITIONS

CSS transitions allows you to change property values from one state to another smoothly, over a given duration.

#### CSS transition

The `transition` CSS property is a shorthand property for `transition-property`, `transition-duration`, `transition-timing-function`, and `transition-delay`. 

```css
/* Apply to 1 property */
/* property name | duration | timing function | delay */
.button {
  transition: fill 4s ease-in-out 1s;
}

/* Apply to 2 properties */
.button {
  transition: fill 4s, stroke-width 1s;
}

/* Apply to all (default) changed properties */
.button {
  transition: all 0.5s ease-out;
}
```

Watch this video tutorial to understand how they work.

<YouTube
  title="Animating with CSS Transitions - A look at the transition properties"
  url="https://www.youtube.com/embed/Nloq6uzF8RQ"
/> 

**References**

- [CSS `transition`](https://www.w3schools.com/css/css3_transitions.asp)
- [Try them on w3schools.com](https://www.w3schools.com/css/exercise.asp?filename=exercise_css3_transitions5)


#### CSS transform

CSS `transform` properties let us move, rotate, scale, and skew elements. We can apply a 2D or 3D transformation to an element.

**2D transform methods**: `translate()`, `rotate()`, `scaleX()`, `scaleY()`, `scale()`, `skewX()`, `skewY()`, `skew()`, `matrix()`

**3D transform methods**: `rotateX()`, `rotateY()`, `rotateZ()`

```css
.button {
  transition: transform 2s ease-in-out 1s;
}

/* 2D transform */
.button:hover {
  transform: scale(1.5);
}
```

We will follow along this video to practice adding transitions to an SVG by using CSS `transform` and `transition` properties. Create an HTML file, and then add _`flower.svg`_ and _`CSS`_ code to your HTML file. [Download code](../week10/svg.html#resources)

<YouTube
  title="SVG Transitions"
  url="https://www.youtube.com/embed/vwIVdI3WMIc"
/> 

#### Transform Origin with pixels 

The `transform-origin` SVG attribute sets the origin for an item's transformations and it defults to the top left corner of the *SVG* canvas. However, the default transform origin for HTML elements is in the middle of themselves. To ensure the SVG animation working correctly in all browsers, we may need to set the pixel value to CSS `transform-origin` property. 

<YouTube
  title="SVG transform-origin"
  url="https://www.youtube.com/embed/AcdOzdoB390"
/> 


**References**

- [CSS 2D Transforms](https://www.w3schools.com/css/css3_2dtransforms.asp)
- [CSS 3D Transforms](https://www.w3schools.com/cssref/css3_pr_transform.asp)
- [Examples on Codepen](https://codepen.io/nat-king/pen/LKgeoE)

---

### ADDING CSS ANIMATIONS

The three most common SVG properties we can animate with CSS, are SVG `fill` property, `opacity`, and CSS `transforms` on SVG elements. 

To use CSS animation, we will first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.

#### The @keyframes Rule

When we specify CSS styles inside the `@keyframes` rule, the `animation` will gradually change from the current style to the new style at certain times. To get an animation to work, you must bind the animation to an element.

#### CSS animation

The `animation` property is a shorthand property for `animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`, `animation-iteration-count`, `animation-direction`, `animation-fill-mode`, and `animation-play-state`.

```css
/* @keyframes duration | timing-function | delay | 
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;
```

Watch this video to complete our SVG animation with CSS practice. 
<YouTube
  title="SVG animations"
  url="https://www.youtube.com/embed/8s70jpw5B5c"
/> 

This time, we will also watch the 3rd video,[Animate SVG with CSS](https://www.linkedin.com/learning/css-animation/animate-svg-with-css) on LinkedIn Learning *CSS: Animation* tutorial to review what we have learned. 

Before you dive into Hybrid 8 - Coding an SVG, let's check out some cool [SVG with CSS animations made by *Hope Armstrong*.](https://blog.logrocket.com/animating-svg-with-css-83e8e27d739c/)


**References**

- [CSS `animation` shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [CSS Animations](https://www.w3schools.com/cssref/css3_pr_animation.asp)

---

## SVG icons & symbols

Animated SVGs are great for icons which can indicate micro-interactions and state changes and guide a user to the next action in an onboarding tour. They are commonly used to show status of loading, uploading, menu toggling, and playing/pausing a video. We will practice using SVG icons in this tutorial. 

<YouTube
  title="SVG icons"
  url="https://www.youtube.com/embed/EhNHe-f0LBI"
/> 

#### SVG symbols

We will practice using SVG `symbol` and `use` elements to make SVG icon systems.

<YouTube
  title="SVG symbols"
  url="https://www.youtube.com/embed/BO13gECyiuE"
/> 

---

## SVG accessiblity
Lastly, we will use the extended accessibility features of SVG and when/how to hide embedded SVG from accessibility tools.

<YouTube
  title="SVG accessiblity"
  url="https://www.youtube.com/embed/BieUh304KDA"
/> 


To conclude our SVG learning, let's watch Sarah Drasner's 2019 presentation: SVG Will Save Us

<YouTube
  title="SVG Will Save Us"
  url="https://www.youtube.com/embed/sxte3WpyO60"
/> 


## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 11 and watch all the videos in the notes for week 12.
  :::
