// ===========================
// Mobile Navigation Toggle
// ===========================

// Grab the hamburger button and the nav links list
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

// When the hamburger is clicked, toggle the 'open' class
// The 'open' class in CSS makes the nav links visible on mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the mobile menu when any nav link is clicked
// This gives a better experience on single-page sites
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===========================
// Active Nav Link Highlight
// ===========================

// All the sections we want to track
const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');

// As the user scrolls, check which section is in view
// and highlight the matching nav link
window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    // If the section top is within the viewport, mark it as current
    if (window.scrollY >= section.offsetTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });

  // Remove 'active' from all links, then add it to the matching one
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});
