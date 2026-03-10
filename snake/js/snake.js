function moveSnake() {
  const head = {
    x: snake[0].x + xVelocity,
    y: snake[0].y + yVelocity
  };

  snake.unshift(head);

  if (head.x === foodX && head.y === foodY) {
    score += 1;
    scoreText.textContent = score;

    if (score > highScore) {
      highScore = score;
      localStorage.setItem("snakeHighScore", highScore);
      highScoreText.textContent = highScore;
    }

    updateLevelAndSpeed();
    createFood();
  } else {
    snake.pop();
  }
}

function drawSnake() {
  ctx.fillStyle = snakeColor;
  ctx.strokeStyle = snakeBorder;

  snake.forEach(part => {
    ctx.fillRect(part.x, part.y, unitSize, unitSize);
    ctx.strokeRect(part.x, part.y, unitSize, unitSize);
  });
}

function checkGameOver() {
  const head = snake[0];

  if (
    head.x < 0 ||
    head.x >= gameWidth ||
    head.y < 0 ||
    head.y >= gameHeight
  ) {
    running = false;
    return;
  }

  for (let i = 1; i < snake.length; i += 1) {
    if (snake[i].x === head.x && snake[i].y === head.y) {
      running = false;
      return;
    }
  }
}