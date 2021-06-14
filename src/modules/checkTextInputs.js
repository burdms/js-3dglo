function checkTextInputs() {
  document.querySelectorAll('input[placeholder="Ваше имя"]').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;

      input.value = input.value.replace(/[^А-ЯЁ\- ]/gi, '');
    });
  });
}

export default checkTextInputs;
