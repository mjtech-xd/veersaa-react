import { useLayoutEffect } from 'react';

/* Adds a fade/slide-in animation to elements as they scroll into view.
   Uses useLayoutEffect so the hidden state is applied before paint (no flash). */
const SELECTORS = [
  '.section-title', '.pill', '.lead', '.hero-actions', '.hero-stats',
  '.prob-card', '.how-step', '.how-arrow', '.svc', '.assistant-copy',
  '.assistant-box', '.plan', '.addons', '.trust-card', '.testi',
  '.contact-form', '.contact-copy', '.eyebrow', '.section-sub',
];

export default function useScrollReveal(deps = []) {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = Array.from(document.querySelectorAll(SELECTORS.join(',')));
    els.forEach((el) => el.classList.add('reveal'));

    // stagger items that share the same parent
    const counters = new Map();
    els.forEach((el) => {
      const p = el.parentElement;
      const i = counters.get(p) || 0;
      counters.set(p, i + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(i, 6) * 70}ms`);
    });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
