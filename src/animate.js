document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    }
  );

  const elements = document.querySelectorAll('.animate-on-scroll');
  if (elements.length > 0) {
    elements.forEach((el) => observer.observe(el));
  } else {
    console.error('No elements with class "animate-on-scroll" were found');
  }
});