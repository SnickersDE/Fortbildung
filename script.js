// Slideshow Funktion
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000);
}

// Navigation: Abschnitte anzeigen
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const sections = document.querySelectorAll('main > section');
    sections.forEach(s => s.classList.add('hidden-section'));
    const target = document.querySelector(link.getAttribute('href'));
    if (target) target.classList.remove('hidden-section');
  });
});

// Standard: Start sichtbar
document.querySelector('#start').classList.remove('hidden-section');
