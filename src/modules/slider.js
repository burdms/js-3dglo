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

export default slider;
