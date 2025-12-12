document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
      if (navLinks.style.display === "flex") {
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "rgba(2, 12, 27, 0.95)";
        navLinks.style.padding = "20px";
        navLinks.style.textAlign = "center";
      }
    });
  }

  // Sticky Navbar transparency effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = "0 10px 30px -10px rgba(2, 12, 27, 0.7)";
    } else {
      navbar.style.boxShadow = "none";
    }
  });

  // Scroll Reveal Animation (Simple Fade In Up)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    ".feature-card, .stat-item, .instructor-wrapper, .gallery-item, .cta-content"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    observer.observe(el);
  });

  // Add visible class styling dynamically
  const style = document.createElement("style");
  style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
  document.head.appendChild(style);

  // =========================================
  // Theme Toggle Logic
  // =========================================
  const themeBtn = document.getElementById("theme-toggle");
  const themeIcon = themeBtn ? themeBtn.querySelector("i") : null;
  const htmlElement = document.documentElement;

  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

  // Apply initial theme
  if (savedTheme === "light" || (!savedTheme && systemTheme === "light")) {
    enableLightTheme();
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      if (htmlElement.getAttribute("data-theme") === "light") {
        disableLightTheme();
      } else {
        enableLightTheme();
      }
    });
  }

  function enableLightTheme() {
    htmlElement.setAttribute("data-theme", "light");
    if (themeIcon) {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
    localStorage.setItem("theme", "light");
  }

  function disableLightTheme() {
    htmlElement.removeAttribute("data-theme");
    if (themeIcon) {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
    localStorage.setItem("theme", "dark");
  }
});
