document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.getElementById("hamburger-button");

  const mobileMenu = document.getElementById("mobile-menu");

  hamburgerButton.addEventListener("click", () => {
    console.log("Hamburger button clicked");
    const isHidden = mobileMenu.classList.contains("hidden");
    if (isHidden) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    if (
      !hamburgerButton.contains(event.target) &&
      !mobileMenu.contains(event.target)
    ) {
      mobileMenu.classList.add("hidden");
    }
  });
});
