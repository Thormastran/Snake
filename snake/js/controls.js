function setDirection(key) {
  if (!running || paused || directionChanged) return;

  const goingUp = yVelocity === -unitSize;
  const goingDown = yVelocity === unitSize;
  const goingRight = xVelocity === unitSize;
  const goingLeft = xVelocity === -unitSize;

  switch (key) {
    case "ArrowLeft":
      if (!goingRight) {
        xVelocity = -unitSize;
        yVelocity = 0;
        directionChanged = true;
      }
      break;
    case "ArrowUp":
      if (!goingDown) {
        xVelocity = 0;
        yVelocity = -unitSize;
        directionChanged = true;
      }
      break;
    case "ArrowRight":
      if (!goingLeft) {
        xVelocity = unitSize;
        yVelocity = 0;
        directionChanged = true;
      }
      break;
    case "ArrowDown":
      if (!goingUp) {
        xVelocity = 0;
        yVelocity = unitSize;
        directionChanged = true;
      }
      break;
  }
}

function handleKeyboard(event) {
  setDirection(event.key);
}

window.addEventListener("keydown", handleKeyboard);
upBtn.addEventListener("click", () => setDirection("ArrowUp"));
downBtn.addEventListener("click", () => setDirection("ArrowDown"));
leftBtn.addEventListener("click", () => setDirection("ArrowLeft"));
rightBtn.addEventListener("click", () => setDirection("ArrowRight"));