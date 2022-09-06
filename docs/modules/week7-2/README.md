# Week 7 - CSS Animation & SVG

::: tip Files
[Week 12 Tutorial Files Download](https://drive.google.com/uc?export=download&id=1i1J4KErKhQh0UGHYR3AjWTX88DxE9a1i)
:::

## Introduction

There are SVG specific animations, named SMIL, but they are becoming deprecated. So CSS animations are a better way to go. Just treat your SVG elements like any other HTML elements. We will cover transition, transform, transform-origin with pixels, and animation in this lesson.

To begin, let's review adding a CSS hover state to an SVG and then we will apply transitions to it.

```html
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

## CSS Transitions

CSS transitions allows you to change property values from one state to another smoothly, over a given duration.

### Transition Property

The CSS transition property is a shorthand property for transition-property, transition-duration, transition-timing-function, and transition-delay.

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

Watch this video tutorial to understand how CSS `transistion` properties work.

<YouTube
  url="https://www.youtube.com/embed/Nloq6uzF8RQ"
  title="Animating with CSS Transitions - A look at the transition properties"
/>

### Transform Property

CSS `transform` properties let us move, rotate, scale, and skew elements. We can apply 2D or 3D transformations to an element.

2D transform methods:

- `translate()`
- `rotate()`
- `scaleX()`
- `scaleY()`
- `scale()`
- `skewX()`
- `skewY()`
- `skew()`
- `matrix()`

3D transform methods:

- `rotateX()`
- `rotateY()`
- `rotateZ()`

```css
/* 
  CSS Transition
  property name | duration | timing function
*/

.button {
  transition: transform 2s linear;
}

/* 2D transform */
.button:hover {
  transform: scale(1.5);
}
```

We will follow along this video to practice adding transitions to an SVG by using CSS transform and transition properties. Let's create an HTML file, and then add flower.svg and CSS code to your HTML file. [Click here to download code](https://github.com/acgd-learn-the-web/advanced-svg-code/archive/master.zip).

<YouTube
  url="https://www.youtube.com/embed/vwIVdI3WMIc"
  title="Advanced SVG: transitions"
/>

### Transform Origin Property

The SVG transform-origin attribute sets the origin for an item's transformations and its default value is the top left corner of the SVG canvas. However, the default transform origin for HTML elements is in the middle of themselves. To ensure the SVG animation working correctly in all browsers, we may need to set the pixel value to CSS transform-origin property. Let's follow this video to practice.

<YouTube
  url="https://www.youtube.com/embed/AcdOzdoB390"
  title="Advanced SVG: transform-origin with pixels"
/>

## Applying CSS Animations

The three most common SVG properties we can animate with CSS, are SVG `fill`, `opacity`, and CSS `transform` on SVG elements.

To use CSS animation, we will first specify some keyframes for the animation. Keyframes hold what styles the element will have at certain times.

### The @keyframes Rule

In traditional animation, **keyframes** are important points in the timeline of an animation used for reference for figuring out how the animation will look and transition throughout the movement. For example, if I were to make an animation of someone lifting their arm and waving, the keyframes would be something like:

- Arm down at side
- Arm is raised
- Hand begins waving
- Hand stops waving
- Arm is lowered to side.

The animator would first create the animation at each of these stages, and then adjust how the figure changes and transitions between each stage.

In CSS Animations, we do something very similar with the `@keyframes` rule. We set CSS values at different stages of our animation and then the browser automatically creates the transition between those keyframes. Our animation can be simple with just a beginning keyframe (represented by `0%` or `from`) and an end keyframe (represented by `100%` or `to`), or can have multiple keyframes (for example `0%`, `25%`, `50%`, `75%`, `100%`).

```css
/* A simple animation that does a full rotation. */

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

/* A multiple step animation that moves up then back down. */

@keyframes jump {
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(5rem);
  }

  100% {
    transform: translateY(0);
  }
}
```

### Animation Property

The animation property is a shorthand property for animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.

```css
/* name | duration | timing-function | delay | 
iteration-count | direction | fill-mode | play-state */

.box {
  animation: rotate 3s ease-in 1s 2 reverse forwards paused;
}
```

<YouTube
  url="https://www.youtube.com/embed/8s70jpw5B5c"
  title="Advanced SVG: animations"
/>

## Resources

- [CSS animations & effects cheat sheet](https://learn-the-web.algonquindesign.ca/topics/css-animations-effects-cheat-sheet/)
- [MDN Docs — CSS animation shorthand](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Using Multi-Step Animations and Transitions](https://css-tricks.com/using-multi-step-animations-transitions/)

## To Do

::: tip To Do for Next Week

- Complete the Interactive SVG exercise
- Review the App Branding assignment
- Review week 13 content
  :::
