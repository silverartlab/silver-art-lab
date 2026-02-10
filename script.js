(() => {
  const drawer = document.getElementById('drawer');
  const menuBtn = document.getElementById('menuBtn');
  const closeBtn = document.getElementById('closeBtn');
  const backdrop = document.getElementById('backdrop');
  const year = document.getElementById('year');

  if (year) year.textContent = String(new Date().getFullYear());

  function openDrawer() {
    drawer?.classList.add('open');
    backdrop?.classList.add('show');
    menuBtn?.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    backdrop?.classList.remove('show');
    menuBtn?.setAttribute('aria-expanded', 'false');
  }

  // Apri / chiudi menu
  menuBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  // Chiudi con ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // ✅ Chiudi il menu quando clicchi un link del menu
  document.querySelectorAll('.drawer__nav a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

})();
