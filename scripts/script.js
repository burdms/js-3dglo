window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  ('use strict');

  const div = document.querySelector('div'),
    play = document.querySelector('#play'),
    reset = document.querySelector('#reset');

  let interval,
    count = 0,
    animate = false;

  function divAnimate() {
    interval = requestAnimationFrame(divAnimate);
    count++;
    if (count < window.innerHeight - 100) {
      div.style.top = count + 'px';
    } else {
      cancelAnimationFrame(divAnimate);
    }
  }

  play.addEventListener('click', () => {
    if (!animate) {
      interval = requestAnimationFrame(divAnimate);
      animate = true;
    } else {
      animate = false;
      cancelAnimationFrame(interval);
    }
  });

  reset.addEventListener('click', () => {
    cancelAnimationFrame(interval);
    count = 0;
    animate = false;
    div.style.top = 0;
  });
});
