function sendForm(formID) {
  const errorMessage = 'Что-то пошло не так...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся';

  const form = document.getElementById(formID),
    statusMessage = document.createElement('div');

  statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

  form.appendChild(statusMessage);

  form.addEventListener('submit', event => {
    event.preventDefault();

    let flag = true;

    form.querySelectorAll('input:not([placeholder="Ваше сообщение"])').forEach(item => {
      if (!item.value) {
        flag = false;
      }
    });

    if (flag) {
      statusMessage.innerHTML = `
          <div class='sk-three-bounce'>
          <div class='sk-bounce-1 sk-child'></div>
          <div class='sk-bounce-2 sk-child'></div>
          <div class='sk-bounce-3 sk-child'></div>
          </div>
          `;

      const formData = new FormData(form),
        body = {};

      formData.forEach((value, key) => {
        body[key] = value;
      });

      postData(body)
        .then(response => {
          if (response.status !== 200) {
            throw new Error('Network status is not 200');
          }

          form.reset();
          statusMessage.textContent = successMessage;

          setTimeout(() => {
            if (form.closest('.popup')) {
              statusMessage.textContent = '';
              form.closest('.popup').style.display = 'none';
            } else {
              statusMessage.textContent = '';
            }
          }, 3000);
        }
        )
        .catch(error => {
          statusMessage.textContent = errorMessage;
          console.error(error);

          setTimeout(() => {
            statusMessage.textContent = '';
          }, 3000);
        });
    } else {
      statusMessage.textContent = 'Необходимо заполнить все поля!';

      setTimeout(() => {
        statusMessage.textContent = '';
      }, 3000);
    }
  });

  function postData(body) {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body),
    });
  }
}

export default sendForm;
