AOS.init();

const navToggler = document.getElementById('navToggler');
const navMenu = document.getElementById('navMenu');
navToggler.addEventListener('click', () => {
    navToggler.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
    console.log('clicked');
});