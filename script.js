(function () {

  // sticky header
  var header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });

  // mobile menu
  var toggle = document.getElementById("menuToggle");
  var nav = document.getElementById("mainNav");

  toggle.addEventListener("click", function () {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
    });
  });

  // scroll reveal animation
  var revealEls = document.querySelectorAll(
    ".svc-card, .port-card, .ind-card, .step-card, .test-card, .counter-card, .badge-item, .faq-item, .cta-form-wrap, .cta-info, .about-copy, .about-counters, .why-copy, .why-badges"
  );

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });

  // delay for grid children
  document.querySelectorAll(
    ".services-grid, .port-grid, .ind-grid, .process-grid, .test-grid, .about-counters, .why-badges"
  ).forEach(function (grid) {
    Array.from(grid.children).forEach(function (child, i) {
      child.style.transitionDelay = i * 0.07 + "s";
    });
  });

  // contact form
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = "Sending…";
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = "✓ Sent!";
        btn.style.background = "#10b981";
        form.reset();
        setTimeout(function () {
          btn.textContent = originalText;
          btn.style.background = "";
          btn.disabled = false;
        }, 2500);
      }, 1200);
    });
  }
})();
