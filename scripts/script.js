window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  ('use strict');

  // Timer
  function countTimer(deadline) {
    const timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
    const interval = setInterval(updateTimer, 1000);

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);

      return { timeRemaining, hours, minutes, seconds };
    }

    function updateTimer() {
      const timer = getTimeRemaining();

      timer.hours < 10
        ? (timerHours.textContent = '0' + timer.hours)
        : (timerHours.textContent = timer.hours);

      timer.minutes < 10
        ? (timerMinutes.textContent = '0' + timer.minutes)
        : (timerMinutes.textContent = timer.minutes);

      timer.seconds < 10
        ? (timerSeconds.textContent = '0' + timer.seconds)
        : (timerSeconds.textContent = timer.seconds);

      if (timer.timeRemaining <= 0) {
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(interval);
      }
    }
  }

  // Toggle menu
  function toggleMenu() {
    const menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li');

    function menuHandler() {
      menu.classList.toggle('active-menu');
    }

    document.addEventListener('click', (event) => {
      const target = event.target;

      if (target.closest('.menu')) {
        menuHandler();
      } else if (target.closest('menu')) {
        if (target.classList.contains('close-btn')) {
          menuHandler();
        }

        menuItems.forEach((item) => {
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

  // Toggle popup
  function togglePopup() {
    const popup = document.querySelector('.popup'),
      popupButton = document.querySelectorAll('.popup-btn');

    let interval,
      count = 0;

    function popupAnimate() {
      interval = requestAnimationFrame(popupAnimate);

      count += 0.1;
      if (count <= 1) {
        popup.style.opacity = count;
      } else {
        cancelAnimationFrame(popupAnimate);
      }
    }

    function popupClose() {
      popup.style.display = 'none';
      count = 0;
      cancelAnimationFrame(interval);
    }

    popupButton.forEach((item) => {
      item.addEventListener('click', () => {
        if (screen.availWidth > 768) {
          popup.style.opacity = '0';
          popup.style.display = 'block';
          interval = requestAnimationFrame(popupAnimate);
        } else {
          popup.style.display = 'block';
        }
      });
    });

    popup.addEventListener('click', (event) => {
      const target = event.target;

      if (target.classList.contains('popup-close')) {
        popupClose();
      } else {
        if (!target.closest('.popup-content')) {
          popupClose();
        }
      }
    });
  }

  // Smooth scroll for the first screen button
  function smoothToServices() {
    const scrollTo = document.querySelector('main>a');
    scrollTo.addEventListener('click', (event) => {
      event.preventDefault();
      const id = scrollTo.getAttribute('href');
      document.querySelector(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  }

  // Tab switcher
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

    tabHeader.addEventListener('click', (event) => {
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

  countTimer('22 april 2021');
  toggleMenu();
  togglePopup();
  smoothToServices();
  switchTabs();
});
