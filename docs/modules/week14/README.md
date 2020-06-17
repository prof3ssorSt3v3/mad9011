# Week 14 - Putting it all together

To wrap up our learning in Adobe XD, here is a list of Advanced features and good


## Advanced Techniques

### Bring in content from other application
- [Bring in content from Photoshop](https://helpx.adobe.com/xd/how-to/import-assets-from-photoshop.html)
- [Bring in content from Illustrator](https://helpx.adobe.com/xd/how-to/import-assets-from-illustrator.html)
- [Bring in content using Creative Cloud Libraries](https://helpx.adobe.com/xd/how-to/add-assets-from-cc-library-to-xd.html)+ [Enhanced CC LIbraries integraion](https://youtu.be/GWuA1y79AT8)


### Using Sketch or Invision?
- [Learn how to switch to Adobe XD](https://letsxd.com/sketch)


### Scroll Groups - carousel (June 2020)
https://youtu.be/7FuL2BosGr0


### Design Tokens - share for development (June 2020)
https://youtu.be/-ifl1tl-SuE





### working with Illustrator/phothoshop

### Integration with Slack 
https://slack.com/apps/A7P35MCT0-adobe-creative-cloud

### Chart Plugin
https://chartplugin.com/

### Improve your Flutter UI code productivity using Adobe XD
https://medium.com/@rakeshpandith.ts/improve-your-flutter-ui-code-productivity-using-adobe-xd-c44bfd6490c6


### Learn Adobe XD with in-depth tutorials and quick tips and tricks.
https://letsxd.com/

### Pro Tips
https://letsxd.com/protips


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
