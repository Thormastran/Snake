const gameBoard = document.getElementById("gameBoard");
const ctx = gameBoard.getContext("2d");

const scoreText = document.getElementById("scoreText");
const highScoreText = document.getElementById("highScoreText");
const levelText = document.getElementById("levelText");
const resetBtn = document.getElementById("resetBtn");
const pauseBtn = document.getElementById("pauseBtn");

const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const unitSize = 25;

const boardBackground = "white";
const snakeColor = "lightgreen";
const snakeBorder = "black";
const foodColor = "red";

let running = true;
let paused = false;
let directionChanged = false;

let xVelocity = unitSize;
let yVelocity = 0;

let foodX = 0;
let foodY = 0;
let score = 0;
let level = 1;
let gameSpeed = 120;
let tickTimer = null;

let highScore = Number(localStorage.getItem("snakeHighScore")) || 0;

let snake = [];

function getInitialSnake() {
  return [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 }
  ];
}

// Initialize snake immediately
snake = getInitialSnake();

// Function to resize canvas for responsive design
function resizeCanvas() {
  const container = document.querySelector('.board-wrap');
  const size = Math.min(container.clientWidth, container.clientHeight);
  // Keep internal canvas size fixed for consistent game logic
  gameBoard.width = 500;
  gameBoard.height = 500;
  // Scale the display size
  gameBoard.style.width = size + 'px';
  gameBoard.style.height = size + 'px';
}

// Resize canvas on window resize
window.addEventListener('resize', resizeCanvas);
window.addEventListener('DOMContentLoaded', resizeCanvas);