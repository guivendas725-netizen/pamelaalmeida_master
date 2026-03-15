const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
}

const testimonials = document.querySelectorAll(".testimonial-card");
let current = 0;

if (testimonials.length > 0) {
  setInterval(() => {
    testimonials[current].classList.remove("active");
    current = (current + 1) % testimonials.length;
    testimonials[current].classList.add("active");
  }, 3000);
}