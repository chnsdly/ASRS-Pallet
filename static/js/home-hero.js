(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  document.querySelectorAll('[data-home-hero]').forEach((hero) => {
    const track = hero.querySelector('[data-home-hero-track]');
    const slides = [...hero.querySelectorAll('[data-home-hero-slide]')];
    const dots = [...hero.querySelectorAll('[data-home-hero-dot]')];
    const previous = hero.querySelector('[data-home-hero-prev]');
    const next = hero.querySelector('[data-home-hero-next]');

    if (!track || slides.length < 2) return;

    let current = 0;
    let timer;
    let pointerStart;
    let isHovered = false;
    let isFocusWithin = false;

    const show = (index) => {
      current = (index + slides.length) % slides.length;
      track.style.transform = `translate3d(-${current * 100}%, 0, 0)`;

      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === current;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
        slide.inert = !isActive;
      });

      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === current;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-current', String(isActive));
      });
    };

    const stop = () => window.clearInterval(timer);
    const start = () => {
      stop();
      if (reducedMotion.matches || document.hidden || isHovered || isFocusWithin) return;
      timer = window.setInterval(() => show(current + 1), 6000);
    };
    const select = (index) => {
      show(index);
      start();
    };

    previous.addEventListener('click', () => select(current - 1));
    next.addEventListener('click', () => select(current + 1));
    dots.forEach((dot) => dot.addEventListener('click', () => select(Number(dot.dataset.slideIndex))));

    hero.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') select(current - 1);
      if (event.key === 'ArrowRight') select(current + 1);
    });
    hero.addEventListener('mouseenter', () => { isHovered = true; stop(); });
    hero.addEventListener('mouseleave', () => { isHovered = false; start(); });
    hero.addEventListener('focusin', () => { isFocusWithin = true; stop(); });
    hero.addEventListener('focusout', (event) => {
      if (hero.contains(event.relatedTarget)) return;
      isFocusWithin = false;
      start();
    });

    track.addEventListener('pointerdown', (event) => { pointerStart = event.clientX; });
    track.addEventListener('pointerup', (event) => {
      if (pointerStart === undefined) return;
      const distance = event.clientX - pointerStart;
      pointerStart = undefined;
      if (Math.abs(distance) > 50) select(current + (distance < 0 ? 1 : -1));
    });
    track.addEventListener('pointercancel', () => { pointerStart = undefined; });

    document.addEventListener('visibilitychange', start);
    reducedMotion.addEventListener('change', start);
    show(0);
    start();
  });
})();
