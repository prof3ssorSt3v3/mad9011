# Midterm - Mobile Design Assets

::: tip Files
[Download your starter files here.](https://drive.google.com/file/d/1XEUk-CKl6dh_NLDw8JsUnCqfoIFauAFc/view?usp=sharing)

**Folder Structure:**

```

midterm-starter-files/
├── submission-1/
└── submission-2/

```

:::

## Introduction

For your midterm project, you'll craft a comprehensive suite of mobile design assets, encompassing everything from optimized images to bespoke icons, leveraging the capabilities of both Adobe Photoshop and Illustrator. This project is designed to challenge your design skills and creativity, encouraging you to create visually appealing and functional digital assets for a hypothetical mobile.

You will utilize Adobe Photoshop for image optimization and manipulation, and Adobe Illustrator for creating vector-based graphics such as icons and logos. The assets you develop, including web banners, UI buttons, icons, animated loaders, and a logo design, should follow a consistent theme and aesthetic to ensure cohesiveness across entire experience.

**Submission 1:**

1. [Web Banners](#web-banners)
2. [UI Button Set](#ui-button-set)

**Submission 2:**

3. [UI Icon Set](#ui-icon-set)
4. [Animated Loader](#animated-loader)
5. [Logo Design](#logo-design)

### Web Banners

For the Web Banner portion of your midterm, you will be creating a series of banners that scale to three different sizes. The challenge is to design your banners in such a way that the main subject and accompanying text remain visible and impactful across all sizes, despite the varying aspect ratios.

Here is an example, you can probably do better! :D  
![Web Banner Example](./assets/web-banner-example.png)

**Instructions**

1. Using the file provided, select an image that aligns with your chosen app theme (e.g., if your theme is gardening, select an image related to gardening).
2. Ensure your chosen image has a clear main subject that can remain the focal point across different banner sizes.
3. Add a short and impactful message or slogan **only** to your web banner. Make sure the text is legible and maintains proper hierarchy, even when scaled down to smaller sizes.
4. Think about where a **call-to-action (CTA) button** may be added in the future. Consider the necessary spacing to allow for the button placement without obstructing the main subject or text.
5. Place your image and text within the provided artboards. Scale and adjust your elements to fit nicely within the frames.
6. Utilize the tools we covered during the Photoshop portion of the course, such as **Masking** and **Layer Adjustments**, to make non-destructive edits that maintain flexibility for future changes.
7. Export your banners as .PNGs at their respective sizes.

> Although we did not explore the Text tool in Photoshop, it functions similar to Illustrators Text tool.

**File organization:**

```

submission-1/
├── web-banner/
│   ├── web-banner.psd
│   └── exports/
│       ├── web-banner-1200x600.png
│       ├── tablet-banner-768x400.png
│       └── mobile-banner-480x200.png

```

### UI Button Set

In this part, you will design a set of UI buttons, each with an active and hover state. Additionally, integrate these buttons into your web banner design for a practical application scenario.

![UI Button Set Example](./assets/button-example.png)

### Instructions:

1. Design two sets of buttons (e.g., "Read More" and "Subscribe") each with an alternate state (active & hover).
2. Use consistent design elements (colors, fonts, shapes, **gradients**, and effects) that match your app's theme. Incorporate gradients to help create a sense of depth and make your buttons stand out more effectively.
3. Ensure the buttons are visually distinct in both states, using design cues like color shifts, shadows, or subtle animations to communicate their functionality.
4. Consider the size of your buttons to ensure they are large enough to be easily clickable but not overpowering in the overall design.
5. Integrate your buttons into the desktop version of your web banner. Place them strategically so they complement the banner's design and encourage user interaction, while ensuring the text and images are still clear and impactful.
6. Export your compiled web banner and buttons as .PNG files.

**Resources:**

- [Material Design Buttons](https://m2.material.io/components/buttons)
- [7 Basic Rules for Button Design](https://uxplanet.org/7-basic-rules-for-button-design-63dcdf5676b4)
- [UI/UX tips: A guide to creating buttons](https://makeitclear.com/ux-ui-tips-a-guide-to-creating-buttons/)

**File organization:**

```

submission-2/
├── ui-button-set/
│   ├── ui-button.ai
│   └── exports/
│       ├── web-banner/
│       │   └── compiled-web-banner.png
│       └── buttons/
│           ├── button-1-active.png
│           ├── button-1-hover.png
│           ├── button-2-active.png
│           └── button-2-hover.png
├── ui-icon-set/
├── animated-loader/
└── logo-design/

```

### UI Icon Set

Create a set of 5 custom icons that will be used throughout your app. These should be relevant to your apps's theme and designed for clarity and easy recognition. Ensure that your icons feel like a cohesive set.

![UI Icon Set Example](./assets/ui-icon-example.png)

### Instructions:

1. Start by creating your icons within the **24x24px artboard**. Each artboard is labeled with the icon you are to create. Ensure you utilize the **keylines and grid** to maintain proper alignment and consistency in the proportions of your icons.
2. Once you have created your 24x24px icons, scale them to **48x48px**. Make sure your font weights, corner radii, and other elements scale proportionally. Using the **keylines and grid** will help ensure your icons scale accurately and remain visually consistent.
3. Finishing steps:
   - Organize your layers by grouping and labeling them properly for easier management.
   - Make sure to save your `.ai` file regularly.
   - Hide the **keyline** layers before exporting your icons.
   - Export your 24x24 artboards using the `Export for Screens` dialogue as SVGs for optimal quality.

**File organization:**

```

submission-2/
├── ui-button-set/
├── ui-icon-set/
│   ├── ui-icon.ai
│   └── exports/
│       ├── user_24x24.svg
│       ├── settings_24x24.svg
│       ├── notifications_24x24.svg
│       ├── delete_24x24.svg
│       └── home_24x24.svg
├── animated-loader/
└── logo-design/

```

### Animated Loader

Design an animated loader that will be displayed while your app's content is loading. This should be thematic and engaging.

You can do much better :D
![Animated Loader Example](./assets/loader-example.gif)

**Instructions:**

1. Conceptualize an animation that reflects your app's theme and can entertain or engage users during load times.
2. Utilize Adobe Illustrator to design your loader. Pay attention to optimizing your layers for web export during this process.
3. Export your loader design as SVG using the 'Export as...' option in Illustrator. Make sure your file is properly optimized for web use.
4. Embed the SVG code directly into the index.html file of your project. This step involves copying the exported SVG code into the HTML file.
5. Clean up the SVG code by removing any unnecessary xml tags. Also, ensure that all styles are externalized to a CSS file rather than being inline within the SVG code.
6. Craft a CSS animation sequence that integrates several keyframes, creating a compelling and engaging motion effect.

**File organization:**

```

submission-2/
├── ui-button-set/
├── ui-icon-set/
├── animated-loader/
│   ├── loader.ai
│   ├── index.html
│   └── css/
│       └── main.css
└── logo-design/

```

### Logo Design

Create a logo for your hypothetical app. This logo should encapsulate your app's theme and be memorable to visitors.

![Logo Example](./assets/logo-example.png)

**Instructions:**

1. Brainstorm ideas that symbolize your app's theme and purpose.
2. Sketch several logo concepts before selecting the most promising one.
3. Design your logo using Adobe Illustrator, ensuring it is scalable and versatile for different uses.
4. Choose colors and fonts that align with your app's design language.
5. Export your logo as and SVG.

**File organization:**

```

submission-2/
├── ui-button-set/
├── ui-icon-set/
├── animated-loader/
└── logo-design/
    ├── logo.ai
    └── exports/
        └── logo.svg

```

## Submission

**Submission 1:**

<br>

<Badge text="Section 010: October 15th @9:00pm" />
<br/>
<Badge type="error" text="Section 020: October 15th @7:00pm" />

- By the end of today's theory class, you will make your fist submission on Brightspace.
- Compress `submission-1` folder and upload it to Brightspace

**Submission 2:**

<br>

<Badge text="Section 010: October 20th @11:59pm" />
<br/>
<Badge type="error" text="Section 020: October 20th @11:59pm" />

- Submit the remaining assets ( UI icon set, animated loader, logo design) through Brightspace.
- Compress `submission-2` folder and upload it to Brightspace

::: tip Submission on Brightspace

- Open BS LMS and go to the `Activities` > `Assignments page`.
- Go to `Midterm: Mobile Design Assets`
- Upload your compressed folder on the assignment page in BS LMS and click the submit button.

:::
