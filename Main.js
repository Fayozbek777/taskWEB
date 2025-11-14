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

document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(
    '.layout-left input[type="checkbox"]'
  );
  const courseBoxes = document.querySelectorAll(".crs-box");
  const container = document.querySelector(".course-lay-box");

  function filterCourses() {
    const filters = {
      rating: [],
      duration: [],
      category: [],
      level: [],
    };

    checkboxes.forEach((cb) => {
      if (cb.checked) {
        const type = cb.dataset.filter;
        const value = cb.dataset.value;
        if (type && value && filters[type]) {
          filters[type].push(value);
        }
      }
    });

    let visible = 0;
    courseBoxes.forEach((box) => {
      const rating = parseFloat(box.dataset.rating) || 0;
      const matches = {
        rating:
          filters.rating.length === 0 ||
          filters.rating.some((min) => rating >= parseFloat(min)),
        duration:
          filters.duration.length === 0 ||
          filters.duration.includes(box.dataset.duration),
        category:
          filters.category.length === 0 ||
          filters.category.includes(box.dataset.category),
        level:
          filters.level.length === 0 ||
          filters.level.includes(box.dataset.level),
      };

      if (
        matches.rating &&
        matches.duration &&
        matches.category &&
        matches.level
      ) {
        box.style.display = "";
        visible++;
      } else {
        box.style.display = "none";
      }
    });

    const noResults = container.querySelector(".no-results");
    if (visible === 0 && courseBoxes.length > 0) {
      if (!noResults) {
        const msg = document.createElement("div");
        msg.className = "no-results";
        msg.innerHTML = `<div style="text-align:center;padding:40px;color:#64748b;font-size:1.1rem;">
                <p>No courses found.</p>
                <p style="font-size:0.9rem;margin-top:8px;">Try different filters.</p>
              </div>`;
        container.appendChild(msg);
      }
    } else if (noResults) {
      noResults.remove();
    }
  }

  checkboxes.forEach((cb) => cb.addEventListener("change", filterCourses));
  filterCourses(); // При загрузке
});
