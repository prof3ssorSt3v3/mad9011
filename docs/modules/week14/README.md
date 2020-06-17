# Week 14 - Putting it all together


::: danger SWITCH TO WINDOWS

- We are now using Windows 10.
- Make sure that you have installed NodeJS and VSCode for Windows.
- You also need Gradle, Android Studio version 3.x, JDK version 8.x, and Cordova installed.

:::

## DOMContentLoaded vs deviceready

As discussed in week 11, there is a difference between Cordova and web apps, that has to do with waiting for your page to be ready.

With a web app we only need to wait for `DOMContentLoaded`.

With a Cordova app we need to wait for `deviceready`.

The difference is that the `deviceready` event lets us know that `DOMContentLoaded` has happened as well as all the Cordova features and plugins are ready to use. With a Cordova app we always wait for the `deviceready` event before doing anything.

### Code for Both Events

When building Cordova apps, we typically start testing in the browser before we move to the emulator or devices. In the browser there is no `deviceready` event. So, we need to write code that will work in both places - the browser as a webpage AND in the emulator or Android device as a Cordova App.

```js
let ready = "cordova" in window ? "deviceready" : "DOMContentLoaded";
//check if cordova object exists and use deviceready if it does
document.addEventListener(ready, init);
//assuming that init is your function to run to start your app
```

This code sample checks to see if there is an object called `cordova` inside the `Window` object. If the cordova JS file is loaded, this is something that it will create. That object will create the `deviceready` event.

So, if the `cordova` object exists inside the Window object, that means the cordova JS file was loaded and ran. This script is only added to our webpage through the Cordova compiling process. If you don't compile your app then the script and the object will not exist.

## Custom Events

We have been working, until now, with events that are built into core JavaScript or the DOM. Things like `DOMContentLoaded`, `load`, and `click` are always available in our webpages. However, you can also use JavaScript to create your own.

As some of you have noticed by now, some of the SPA code samples include events like `pageShow`. This is not something built into JS.

Cordova includes the `deviceready` event. This is a JavaScript event that the Cordova JS file creates.

You can create your own custom events too.

[MDN custom Event reference](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent)

Here is a CodePen showing how a Custom Event could be created and used.

<iframe height="500" style="width: 100%;" scrolling="no" title="PageShow Event " src="https://codepen.io/mad-d/embed/raweyY?height=500&theme-id=default&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>

[CodePen Link](https://codepen.io/mad-d/pen/raweyY)

## Cordova Cheatsheet

Here is a CodePen with a summary of the majority of the Android, iOS and Cordova commands that you will use when building Cordova apps.

<iframe height="500" style="width: 100%;" scrolling="no" title="Cordova Cheatsheet" src="https://codepen.io/mad-d/embed/OPPyOw?height=500&theme-id=default&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
</iframe>
