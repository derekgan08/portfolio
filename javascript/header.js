const menuToggle = document.getElementById('menuToggle');
const navigationContainer = document.querySelector('.navigation__container');
const logoIcon = document.querySelector('.logo__container');
const navLinks = document.querySelectorAll('.navigation__links .link__item a');

menuToggle.addEventListener('click', () => {
  console.log('Hamburger Clicked');
  navigationContainer.classList.toggle('active');
});

logoIcon.addEventListener('click', (e) => {
  navigationContainer.classList.remove('active');
  window.location.hash = '#home';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navigationContainer.classList.remove('active');
  });
});