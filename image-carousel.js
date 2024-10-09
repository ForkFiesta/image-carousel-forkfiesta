//takes an directory where your images are located. Make sure they're named as follows: image1.jpg, image2.jpg ...
function createImageArray(imgFolderPath, callback) {
  const imgArray = [];

  let i = 1;
  function loadImage() {
    const img = new Image();
    img.src = `${imgFolderPath}image${i}.jpg`;

    img.onload = () => {
      imgArray.push(img.src);
      i++;
      loadImage();
    };

    img.onerror = () => {
      console.log("No more images found");
      callback(imgArray);
    };
  }
  loadImage();
}

function createCarousel(imgArray) {
  const imageDivSelector = document.querySelectorAll(".carousel-image");

  imageDivSelector.forEach((imgElement, index) => {
    if (imgArray[index]) {
      imgElement.src = imgArray[index];
    }
  });

  let slideIndex = 1;

  const plusSlides = (n) => {
    showSlides((slideIndex += n));
  };
  const currentSlide = (n) => {
    showSlides((slideIndex = n));
  };

  const showSlides = (n) => {
    let i;
    let slides = document.querySelectorAll(".slides");
    let dots = document.querySelectorAll(".dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return {
    plusSlides,
    currentSlide,
    showSlides,
  };
}

export { createImageArray, createCarousel };
