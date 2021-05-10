class SliderCarousel {
  constructor({
    main,
    wrap,
    prev,
    next,
    position = 0,

  }) {
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.options = {
      position,
    };
  }

  init() {
    this.addGloClass();
    this.addStyles();
  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');

    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyles() {
    const style = document.createElement('style');
    style.id = 'sliderCarousel-styles';

    style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }

      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
      }

      .glo-slider__item {
        flex: 0 0 25% !important;
        margin: auto 0 !important;
      }
    `;

    document.head.appendChild(style);
  }

  controlSlider() {

  }

  addArrows() {

  }
}

export default SliderCarousel;