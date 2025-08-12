// Navegación lateral y overlay
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const drawer = document.querySelector('.drawer');
  const overlay = document.querySelector('.overlay');

  function openDrawer() {
    drawer.classList.add('open');
    overlay.classList.add('show');
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
  }

  menuBtn?.addEventListener('click', () => {
    openDrawer();
  });

  closeBtn?.addEventListener('click', () => {
    closeDrawer();
  });

  overlay?.addEventListener('click', () => {
    closeDrawer();
  });
});