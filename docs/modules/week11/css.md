# CSS Reference

## Pseudo-Classes

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


CSS Animation make it possible to
animate transitions from one CSS
style configuration to another with
more control than with using transition