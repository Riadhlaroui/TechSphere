const carousel = document.getElementById("carousel").querySelector("div");
const slides = Array.from(carousel.children);
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

document.querySelectorAll(".fav").forEach(button => {
  button.addEventListener("click", () => {
      const img = button.querySelector("img");
      img.src = img.src.endsWith("heart-off.svg")
          ? "/Images/heart-on.svg"
          : "/Images/heart-off.svg";
  });
});




let currentIndex = 0;

function updateCarousel() {
  const offset = currentIndex * -100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
});

// Auto-scroll every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}, 4000);

document.addEventListener("DOMContentLoaded", () => {
  const profileButton = document.getElementById("user-menu-button");
  const profileMenu = document.getElementById("profile-menu");

  const MobileIcon = document.getElementById("mobile-icon");
  const MobileMenu = document.getElementById("mobile-menu");

  MobileIcon.addEventListener("click", (event) => {
    event.stopPropagation();
    MobileMenu.classList.toggle("hidden");
  });

  profileButton.addEventListener("click", (event) => {
    // Prevent hiding the menu immediately when clicked
    event.stopPropagation();

    profileMenu.classList.toggle("hidden");
  });

  // Close the profile menu if clicking outside
  document.addEventListener("click", (event) => {
    if (
      !profileMenu.contains(event.target) &&
      !profileButton.contains(event.target)
    ) {
      profileMenu.classList.add("hidden");
    }
  });

  const languageMenuButton = document.getElementById("language-menu-button");
  const languageMenu = document.getElementById("language-menu");

  // Toggle visibility
  languageMenuButton.addEventListener("click", () => {
    const isHidden = languageMenu.classList.contains("hidden");
    languageMenu.classList.toggle("hidden", !isHidden);
  });

  // Hide menu on click outside
  document.addEventListener("click", (event) => {
    if (!languageMenuButton.contains(event.target)) {
      languageMenu.classList.add("hidden");
    }
  });

  // Handle language selection
  languageMenu.addEventListener("click", (event) => {
    const selectedLang = event.target.dataset.lang;
    if (selectedLang) {
      alert(`Switched to ${selectedLang}`);
      // Implement language switch logic here
      languageMenu.classList.add("hidden");
    }
  });
});
