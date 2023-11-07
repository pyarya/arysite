const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("ActiveOverlay");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("ActiveOverlay");
});
