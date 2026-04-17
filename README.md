# HNG 14 Task 1B - Profile Card

A clean, responsive, and accessible Profile Card built for Stage 1B of the HNG 14 Internship. 

[Github Link](https://github.com/Muha-coder-dev/hng14-task1b-profile-card)

[Github Pages Link](https://muha-coder-dev.github.io/hng14-task1b-profile-card/)

## Overview
This is a straightforward profile card component. The main focus was hitting the strict automated testing requirements while keeping the markup completely semantic and accessible. I went with a light, high-contrast theme so the avatar and text remain easy to read and pass WCAG AA standards.

## Key Features

* **Test-Ready:** Every required element has the exact `data-testid` hooked up for the grading bot.
* **Semantic HTML:** Built using proper tags (`<article>`, `<figure>`, `<nav>`, `<section>`) to ensure a clean document outline for screen readers.
* **Accessible:** Features visible focus rings for keyboard navigation and uses `aria-live` so screen readers catch the live time updates.
* **Responsive:** Defaults to a vertical stack for mobile screens and shifts to a side-by-side layout on larger displays.
* **Vanilla JS:** Uses a lightweight script to fetch and display the live Unix Epoch time in milliseconds (`Date.now()`).

## Built With

* HTML5
* CSS3 (Flexbox & Grid)
* Vanilla JavaScript