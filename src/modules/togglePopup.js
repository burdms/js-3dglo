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

export default togglePopup;
