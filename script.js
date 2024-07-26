// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
function toggleMenu() {
  const menu = document.querySelector(".menu-links");

  if (menu) {
    menu.classList.toggle("open");
    updateIconAppearance(menu.classList.contains("open"));
  } else {
    console.error("Menu element not found!");
  }
}

function updateIconAppearance(isOpen) {
  const icon = document.querySelector(".hamburger-icon");

  if (icon) {
    // Update ARIA attributes and icon appearance based on isOpen state
    menu.setAttribute("aria-expanded", isOpen);
    icon.setAttribute("aria-label", isOpen ? "Menu closed" : "Menu open");

    // Implement logic to update icon visuals based on isOpen state (e.g., rotate, change color)
    if (isOpen) {
      icon.classList.add("icon-open"); // Add a specific open class for the icon
    } else {
      icon.classList.remove("icon-open"); // Remove the open class
    }
  }
}

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__links", {
  ...scrollRevealOption,
  delay: 1500,
});