const menuToggleButtons = document.querySelectorAll(".menu-toggle__button");
const mobMenuTop = document.querySelector(".mob-menu__top-dt");

menuToggleButtons.forEach(button => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-menu-toggle-dt");
    
    if (action === "open") {
      mobMenuTop.classList.add("menu-opened-dt");
    } else if (action === "close") {
      mobMenuTop.classList.remove("menu-opened-dt");
    }
    
    menuToggleButtons.forEach(toggleButton => {
      const toggleAction = toggleButton.getAttribute("data-menu-toggle-dt");
      if (toggleAction !== action) {
        toggleButton.style.display = "block";
      } else {
        toggleButton.style.display = "none";
      }
    });
  });
});
