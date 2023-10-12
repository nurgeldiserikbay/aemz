function navigationInit() {
  const navControl = document.body.querySelector('.navigation__control');
  const navBody = document.body.querySelector('.navigation-mobile');

  let isActive = false
  
  navControl?.addEventListener('click', () => {
    navBody.classList.toggle('navigation-mobile--active')
    isActive = !isActive
  })

  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.navigation-mobile') || e.target.closest('.navigation__control') || !isActive) return

    navBody.classList.remove('navigation-mobile--active')
    isActive = false
  });
}

document.addEventListener('DOMContentLoaded', () => {
  navigationInit()
});