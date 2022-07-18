# Practice Exercises

## Modal Confirm

JavaScript has the global `confirm()` method which will display a dialog that has a message, and two buttons - OK and Cancel. One of the shortcomings of using this dialog is that it cannot be styled to match your website.

The purpose of this exercise is to create a function which will create an HTML dialog box to display a custom message and up to three buttons. The function will accept two parameters - a String with the message to display, an Array of Objects that each contain a label for a button and a reference to the function to call if the button is clicked.

Example of the Array and calling the function:

```js
let buttons = [
  { label: "Yes", func: accept },
  { label: "Maybe", func: maybe },
  { label: "No", func: decline }
];
let message = "Do you want to eat some herring?";
buildDialog(message, buttons);
```

You can change the property names in the buttons array and the name of the function to whatever you like.

Your function will have to build the HTML for the dialog box, add the message to the box, and then build a row of buttons. Use `display: flex;` so the buttons will remain centered in one row in the dialog.

Use CSS classes to style the dialog and its components. Use `position: fixed;` to have the dialog appear in the middle of the screen regardless of where the user has scrolled on the webpage. Fill the page with a couple dozen paragraphs of lorem ipsum text so you can test the positioning of the dialog.

Add an `overlay` layer between the page content and the dialog. You can use the following CSS to style the overlay. Make sure your dialog has a higher `z-index`.

```css
.overlay {
  display: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsla(0, 0%, 0%, 0.6);
}
```
