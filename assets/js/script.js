AOS.init({
  duration: 1000,
  once: true,
});

const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobile-menu");
const iconHamburger = document.getElementById("iconHamburger");
const iconClose = document.getElementById("iconClose");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");
});

const openBtn = document.getElementById("openBrosur");
const closeBtn = document.getElementById("closeBrosur");
const modal = document.getElementById("brosurModal");

function toggleModal() {
  const isHidden = modal.classList.contains("hidden");
  modal.classList.toggle("hidden");
  modal.classList.toggle("flex", isHidden);
}

openBtn.addEventListener("click", toggleModal);
closeBtn.addEventListener("click", toggleModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    toggleModal();
  }
});