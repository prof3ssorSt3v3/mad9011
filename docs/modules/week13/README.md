# Week 12 - Cordova

::: danger SWITCH TO WINDOWS

- We will now be switching over to Windows 10.
- Make sure that you have installed NodeJS and VSCode for Windows

:::

## SPA Navigation

Here is an updated version of the code that we used in class to create our first SPA. This version includes the ability to right-click and load a link in a new tab.

[Simple-SPA repo](https://github.com/prof3ssorSt3v3/simple-spa-demo)

You can feel free to use any of this code as a starting point or reference for your first Movie SPA Project.

## Cordova Splashscreens

Splashscreen images for your Cordova app need to be available in both Portrait and Landscape orientations and at a variety of sizes and resolutions.

You should use Photoshop to create the images and then you will need to use the `config.xml` to link to the images.

[Learn more about Splashscreens in Cordova](./splash.md)

## Cordova Launcher Icons

Just like the splashscreen images, the launcher icons need to be created at different sizes for different resolutions. Then you will put the links inside the `config.xml` file.

[Learn more about Launcher Icons in Cordova](./launcher.md)

## Cordova Building Apps

If you need to re-compile your project and include the latest splashscreen or launcher icons then we can use the `cordova build` command.

[Learn more about Building Apps in Cordova](./build.md)

## Cordova Emulating Apps

To launch your app in an emulator or simulator you can use the `cordova emulate` command.

[Learn more about Emulating Apps in Cordova](./emulate.md)

## Cordova Running apps

Cordova also has a `cordova run` command which will compile your project, install it on an attached device, and launch the app on the device.

[Learn more about Running Apps in Cordova](./run.md)

## TODO

::: tip TODO Before next week

- If you have not read all these notes and watched the videos from this week, do that first.
- Finish reading the notes for week 13 and watch all the videos in the notes for week 14.
  :::
