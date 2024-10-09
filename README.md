# Image Carousel

A simple, lightweight JavaScript package to create a customizable image carousel with navigation controls and dot indicators. This package allows you to load images from a specified directory and navigate through them with next/previous buttons and dot indicators.

## Features

- Dynamically loads images from a specified directory.
- Supports navigation through next/previous buttons.
- Provides dot indicators for direct navigation to specific images.
- Lightweight and easy to customize.

## Installation

Clone this repository and include the necessary files in your project.

```bash
git clone https://github.com/your-username/image-carousel.git
```

Or, if published as an npm package, you can install it via npm:

```bash
npm install image-carousel
```

## Usage

### 1. Include HTML Structure

Add the following structure to your HTML file. The `.carousel-image` elements will be dynamically populated with images, and the `.prev`, `.next`, and `.dot` elements enable navigation.

```html
<div class="slideshow-container">
  <div class="slides fade">
    <div class="numberText">1/6</div>
    <img class="carousel-image" src="#" style="width: 100%;" />
    <div class="text">Caption Text</div>
  </div>
  <!-- Repeat .slides elements as needed, each with an empty .carousel-image element -->

  <a class="prev">&#10094;</a>
  <a class="next">&#10095;</a>
</div>

<div class="dot-circles">
  <span class="dot"></span>
  <!-- Repeat .dot elements as needed for each slide -->
</div>
```

### 2. Add CSS

To style the carousel, add the provided `styles.css` file, or customize it according to your needs. This file includes styles for the slideshow container, navigation buttons, and dot indicators.

### 3. Import and Initialize the Carousel

In your main JavaScript file, import the carousel functions and initialize them. Update the image path as needed.

```javascript
import { createImageArray, createCarousel } from "./image-carousel.js";

createImageArray("./img/", (imgArray) => {
  const carousel = createCarousel(imgArray);
  carousel.showSlides();

  // Event listeners for navigation buttons
  document
    .querySelector(".prev")
    .addEventListener("click", () => carousel.plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => carousel.plusSlides(1));

  // Event listeners for dot indicators
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => carousel.currentSlide(index + 1));
  });
});
```

## Configuration

### Image Directory

Specify the directory where your images are located when calling `createImageArray`. Ensure the images are named sequentially as follows: `image1.jpg`, `image2.jpg`, etc.

### HTML Classes

- `.carousel-image`: Image placeholders to be populated by the carousel.
- `.slides`: Container for each individual slide, holding an image and optional caption text.
- `.prev` & `.next`: Navigation buttons for moving through the carousel slides.
- `.dot`: Dot indicators for direct navigation to each slide.

### JavaScript Functions

1. **`createImageArray(imgFolderPath, callback)`**:

   - Loads images from the specified `imgFolderPath` and adds them to an array.
   - Calls the callback function with the image array after loading.

2. **`createCarousel(imgArray)`**:
   - Accepts an array of image URLs and returns an object with methods to control the carousel:
     - `showSlides()`: Displays the current slide.
     - `plusSlides(n)`: Moves to the next or previous slide.
     - `currentSlide(n)`: Jumps directly to a specific slide.

## Example

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Carousel</title>
    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="index.js"></script>
  </head>
  <body>
    <div class="slideshow-container">
      <!-- Example slide -->
      <div class="slides fade">
        <div class="numberText">1/3</div>
        <img class="carousel-image" src="#" style="width: 100%;" />
        <div class="text">Caption Text</div>
      </div>

      <!-- Navigation buttons -->
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>

    <!-- Dot indicators -->
    <div class="dot-circles">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </div>
  </body>
</html>
```

## License

This project is licensed under the MIT License.
