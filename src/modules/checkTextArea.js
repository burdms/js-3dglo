function checkTextArea() {
  document.querySelectorAll('input[placeholder="Ваше сообщение"]').forEach(item => {
    item.addEventListener('input', event => {
      const input = event.target;

      input.value = input.value.replace(/[^А-ЯЁ0-9,.?!:;\- ]/gi, '');
    });
  });
}

export default checkTextArea;
