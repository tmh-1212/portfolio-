const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', () => {
  let currentSection = '';

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      currentSection = section.getAttribute('id');
    }
  });
  links.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('active');
    }
  });
});


const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); 
  formSuccess.style.display = 'block';
  contactForm.reset();

  setTimeout(() => {
    formSuccess.style.display = 'none';
  }, 4000);
});
