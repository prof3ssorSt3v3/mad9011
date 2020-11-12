# Hybrid Exercise 8 - Coding an SVG animation

## Description

Based on what you learn in Week 10 and 11, you are to design a small Scalable Vector Graphic (SVG) with a hover/click state and CSS animation.

- Design a Scalable Vector Graphic.
- Apply visual style CSS.
- Add a hover/click state.
- Animate your SVG with CSS.
- Depending on your code organization, you may use multiple files or one sigle file for your SVG animation. For example: You will have 3 files if you use HTML with external CSS to animate and style your external SVG file. Or, you may use only 1 HTML file if you embed CSS, SVG, and JS code inside.  
- When the work is completed, upload your file(s) as ONE file (ZIP or SVG or HTML) for submission.
- File naming example: *TomSmith-SVGanimation.zip* [firstnameLastname-SVGanimation.zip]


Here's freebie code to toggle CSS classes with Javascript that may be useful: 

```` js
<defs>
   <style type="text/css">
      #mouth {
      display:none;
      }

      .clickit #mouth {
      display:block;
      }
   </style>

   <script>
      var clicker = document.querySelector('#logo');

      clicker.addEventListener('click', function() {
      this.classList.toggle('clickit');
      });
   </script>
</defs>
````


## Submission

::: warning
**Due Sunday November 29 by 11:59pm**
:::

Open BS LMS and go to the `Activities > Assignments` page.

Go to the `Coding an SVG animation` assignment.

Upolad your file(s) on the assignment page in BS LMS and click the submit button.