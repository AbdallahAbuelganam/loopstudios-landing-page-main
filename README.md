# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents
- [Overview](#overview)
- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:
- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<!-- Screenshots are available in the design folder. -->
![Desktop Design](./design/desktop-design.jpg)
![Mobile Design](./design/mobile-design.jpg)
![Active States](./design/active-states.jpg)

## Links
- Solution URL: [Frontend mentor](https://www.frontendmentor.io/solutions/-semantic-html5-markup-css-custom-properties-grid-flexbox-javascript-VL731MxLZe)
- Live Site URL: [Github pages](https://abdallahabuelganam.github.io/loopstudios-landing-page-main/)

## My process

- Started with semantic HTML structure (see index.html lines 11-15)
- Added custom fonts using CSS (see fonts.css)
- Styled navigation links and hover effects in style.css:
  ```css
  header .links a {
      display: inline-block;
      margin: 26px;
      color: var(--color-White);
      text-decoration: none;
      width: 50px;
      text-align: center;
      &::after {
          content: "";
          position: absolute;
          bottom: -16px;
          left: 25px;
          width: 0px;
          height: 10px;
          border-bottom: 2px solid var(--color-White);
          transition: 500ms;
      }
  }
  header .links a:hover {
      &::after {
          left: 12.5px;
          width: 25px;
      }
  }
  ```
- Mobile-specific styles in mobile.css 
  ```css
    /* JS actions */

  .open-menu {
      display: flex !important;
      background-color: var(--color-Black);
  }

  header .close.hide,
  header .hamburger.hide {
      display: none;
  }
  ```
- All JavaScript logic is in JS/node.js
- * Select images for the device
  ```JS
  // find what is the device
  let Device = document.documentElement.clientWidth < 700 ? "mobile" : "desktop";
  // elements selector
  let ImgSelector = document.querySelectorAll(".creations .projects img");
  ImgSelector = Array.from(ImgSelector);
  let hero = document.getElementsByClassName("hero")[0];
  // images names 
  let ImgsNames = [
      "deep-earth",
      "night-arcade",
      "soccer-team",
      "grid",
      "from-above",
      "pocket-borealis",
      "curiosity",
      "fisheye"
  ];
  // add the images for the page
  ImgSelector.forEach((e, i) => {
      e.src = `images/${Device}/image-${ImgsNames[i]}.jpg`;
  });
  hero.setAttribute("style", `background-image: url(images/${Device}/image-hero.jpg);`);
  ```
- * Menu section
  ```JS
  // elements selector
  const closeBtn = document.getElementsByClassName("close")[0];
  const hamburgerBtn = document.getElementsByClassName("hamburger")[0];
  const linksList = document.getElementsByClassName("links")[0];
  // clicks events
  hamburgerBtn.addEventListener('click', () => {
      linksList.classList.add("open-menu");
        document.body.style = 'position: fixed;';
      closeBtn.classList.remove("hide");
      // Hide .hero h1 and .logo
      document.querySelector('.hero h1').style.display = 'none';
      document.querySelector('.logo').style.display = 'none';
  });
  closeBtn.addEventListener('click', () => {
      linksList.classList.remove("open-menu");
      document.body.style = 'position: block;';
      closeBtn.classList.add("hide");
      // Show .hero h1 and .logo
      document.querySelector('.hero h1').style.display = '';
      document.querySelector('.logo').style.display = '';
  });
  ```
## Built with
- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript (vanilla)

## What I learned
- How to add and use custom fonts with CSS
- How to control shadows and filters in CSS

## Continued development
- Further practice with custom fonts in CSS
- More advanced control of shadows and filters in CSS

<!-- ## Useful resources
- [MDN Web Docs](https://developer.mozilla.org/) - For HTML, CSS, and JS reference
- [CSS Tricks](https://css-tricks.com/) - For layout and responsive design tips -->

## Author
- Name: Abdallah AbuElganam
- Frontend Mentor: [@AbdallahAbuelganam](www.frontendmentor.io/profile/AbdallahAbuelganam)
- Instagram: [@abdallah_abuelghanam](www.instagram.com)