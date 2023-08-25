const menuOpenButton = document.querySelector("[data-menu-open]");
const menuCloseButton = document.querySelector("[data-menu-close]");
const mobMenu = document.querySelector("[data-menu]");
const radioPlayButton = document.querySelector(".radio-button");
const radioPlayIcon = document.querySelector(".radio-play__icon");
const radioPauseIcon = document.querySelector(".radio-pause__icon");


menuOpenButton.addEventListener("click", () => {
  mobMenu.classList.remove("is-hidden");
  menuOpenButton.style.display = "none";
  menuCloseButton.style.display = "block";
  document.body.style.overflow = "hidden";
});


menuCloseButton.addEventListener("click", () => {
  mobMenu.classList.add("is-hidden");
  menuOpenButton.style.display = "block";
  menuCloseButton.style.display = "none";
  document.body.style.overflow = "auto";
});