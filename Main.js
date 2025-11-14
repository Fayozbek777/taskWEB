document.addEventListener("DOMContentLoaded", function () {
  // Burger menu
  const burgerIcon = document.querySelector(".burger-icon");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (burgerIcon && mobileMenu) {
    burgerIcon.addEventListener("click", function () {
      this.classList.toggle("active");
      mobileMenu.classList.toggle("active");
    });
  }

  // Login form
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.location.href = "../Index.html";
    });
  }

  // Filter button
  const filterBtn = document.getElementById("filterToggle");
  const sidebar = document.querySelector(".sidebar");

  if (filterBtn && sidebar) {
    filterBtn.addEventListener("click", () => {
      sidebar.style.display =
        sidebar.style.display === "block" ? "none" : "block";
    });
  }

  // User icon dropdown
  const userIcon = document.querySelector(".nav-user");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (userIcon && dropdownMenu) {
    userIcon.addEventListener("click", () => {
      dropdownMenu.style.display =
        dropdownMenu.style.display === "flex" ? "none" : "flex";
    });

    window.addEventListener("click", (e) => {
      if (!e.target.closest(".user-dropdown")) {
        dropdownMenu.style.display = "none";
      }
    });
  }
});
