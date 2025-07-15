AOS.init({
  duration: 1000,
  once: true,
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById('iconHamburger');
const iconClose = document.getElementById('iconClose');

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});

