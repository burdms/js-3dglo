class SliderCarousel {
  constructor({
    main,
    wrap,
    prev,
    next,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn('Slider Carousel: необходимо передать 2 свойства: "main" и "wrap"');
    }

    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      infinity,
      slideWidth: Math.floor(100 / this.slidesToShow),
      maxPosition: this.slides.length - this.slidesToShow,
    };
    this.responsive = responsive;
  }

  init() {
    this.addGloClass();
    this.addStyles();

    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrows();
      this.controlSlider();
    }

    if (this.responsive) {
      this.responsiveItit();
    }
  }

  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');

    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }

  addStyles() {
    let style = document.getElementById('sliderCarousel-styles');

    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-styles';
    }

    style.textContent = `
      .glo-slider {
        overflow: hidden !important;
      }

      .glo-slider__wrap {
        display: flex !important;
        transition: transform 0.5s !important;
      }

      .glo-slider__item {
        display: flex !important;
        align-items: center;
        justify-content: center;
        flex: 0 0 ${this.options.slideWidth}% !important;
        margin: auto 0 !important;
      }
    `;

    document.head.appendChild(style);
  }

  controlSlider() {
    this.prev.addEventListener('click', this.prevSlide.bind(this));
    this.next.addEventListener('click', this.nextSlide.bind(this));
  }

  prevSlide() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;

      if (this.options.position < 0) {
        this.options.position = this.options.maxPosition;
      }

      this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  nextSlide() {
    if (this.options.infinity || this.options.position < this.options.maxPosition) {
      ++this.options.position;

      if (this.options.position > this.options.maxPosition) {
        this.options.position = 0;
      }

      this.wrap.style.transform = `translateX(-${this.options.position * this.options.slideWidth}%)`;
    }
  }

  addArrows() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';

    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement('style');
    style.textContent = `
        .glo-slider__prev,
        .glo-slider__next {
          margin: 0 10px;
          border: 20px solid transparent;
          background-color: transparent;
          outline: none; 
        }

        .glo-slider__prev {
          border-right-color: #19b5fe;
        }

        .glo-slider__next {
          border-left-color: #19b5fe;
        }

        .glo-slider__prev:hover,
        .glo-slider__next:hover {
          background-color: transparent;
        }
      `;

    document.head.appendChild(style);
  }

  responsiveItit() {
    const slidesToShowDefault = this.slidesToShow,
      allResponsive = this.responsive.map(item => item.breakpoint),
      maxResponsive = Math.max(...allResponsive);

    const changeResponse = () => {
      this.options.slideWidth = Math.floor(100 / this.slidesToShow);
      this.options.maxPosition = this.slides.length - this.slidesToShow;
      this.addStyles();
    };

    const checkResponse = () => {
      const windowWidth = document.documentElement.clientWidth;

      if (windowWidth < maxResponsive) {
        for (let i = 0; i < allResponsive.length; i++) {
          if (windowWidth < allResponsive[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            changeResponse();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        changeResponse();
      }
    };

    checkResponse();

    window.addEventListener('resize', checkResponse);
  }
}

export default SliderCarousel;
