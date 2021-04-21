window.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line strict
  ('use strict');

  function show() {
    const out = document.querySelector('.out');

    function getTimeRemaining() {
      const options = { weekday: 'long' },
        newYear = new Date('1 jan 2022').getTime(),
        dateNow = new Date().getTime(),
        hour = new Date().getHours(),
        timeRemaining = Math.floor((newYear - dateNow) / 86400000),
        currentTime = new Date().toLocaleTimeString('en-US'),
        day = new Date().toLocaleDateString('ru-RU', options);

      let str = '';

      if (hour >= 0 && hour < 4) {
        str = 'Доброй ночи';
      } else if (hour >= 4 && hour < 12) {
        str = 'Доброе утро';
      } else if (hour >= 12 && hour < 16) {
        str = 'Добрый день';
      } else {
        str = 'Добрый вечер';
      }

      return { str, day, currentTime, timeRemaining };
    }

    function updateTime() {
      const time = getTimeRemaining();

      out.innerHTML = `${time.str}<br>
                        Сегодня: ${time.day}<br>
                        Текущее время: ${time.currentTime}<br>
                        До нового года осталось ${time.timeRemaining} дней`;

      setTimeout(updateTime, 1000);
    }

    updateTime();
  }

  show();
});
