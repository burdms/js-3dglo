function toggleMenu() {
  const menu = document.querySelector('menu'),
    menuItems = menu.querySelectorAll('ul>li');

  function menuHandler() {
    menu.classList.toggle('active-menu');
  }

  document.addEventListener('click', event => {
    const target = event.target;

    if (target.closest('.menu')) {
      menuHandler();
    } else if (target.closest('menu')) {
      if (target.classList.contains('close-btn')) {
        menuHandler();
      }

      menuItems.forEach(item => {
        item = item.querySelector('a');

        if (target === item) {
          event.preventDefault();

          const id = item.getAttribute('href');
          document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

          menuHandler();
        }
      });
    } else {
      menu.classList.remove('active-menu');
    }
  });
}

export default toggleMenu;
