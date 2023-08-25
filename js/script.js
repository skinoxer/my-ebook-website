// Add custom JavaScript here
function userScrools() {
  const navbar = document.querySelector(`.navbar`);
  window.addEventListener(`scroll`, () => {
    if (window.scrollY>50) {
      navbar.classList.add(`bg-dark`);
      navbar.classList.add(`navbar-sticy`);
    
    } else {
      navbar.classList.remove(`bg-dark`);
      navbar.classList.remove(`navbar-sticy`);
    
    }
  });
}
document.addEventListener(`DOMContentLoaded`, userScrools);
