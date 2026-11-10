// Menu mobile
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('nav').classList.toggle('open');
});

// Slider de la bannière
const slides = document.querySelectorAll('.slide');
let current = 0;
function show(n) {
  slides[current].classList.remove('active');
  current = (n + slides.length) % slides.length;
  slides[current].classList.add('active');
}
document.getElementById('next').addEventListener('click', () => show(current + 1));
document.getElementById('prev').addEventListener('click', () => show(current - 1));
setInterval(() => show(current + 1), 5000);

// Point vert qui suit la souris
const dot = document.getElementById('cursorDot');
document.addEventListener('mousemove', e => {
  dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  dot.classList.add('on');
});
document.addEventListener('mouseleave', () => dot.classList.remove('on'));
