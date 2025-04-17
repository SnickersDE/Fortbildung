// Navigation Tabs
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const id = link.getAttribute('href').substring(1);
    document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(id).classList.add('active');
  });
});

// Slideshow
let slideIndex = 0;
function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let slide of slides) slide.style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}
showSlides();
