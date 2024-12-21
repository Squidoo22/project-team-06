document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  let lastScrollPosition = 0;

  window.addEventListener(
    'scroll',
    throttle(() => {
      const currentScrollPosition = window.scrollY;

      if (window.innerWidth < 1280) {
        // Apply behavior for mobile only
        if (
          currentScrollPosition > lastScrollPosition &&
          currentScrollPosition > 50
        ) {
          // User is scrolling down, hide the header
          header.classList.add('header-hidden');
        } else if (currentScrollPosition < lastScrollPosition) {
          // User is scrolling up, show the header
          header.classList.remove('header-hidden');
        }
      }

      lastScrollPosition = currentScrollPosition;
    })
  );

  window.addEventListener('resize', () => {
    header.classList.remove('header-hidden');
  });
});

function throttle(callbackFn, limit = 50) {
  let wait = false;
  return function () {
    if (!wait) {
      callbackFn.call();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, limit);
    }
  };
}
