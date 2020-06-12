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

CSS transitions provide a way to control the speed in which CSS property changes. You can cause the CSS property change to take place immediately or over a period of time. There are 4 CSS Transition properties: 

```css
// Defaults of transition properties
.button {
    transition-property: all;
    transition-duration: 0s;
    transition-timing-function: ease;
    transition-delay: 0s;
}

// Shorthand
.button {
    transition: all 0s ease 0s;
}

```


CSS Animation make it possible to
animate transitions from one CSS
style configuration to another with
more control than with using transition