# Frontend Mentor - FAQ Accordion Solution

This is a premium, high-utility solution to the [FAQ accordion challenge on Frontend Mentor](https://frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone (`tab`, `enter`, `space`)
- View the optimal layout for the interface depending on their device's screen size
- See vibrant hover and focus states for all interactive elements on the page

### Screenshot

*(Note: Replace these paths with your repository images once you take screenshots of your completed build)*

- Mobile View (375px): `./screenshots/mobile-view.png`
- Desktop View (1440px): `./screenshots/desktop-view.png`

### Links

- Solution URL: [Add your Frontend Mentor solution URL here]
- Live Site URL: [Add your GitHub Pages / Vercel live deployment URL here]

## My process

### Built with

- Semantic HTML5 markup (e.g., `<main>`, `<h3>`, `<button>`, `<footer>`)
- CSS Custom Properties (Variables)
- Flexbox & CSS Grid Matrix Layouts
- **Explicit Structural Clamping** (`clamp()`, `calc()`, relative scaling vectors)
- **Zero Absolute Pixels** Architecture (`px` variables mapped strictly under the scope of `rem` and `em`)
- Vanilla JavaScript State Engine (Strict separation of concerns via ARIA mutations)

### What I learned

This project provided a deep mathematical workout in achieving a cross-device **Pixel Perfect** layout without using single hardcoded absolute pixel anchors. 

Key architectural takeaways from this build:

1. **Native CSS Grid Animations:** Instead of animating height properties with expensive javascript layout reflows, the accordion fluid wrapper operates via CSS grid track transformations (`grid-template-rows: 0fr -> 1fr`). This allows the browser to perform smooth GPU-accelerated scaling transitions.
2. **Strict Semantic State Management:** The JavaScript engine contains zero visual inline overrides. It strictly monitors click events and updates accessibility hooks (`aria-expanded="true/false"` and `data-state="active/hidden"`). The visual rendering is entirely delegated to the CSS cascading engine.
3. **Advanced Micro-Spacing Calibration:** Learned to counter visual *Layout Accumulation* bugs on multi-viewport setups by isolating element translations with `transform: translateY()` over specific structural selectors like `.faq-item:nth-child(n)`. This prevented cascading reflow shifts while hitting exact pixel overlays in designer mockups.

```html
<!-- Secure Semantic Layout with proper Accessibility mapping -->
<button class="faq-question" aria-expanded="false" aria-controls="faq-panel-2">
  <span>Is Frontend Mentor free?</span>
  <span class="faq-icon-container" aria-hidden="true">
    <img src="./assets/images/icon-plus.svg" alt="" class="icon-plus" />
    <img src="./assets/images/icon-minus.svg" alt="" class="icon-minus" />
  </span>
</button>
```

```css
/* Using a relative em scope tracking boost and clamping engine rules */
.faq-question > span:not(.faq-icon-container) {
  font-family: var(--font-main);
  font-size: clamp(0.9375rem, 2.5vw, 1.125rem);
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.034em;
}
```

### Continued development

Moving forward, I will continue to enforce clean cross-device fluid environments using automated clamping engines. On subsequent projects, I intend to transition completely towards native state components while maintaining a strict "Zero Absolute Pixel Warnings" system for production-ready design system builds.

### Useful resources

- [Figma Community Design Specs](https://figma.com) - Used to verify basic element bounds, baseline grids, and core layout parameters.
- [MDN Web Docs on CSS Grid Transitions](https://mozilla.org) - Provided critical insight on grid track interpolation for container height adjustments.

## Author

- Frontend Mentor - [Ciprian Danila](https://www.frontendmentor.io/profile/cipdanila)
- GitHub - [Ciprian Danila](https://github.com/cipdanila)

Attribution: The design files were created by [Frontend Mentor](https://www.frontendmentor.io) and are not owned by the author. The author is not responsible for the content of the design files.