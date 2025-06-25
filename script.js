let index = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

function showSlide(i) {
  slides.forEach((img, idx) => {
    img.style.display = idx === i ? "block" : "none";
  });
  dots.forEach(dot => dot.classList.remove("active"));
  if (dots[i]) dots[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

dots.forEach(dot => {
  dot.addEventListener("click", () => {
    index = parseInt(dot.getAttribute("data-index"));
    showSlide(index);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  showSlide(index);
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);
});
