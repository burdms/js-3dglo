function calculator(price) {
  const calcBlock = document.querySelector('.calc-block');

  function countSum(price) {
    const calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      calcTotal = document.getElementById('total'),
      typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = +calcSquare.value;

    let total = 0,
      countValue = 1,
      dayValue = 1;

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
    }

    calcTotal.textContent = total;
  }

  calcBlock.addEventListener('input', event => {
    const target = event.target;

    if (target.matches('select') || target.matches('input')) {
      countSum(price);
    }
  });
}

export default calculator;
