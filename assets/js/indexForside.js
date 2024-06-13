let billedeIndex = 0;
 
function visSlide(index) {
  const slideGalleri = document.querySelector(".slideGalleri");
  const slides = slideGalleri.querySelectorAll("img");
  const antalSlides = slides.length;
 
  // Håndter wrap-around
  if (index >= antalSlides) {
    billedeIndex = 0;
  } else if (index < 0) {
    billedeIndex = antalSlides - 1;
  } else {
    billedeIndex = index;
  }
 
  // Opdater containerens bredde
  const offset = -billedeIndex * slides[0].clientWidth;
  slideGalleri.style.transform = `translateX(${offset}px)`;
}
 
function tilbageSlider() {
  visSlide(billedeIndex - 1);
}
 
function fremSlider() {
  visSlide(billedeIndex + 1);
}
document.querySelector(".tilbage").addEventListener("click", tilbageSlider);
document.querySelector(".frem").addEventListener("click", fremSlider);
 
visSlide(billedeIndex);