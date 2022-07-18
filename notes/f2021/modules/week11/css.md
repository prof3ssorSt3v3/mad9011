# CSS Reference

## Pseudo-classes

- A pseudo-class is a keyword added to a selector that specifies a special state of the
selected element.
- A pseudo-class will inherit the CSS property of the elements normal state
- There are many different pseudo-classes. Different elements can have different
pseudo-classes. 

```css
/* any element*/
div:hover {
    border: 3px solid red;
}

/* buttons and links */
button:active {
    border: 1px inset black;
}

/* inputs */
input:invalid {
    background-color: red;
}

/* checkboxes and radio buttons*/
input[type="checkbox"]:checked {
    background-color: green;
}
```

## CSS Transition

To create a CSS transition effect, you must specify the *CSS property* you want to add an effect to and the *duration* of the effect. The transition takes no effect when it is at its default duration value of 0.  We will use the following transition properties: `transition`, `transition-delay`, `transition-duration`, `transition-property`, `transition-timing-function`

```css
/* Defaults of transition properties */
.button {
    transition-property: all;
    transition-duration: 0s;
    transition-timing-function: ease;
    transition-delay: 0s;
}

/* Shorthand */
.button {
    transition: all 0s ease 0s;
}
```

- The `transition-property` sets which CSS properties will be transitioned. E.g. color, width, height

```css
/* Affects all properties, all is the default. */
.button {
    transition: all 1s ease 0s;
}

/* Does NOT work! */
.button {
    transition: color 1s;
    transition: width 2s;
}

/* Use a comma to separate multiple transition properties */
.button {
    transition: color 1s, width 2s;
}
```

- The `transition-duration` property sets how long a property will take to transition from one state to the next. The default value is *0s* and can be set to *seconds (s)* or *miliseconds (ms)*.

- The `transition-delay` property sets how long to wait before the transition should start. The default value is *0s* and can be set to *seconds (s)* or *miliseconds (ms)*.

- The `transition-timing-function` property sets the speed curve of the transition. Common timing fuction value include ease, ease-in, ease-out, ease-in-out, linear, step-start, step-end.


## CSS Transform

The CSS `transform` property lets you modify the coordinate space of the CSS visual formatting model. There are 4 functions we can use to transform an elements: `translate`, `rotate`, `scale`, and `skew`.

#### translate()

The `translate()` function moves an element in a X and Y direction.

```css
/* moves up and to the right */
.box {
    transform: translate(30px, -30px);
}

/* moves down and to the left 8*/
.box {
    transform: translate(-30px, 30px);
}

/* does not move */
.box {
    transform: translate(0px, 0px);
}
```

- The `scale()` function will increase or decrease the size of the element by multiple provided

```css
/* Increase the size in both directions */
.box {
    transform: scale(3);
}

/* Increase 2 in X direction */
.box {
 transform: scale(2,0);
}

/* Decrease the size */
.box {
 transform: scale(0.5);
}
```

- The `rotate()` will rotate an element by the given angle on the Z-axis. Use `rotateX()` or `rotateY()` to rotate an element on the X and Y axis. The angle value takes `deg` or `turn` units.  

```css
/* Rotate clockwise half way around */
.box {
    transform: rotate(180deg)
}

/* Rotate counter-clockwise all around */
.box {
    transform: rotate(-360deg)
}

/* Rotate clockwise 3 times around */
.box {
    transform: rotate(3turn)
}

/* Flips on X axis */
.box {
    transform: rotateX(3turn)
}

/* Spins on Y axis */
.box {
    transform: rotateY(3turn)
}
```

- The `skew()` function skews the element in X and Y direction by the provide angle. The value must be `deg` units


## CSS Animation

CSS `animation` properties make it possible to animate transitions from one CSS style configuration to another with more control than with using `transition`.

CSS Animation consist of two components, a style describing the CSS `animation` and a set of `keyframes` that indicate the start and end states of the animation’s style, as well as possible intermediate keyframes. 

- The `@keyframes` CSS at-rule controls the intermediate steps in a CSS animation sequence
- The @keyframes establishes keyframes along the animation sequence that must be reached by certain points during the animation



```css
.box {
    animation-name: spin;
    animation-duration: 4s;
    animation-iteration-count: 10;
    animation-direction: reverse;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-delay: 2s;
}
```

### CSS Animation Properties
- `@keyframes`: Specifies the animation code
- `animation`: A shorthand property for setting *all* the animation properties
- `animation-name`: Specifies the name of the `@keyframes` animation
- `animation-delay`: Specifies a delay for the start of an animation
- `animation-direction`: Specifies whether an animation should be played `forwards`, `backwards` or in `alternate` cycles
- `animation-duration`: Specifies how long time an animation should take to complete one cycle
- `animation-fill-mode`: Specifies a style for the element when the animation is not playing (before it starts, after it ends, or both)
- `animation-iteration-count`: Specifies the number of times an animation should be played
- `animation-play-state`: Specifies whether the animation is *running* or *paused*
- `animation-timing-function`: Specifies the *speed curve* of the animation (similar to the transition-timing-function)