function checkCalcInputs() {
  document.querySelectorAll('.calc-block input').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;

      input.value = input.value.replace(/[^\d]/, '');
    });
  });
}

export default checkCalcInputs;
