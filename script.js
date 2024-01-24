const grid = document.getElementById("grid");

const restart = document.getElementById("restart");
const highScoreText = document.getElementById("high-score");
const score = document.getElementById("score");
const instructions = document.getElementById("instruction");
const logo = document.getElementById("img-snake");
const restartLogo = document.getElementById("restart-img");
const title = document.getElementById("title");
const eatSound = document.getElementById("eatSound");
const ouchSound = document.getElementById("ouchSound");
const endSound = document.getElementById("endSound");
const introSound = document.getElementById("introSound");

let snake = [{ x: 20, y: 10 }];
let food = generateFood();
let highscore = 0;
let direction = "right";
let gameInterval;
let gameSpeedDelay = 200;
let gameStarted = false;

restartLogo.style.display = "none";

function draw() {
  grid.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
}

function drawSnake() {
  snake.forEach((segment) => {
    const snakeElement = createGameElement("div", "snake");
    setPosition(snakeElement, segment);
    grid.appendChild(snakeElement);
  });
}
function createGameElement(tag, snakeClass) {
  const element = document.createElement(tag);
  element.className = snakeClass;
  return element;
}
function setPosition(element, position) {
  element.style.gridColumn = position.x;
  element.style.gridRow = position.y;
}
function drawFood() {
  foodElement = createGameElement("div", "food");
  setPosition(foodElement, food);
  grid.appendChild(foodElement);
}
function generateFood() {
  const x = Math.floor(Math.random() * 40) + 1;
  const y = Math.floor(Math.random() * 20) + 1;
  return { x, y };
}
function move() {
  const head = { ...snake[0] };

  switch (direction) {
    case "right":
      head.x++;
      break;
    case "up":
      head.y--;
      break;
    case "left":
      head.x--;
      break;
    case "down":
      head.y++;
      break;
  }
  snake.unshift(head);
  if (head.x === food.x && head.y === food.y) {
    eatSound.play();
    food = generateFood();
    increaseSpeed;
    clearInterval(gameInterval);
    gameInterval = setInterval(() => {
      move();
      checkCillision();
      draw();
    }, gameSpeedDelay);
  } else {
    snake.pop();
  }
}
function startGame() {
  introSound.play();
  endSound.pause();
  gameStarted = true;
  instructions.style.display = "none";
  logo.style.display = "none";
  restartLogo.style.display = "none";
  restart.style.display = "none";
  title.style.display = "block";
  gameInterval = setInterval(() => {
    move();
    checkCillision();
    draw();
  }, gameSpeedDelay);
}
function handleKeyPress(event) {
  if (
    (!gameStarted && event.code === "Space") ||
    (!gameStarted && event.key === " ")
  ) {
    startGame();
  } else {
    switch (event.key) {
      case "ArrowUp":
        direction = "up";
        break;
      case "ArrowDown":
        direction = "down";
        break;
      case "ArrowRight":
        direction = "right";
        break;
      case "ArrowLeft":
        direction = "left";
        break;
    }
  }
}
document.addEventListener("keydown", handleKeyPress);

function increaseSpeed() {
  if (gameSpeedDelay > 150) {
    gameSpeedDelay = -5;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay = -4;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay = -2;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay = -1;
  }
}
function checkCillision() {
  const head = snake[0];
  if (head.x < 1 || head.x > 40 || head.y < 1 || head.y > 20) { 
    resetGame();
  }
  for (let i = 1; i < snake.length; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      resetGame();
    }
  }
}
function resetGame() {
  introSound.pause();
  ouchSound.play();
  endSound.play();
  updateHighScore();
  stopGame();
  snake = [{ x: 15, y: 15 }];
  food = generateFood();
  direction = "right";
  gameSpeedDelay = 200;
  updateScore();
  instructions.style.display = "none";
  restart.style.display = "block";
  logo.style.display = "none";
  restartLogo.style.display = "block";
  title.style.display = "none";
  
}
function updateScore() {
  const currentScore = snake.length - 1;
  score.textContent = currentScore.toString().padStart(1, "0");
}
function stopGame() {
  clearInterval(gameInterval);
  gameStarted = false;
  title.style.display = "block";
  instructions.style.display = "block";
  logo.style.display = "block";
 
}
function updateHighScore() {
  const currentScore = snake.length - 1;
  if (currentScore > highscore) {
    highscore = currentScore;
    highScoreText.textContent = highscore.toString().padStart(1, "0");
  }
  highScoreText.style.display = "block";
}
