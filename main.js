// Olympic rings

const olympics = document.getElementById('olympics').getContext('2d');

function angle(degrees) {
  return (Math.PI / 180) * degrees;
}

function drawCircle(ponterX, pointerY, centerX, centerY, radius, lineWidth, color, startAngle = 0, endAngle = Math.PI * 2) {
  olympics.beginPath();
  olympics.moveTo(ponterX, pointerY);
  olympics.arc(centerX, centerY, radius, startAngle, endAngle, false);

  olympics.strokeStyle = color;
  olympics.lineWidth = lineWidth;
  olympics.stroke();
}

// Bottom circles
drawCircle(185, 130, 135, 130, 50, '10', 'yellow');
drawCircle(305, 130, 255, 130, 50, '10', 'green');

// Top circles
drawCircle(125, 75, 75, 75, 50, '10', 'cornFlowerBlue');
drawCircle(245, 75, 195, 75, 50, '10', 'black');
drawCircle(365, 75, 315, 75, 50, '10', 'lightCoral');

// Yellow circle overflow
// Left
drawCircle(85, 130, 135, 130, 50, '10', 'yellow', angle(180), angle(210));
// Top
drawCircle(135, 80, 135, 130, 50, '10', 'yellow', angle(270), angle(340));

// Green circle overflow
// Left
drawCircle(205, 130, 255, 130, 50, '10', 'green', angle(180), angle(210));
// Top
drawCircle(255, 80, 255, 130, 50, '10', 'green', angle(270), angle(340));
