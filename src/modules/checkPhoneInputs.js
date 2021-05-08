function checkPhoneInputs() {
  document.querySelectorAll('input[type="tel"]').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;

      input.value = input.value.replace(/[^0-9+]/gi, '');
    });
  });
}

export default checkPhoneInputs;
