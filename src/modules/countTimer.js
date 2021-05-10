function countTimer(deadline) {
  const timerHours = document.querySelector('#timer-hours'),
    timerMinutes = document.querySelector('#timer-minutes'),
    timerSeconds = document.querySelector('#timer-seconds');

  updateTimer();
  const interval = setInterval(updateTimer, 1000);

  function getTimeRemaining() {
    const dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow) / 1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);

    return { timeRemaining, hours, minutes, seconds };
  }

  function updateTimer() {
    const timer = getTimeRemaining();

    timer.hours < 10
      ? (timerHours.textContent = '0' + timer.hours)
      : (timerHours.textContent = timer.hours);

    timer.minutes < 10
      ? (timerMinutes.textContent = '0' + timer.minutes)
      : (timerMinutes.textContent = timer.minutes);

    timer.seconds < 10
      ? (timerSeconds.textContent = '0' + timer.seconds)
      : (timerSeconds.textContent = timer.seconds);

    if (timer.timeRemaining <= 0) {
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
      clearInterval(interval);
    }
  }
}

export default countTimer;
