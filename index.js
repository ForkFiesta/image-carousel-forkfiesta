import { createCarousel, createImageArray } from "./image-carousel.js";

createImageArray("./img/", (imgArray) => {
  const carousel = createCarousel(imgArray);
  carousel.showSlides();

  // Set up event listeners for navigation buttons
  document
    .querySelector(".prev")
    .addEventListener("click", () => carousel.plusSlides(-1));
  document
    .querySelector(".next")
    .addEventListener("click", () => carousel.plusSlides(1));

  // Set up event listeners for dot navigation
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => carousel.currentSlide(index + 1));
  });
});
