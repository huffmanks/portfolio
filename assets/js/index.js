const navLinks = document.querySelectorAll("#nav-links a");
const navSections = document.querySelectorAll("[data-nav-section]");
const isMobile = window.innerWidth < 768;

function setActiveLink(targetHref) {
  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");

    if (linkHref === targetHref) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    setActiveLink(link.getAttribute("href"));
  });
});

window.addEventListener("DOMContentLoaded", () => {
  if (location.hash) {
    setActiveLink(location.hash);
  }
});

const linkMap = {};
navLinks.forEach((link) => {
  const id = link.getAttribute("href");
  linkMap[id] = link;
});

const observerOptions = {
  root: null,
  rootMargin: "0px 0px -50% 0px",
  threshold: isMobile ? 0.1 : 0.4,
};

let currentActive = null;

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionId = entry.target.dataset.navSection;

      if (sectionId !== currentActive) {
        currentActive = sectionId;

        navLinks.forEach((link) => link.classList.remove("active"));

        const activeLink = linkMap[sectionId];
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    }
  });
}, observerOptions);

navSections.forEach((section) => observer.observe(section));
