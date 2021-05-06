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
      popup.querySelector('form').reset();
    }

    popupButton.forEach(item => {
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

    popup.addEventListener('click', event => {
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
    scrollTo.addEventListener('click', event => {
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

  // Slider
  function slider(time = 7000) {
    const slider = document.querySelector('.portfolio-content'),
      slides = document.querySelectorAll('.portfolio-item'),
      dotsContainer = document.querySelector('.portfolio-dots'),
      dots = [];

    let currentSlide = 0,
      interval;

    function createDots() {
      for (let i = 0; i < slides.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');

        if (i === 0) {
          li.classList.add('dot-active');
        }

        dots.push(li);
        dotsContainer.append(li);
      }
    }

    function prevSlide(elem, index, strClass) {
      elem[index].classList.remove(strClass);
    }

    function nextSlide(elem, index, strClass) {
      elem[index].classList.add(strClass);
    }

    function autoPlay() {
      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      currentSlide++;

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }

      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
    }

    function startSlider() {
      interval = setInterval(autoPlay, time);
    }

    function stopSlider() {
      clearInterval(interval);
    }

    slider.addEventListener('click', event => {
      event.preventDefault();

      const target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slides, currentSlide, 'portfolio-item-active');
      prevSlide(dots, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dots.forEach((item, index) => {
          if (item === target) {
            currentSlide = index;
          }
        });
      }

      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }

      nextSlide(slides, currentSlide, 'portfolio-item-active');
      nextSlide(dots, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', () => {
      stopSlider();
    });

    slider.addEventListener('mouseout', () => {
      startSlider();
    });

    createDots();
    startSlider();
  }

  // Team photo switcher
  function teamPhotoSwitcher() {
    const teamBlock = document.getElementById('command');
    let defaultSrc;

    teamBlock.addEventListener('mouseover', event => {
      const target = event.target;

      if (target.classList.contains('command__photo')) {
        defaultSrc = target.src;
        target.src = target.dataset.img;
      }
    });

    teamBlock.addEventListener('mouseout', event => {
      const target = event.target;

      if (target.classList.contains('command__photo')) {
        // Не уверен нужно ли, но следующий ИФ для проверки,
        // когда курсор НА фотке во время перезагрузки страницы. Чтобы он не присвоил пустоту, когда уберешь
        // По крайней мере, логика такая у меня была : )

        if (defaultSrc) {
          target.src = defaultSrc;
        }
      }
    });
  }

  // Only numbers input check
  function typeNums(event) {
    const input = event.target;

    input.value = input.value.replace(/[^\d]/, '');
  }

  // Only cyrillic, space, and dash
  function typeLetters(event) {
    const input = event.target;

    input.value = input.value.replace(/[^А-ЯЁ\- ]/gi, '');
  }

  // Only latin, and @, -, _, ., !, ~, *, '
  function typeEmail(event) {
    const input = event.target;
    input.value = input.value.replace(/[^A-Z@-_.!~*']/gi, '');
  }

  // Only numbers and plus sign
  function typeTel(event) {
    const input = event.target;

    input.value = input.value.replace(/[^0-9+]/gi, '');
  }

  // Only cyrillic, space, and punctuation marks
  function typeTextArea(event) {
    const input = event.target;

    input.value = input.value.replace(/[^А-ЯЁ0-9,.?!:;\- ]/gi, '');
  }

  // Check calc inputs
  function checkCaclInputs() {
    document.querySelectorAll('.calc-block input').forEach(item => {
      item.addEventListener('input', typeNums);
    });
  }

  // Check text inputs
  function checkTextInputs() {
    document.querySelectorAll('input[placeholder="Ваше имя"]').forEach(item => {
      item.addEventListener('input', typeLetters);
    });
  }

  // Check text area
  function checkTextArea() {
    document.querySelectorAll('input[placeholder="Ваше сообщение"]').forEach(item => {
      item.addEventListener('input', typeTextArea);
    });
  }

  // Check email inputs
  function checkEmailInputs() {
    document.querySelectorAll('input[type="email"]').forEach(item => {
      item.addEventListener('input', typeEmail);
    });
  }

  // Check phone inputs
  function checkPhoneInputs() {
    document.querySelectorAll('input[type="tel"]').forEach(item => {
      item.addEventListener('input', typeTel);
    });
  }

  // Check all inputs
  function checkAllInputs() {
    document.querySelectorAll('input').forEach(item => {
      item.addEventListener('blur', () => {
        item.value = item.value.replace(/-+/g, '-');
        item.value = item.value.replace(/ +/g, ' ');
        item.value = item.value.replace(/^(-| )+/g, '');
        item.value = item.value.replace(/(-| )$/g, '');
        if (item.type !== 'email') {
          item.value = item.value.replace(/^./g, char => char.toUpperCase());
          item.value = item.value.replace(/(?!^).*/, char => char.toLowerCase());
        } else {
          item.value = item.value.replace(/.*/, char => char.toLowerCase());
        }
      });
    });
  }

  // Calculator
  function calculator(price) {
    const calcBlock = document.querySelector('.calc-block');

    calcBlock.addEventListener('input', event => {
      const target = event.target;

      if (target.matches('select') || target.matches('input')) {
        countSum(price);
      }
    });
  }

  // Calculator sum counter
  function countSum(price) {
    const calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      calcTotal = document.getElementById('total'),
      typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    let total = 0,
      countValue = 1,
      dayValue = 1,
      interval,
      currentTotalValue = +calcTotal.textContent;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
    }

    calcTotalAnimate();

    // function calcTotalAnimate(current, total) {
    //   const interval = setInterval(() => {
    //     if (current < total) {
    //       current += 10;
    //       calcTotal.textContent = current;
    //     } else if (current > total) {
    //       current -= 10;
    //       calcTotal.textContent = current;
    //     } else {
    //       clearInterval(interval);
    //     }
    //   }, 10);
    // }

    function calcTotalAnimate() {
      interval = requestAnimationFrame(calcTotalAnimate);

      if (currentTotalValue < total) {
        currentTotalValue += 10;
        calcTotal.textContent = currentTotalValue;
      } else if (currentTotalValue > total) {
        currentTotalValue -= 10;
        calcTotal.textContent = currentTotalValue;
      } else {
        cancelAnimationFrame(calcTotalAnimate);
      }
    }
  }

  // Send form
  function sendForm(formID) {
    const errorMessage = 'Что-то пошло не так...',
      successMessage = 'Спасибо! Мы скоро с вами свяжемся',
      loadingMessage = 'Загрузка...';

    const form = document.getElementById(formID),
      statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

    form.addEventListener('submit', event => {
      event.preventDefault();

      statusMessage.innerHTML = `
      <div class='sk-three-bounce'>
      <div class='sk-bounce-1 sk-child'></div>
      <div class='sk-bounce-2 sk-child'></div>
      <div class='sk-bounce-3 sk-child'></div>
      </div>
      `;

      form.appendChild(statusMessage);

      const formData = new FormData(form),
        body = {};

      formData.forEach((value, key) => {
        body[key] = value;
      });

      postData(body,
        () => {
          statusMessage.innerHTML = '';
          statusMessage.textContent = successMessage;
        }, error => {
          statusMessage.innerHTML = '';
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });

    function postData(body, outputData, errorData) {
      const request = new XMLHttpRequest();

      request.addEventListener('readystatechange', () => {
        if (request.readyState !== 4) {
          return;
        }

        if (request.status === 200) {
          outputData();

          form.reset();
        } else {
          errorData(request.status);
        }
      });

      request.open('POST', './server.php');
      request.setRequestHeader('Content-Type', 'application/json');

      request.send(JSON.stringify(body));
    }
  }

  countTimer('22 april 2021');
  toggleMenu();
  togglePopup();
  smoothToServices();
  switchTabs();
  slider();
  teamPhotoSwitcher();
  checkCaclInputs();
  checkTextInputs();
  checkEmailInputs();
  checkPhoneInputs();
  checkTextArea();
  checkAllInputs();
  calculator(100);
  sendForm('form1');
  sendForm('form2');
  sendForm('form3');
});
