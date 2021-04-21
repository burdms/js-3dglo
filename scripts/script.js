window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  ('use strict');

  function debounce(fn, delay) {
    return function (event) {
      console.log(this);
      const previousCall = this.lastCall;
      this.lastCall = Date.now();

      if (previousCall && this.lastCall - previousCall <= delay) {
        clearTimeout(this.lastCallTimer);
      }

      this.lastCallTimer = setTimeout(() => fn(event), delay);
    };
  }

  function type(event) {
    document.querySelector('p').textContent = event.target.value;
  }

  document
    .querySelector('input')
    .addEventListener('input', debounce(type, 300));
});
