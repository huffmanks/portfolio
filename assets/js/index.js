const navLinks = document.querySelectorAll("#nav-links a");

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
