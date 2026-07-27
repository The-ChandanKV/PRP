document.addEventListener("DOMContentLoaded", function () {
  // Handle email submission logic
  const emailInput = document.getElementById("email");
  const ctaButton = document.querySelector(".cta-button");
  ctaButton.addEventListener("click", function () {
    if (emailInput.value) {
      alert("Thank you for subscribing!");
      emailInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  });

  // Dark mode toggle logic
  const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "dark-mode",
      document.body.classList.contains("dark-mode"),
    );
  };
  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
