let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll(".carousel-card");
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  document.querySelector(".carousel-slide").style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}
