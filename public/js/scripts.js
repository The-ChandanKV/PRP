document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.getElementById("heroSection");
  const options = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, options);

  observer.observe(heroSection);
  // Add observers for other sections as needed

  // Local Storage for Dark Mode
  const toggleDarkMode = () => {
    const currentMode = localStorage.getItem("dark-mode");
    if (currentMode === "enabled") {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", "disabled");
    } else {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem("dark-mode", "enabled");
    }
  };

  document
    .getElementById("toggle-button")
    .addEventListener("click", toggleDarkMode);
});
