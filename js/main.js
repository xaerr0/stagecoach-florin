// Header solidifies after scrolling past the hero
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const solidify = () => {
    header.classList.toggle('is-solid', window.scrollY > 60);
  };
  solidify();
  window.addEventListener('scroll', solidify, { passive: true });
})();

// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

// Menu page tabs
(function () {
  const tabs = document.querySelectorAll('.menu-tab');
  if (!tabs.length) return;
  const panels = document.querySelectorAll('.menu-panel');

  function activate(tab) {
    tabs.forEach((t) => t.setAttribute('aria-selected', 'false'));
    panels.forEach((p) => p.classList.remove('is-active'));
    tab.setAttribute('aria-selected', 'true');
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) panel.classList.add('is-active');
  }

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => activate(tab));
  });

  const hash = window.location.hash.replace('#', '');
  const initial = hash && document.querySelector(`.menu-tab[data-id="${hash}"]`);
  activate(initial || tabs[0]);
})();
