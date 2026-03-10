function clearBoard() {
  ctx.fillStyle = boardBackground;
  ctx.fillRect(0, 0, gameWidth, gameHeight);
}

function drawPausedText() {
  ctx.font = "40px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("PAUSED", gameWidth / 2, gameHeight / 2);
}

function displayGameOver() {
  ctx.font = "42px Arial";
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
}

function updateLevelAndSpeed() {
  level = Math.floor(score / 5) + 1;
  levelText.textContent = level;

  const newSpeed = 120 - (level - 1) * 10;
  gameSpeed = Math.max(50, newSpeed);
}

function updateStats() {
  scoreText.textContent = score;
  highScoreText.textContent = highScore;
  levelText.textContent = level;
}

function nextTick() {
  if (!running) {
    clearTimeout(tickTimer);
    displayGameOver();
    return;
  }

  if (paused) {
    clearBoard();
    drawFood();
    drawSnake();
    drawPausedText();
    return;
  }

  tickTimer = setTimeout(() => {
    directionChanged = false;
    clearBoard();
    drawFood();
    moveSnake();
    drawSnake();
    checkGameOver();
    nextTick();
  }, gameSpeed);
}

function togglePause() {
  if (!running) return;

  paused = !paused;
  pauseBtn.textContent = paused ? "Resume" : "Pause";

  if (!paused) {
    nextTick();
  } else {
    clearTimeout(tickTimer);
    clearBoard();
    drawFood();
    drawSnake();
    drawPausedText();
  }
}

function resetGame() {
  clearTimeout(tickTimer);

  running = true;
  paused = false;
  directionChanged = false;
  xVelocity = unitSize;
  yVelocity = 0;
  score = 0;
  level = 1;
  gameSpeed = 120;
  snake = getInitialSnake();

  updateStats();
  pauseBtn.textContent = "Pause";
  createFood();
  clearBoard();
  drawFood();
  drawSnake();
  nextTick();
}

pauseBtn.addEventListener("click", togglePause);
resetBtn.addEventListener("click", resetGame);

// Initialize the game when page loads
window.addEventListener("load", () => {
  resetGame();
});

updateStats();
resetGame();