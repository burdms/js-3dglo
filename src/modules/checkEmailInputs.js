function checkEmailInputs() {
  document.querySelectorAll('input[type="email"]').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;
      input.value = input.value.replace(/[^A-Z@-_.!~*']/gi, '');
    });
  });
}

export default checkEmailInputs;
