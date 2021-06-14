function checkAllInputs() {
  document.querySelectorAll('input').forEach(item => {
    item.addEventListener('blur', () => {
      item.value = item.value.replace(/-+/g, '-');
      item.value = item.value.replace(/ +/g, ' ');
      item.value = item.value.replace(/^(-| )+/g, '');
      item.value = item.value.replace(/(-| )$/g, '');
      if (item.type !== 'email') {
        item.value = item.value.replace(/^./g, char => char.toUpperCase());
        item.value = item.value.replace(/(?!^).*/, char => char.toLowerCase());
      } else {
        item.value = item.value.replace(/.*/, char => char.toLowerCase());
      }
    });
  });
}


export default checkAllInputs;
