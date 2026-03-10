function randomGridPosition(max) {
  return Math.floor(Math.random() * (max / unitSize)) * unitSize;
}

function createFood() {
  let foodIsOnSnake = true;

  while (foodIsOnSnake) {
    foodX = randomGridPosition(gameWidth);
    foodY = randomGridPosition(gameHeight);

    foodIsOnSnake = snake.some(part => part.x === foodX && part.y === foodY);
  }
}

function drawFood() {
  ctx.fillStyle = foodColor;
  ctx.fillRect(foodX, foodY, unitSize, unitSize);
}