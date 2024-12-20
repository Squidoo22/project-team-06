/** @type {HTMLDialogElement} */
const mobileMenu = document.querySelector('.mobile-menu');

/** @type {HTMLButtonElement} */
const mobileMenuOpenBtn = document.querySelector('.mobile-menu-btn');

/** @type {HTMLButtonElement} */
const mobileMenuCloseBtn = document.querySelector('.mobile-menu-btn.close-btn');

/** @type {HTMLUListElement} */
const mobileMenuNav = document.querySelector('.mobile-nav');

mobileMenuOpenBtn.addEventListener('click', () => {
  mobileMenu.showModal();
});

mobileMenuCloseBtn.addEventListener('click', () => {
  mobileMenu.close();
});

mobileMenu.addEventListener('click', event => {
  if (event.target === mobileMenu) mobileMenu.close();
});

mobileMenuNav.addEventListener('click', event => {
  if (event.target.tagName === 'A') mobileMenu.close();
});
