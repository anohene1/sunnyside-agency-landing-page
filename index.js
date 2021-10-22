const navListContainer = document.querySelector('.nav__list__container');
const hamburgerIcon = document.querySelector('.hamburger-icon');

hamburgerIcon.addEventListener('click', function (){
   navListContainer.classList.toggle('hidden');
});