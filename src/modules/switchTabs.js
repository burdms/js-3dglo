function switchTabs() {
  const tabHeader = document.querySelector('.service-header'),
    tabs = document.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

  function switchTabContent(index) {
    tabContent.forEach((item, i) => {
      if (i === index) {
        tabs[i].classList.add('active');
        item.classList.remove('d-none');
      } else {
        tabs[i].classList.remove('active');
        item.classList.add('d-none');
      }
    });
  }

  tabHeader.addEventListener('click', event => {
    const target = event.target.closest('.service-header-tab');

    if (target) {
      tabs.forEach((item, index) => {
        if (item === target) {
          switchTabContent(index);
        }
      });
    }
  });
}

export default switchTabs;
