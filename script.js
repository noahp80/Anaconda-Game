class Anaconda {
  constructor() {
    this.grid = document.getElementById("grid");
    this.restart = document.getElementById("restart");
    this.highScoreText = document.getElementById("high-score");
    this.score = document.getElementById("score");
    this.instructions = document.getElementById("instruction");
    this.logo = document.getElementById("img-snake");
    this.restartLogo = document.getElementById("restart-img");
    this.title = document.getElementById("title");
    this.eatSound = document.getElementById("eatSound");
    this.ouchSound = document.getElementById("ouchSound");
    this.endSound = document.getElementById("endSound");
    this.introSound = document.getElementById("introSound");
    this.gameSound = document.getElementById("gameSound");
    this.snake = [{ x: 20, y: 10 }];
    this.food = this.generateFood();
    this.highscore = 0;
    this.direction = "right";
    this.gameInterval;
    this.gameSpeedDelay = 200;
    this.gameStarted = false;
    this.restartLogo.style.display = "none";
    this.eventListeners();
  }
  draw() {
    this.grid.innerHTML = "";
    this.drawSnake();
    this.drawFood();
    this.updateScore();
  }
  drawSnake() {
    this.snake.forEach((segment) => {
      const snakeElement = this.createGameElement("div", "snake");
      this.setPosition(snakeElement, segment);
      this.grid.appendChild(snakeElement);
    });
  }
  createGameElement(tag, snakeClass) {
    const element = document.createElement(tag);
    element.className = snakeClass;
    return element;
  }
  setPosition(element, position) {
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
  }
  drawFood() {
    const foodElement = this.createGameElement("div", "food");
    this.setPosition(foodElement, this.food);
    this.grid.appendChild(foodElement);
  }
  generateFood() {
    const x = Math.floor(Math.random() * 40) + 1;
    const y = Math.floor(Math.random() * 20) + 1;
    return { x, y };
  }
  move() {
    const head = { ...this.snake[0] };
    switch (this.direction) {
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
    this.snake.unshift(head);
    if (head.x === this.food.x && head.y === this.food.y) {
      this.eatSound.play();
      this.eatSound.volume = 0.4;
      this.food = this.generateFood();
      this.increaseSpeed();
      clearInterval(this.gameInterval);
      this.gameInterval = setInterval(() => {
        this.move();
        this.checkCillision();
        this.draw();
      }, this.gameSpeedDelay);
    } else {
      this.snake.pop();
    }
  }
  startGame() {
    this.introSound.pause();
    this.gameSound.play();
    this.gameSound.volume = 0.1;
    this.endSound.pause();
    this.gameStarted = true;
    this.instructions.style.display = "none";
    this.logo.style.display = "none";
    this.restartLogo.style.display = "none";
    this.restart.style.display = "none";
    this.title.style.display = "block";
    this.gameInterval = setInterval(() => {
      this.move();
      this.checkCillision();
      this.draw();
    }, this.gameSpeedDelay);
  }
  handleKeyPress(event) {
    if (
      (!this.gameStarted && event.code === "Space") ||
      (!this.gameStarted && event.key === " ")
    ) {
      this.startGame();
    } else {
      switch (event.key) {
        case "ArrowUp":
          this.direction = "up";
          break;
        case "ArrowDown":
          this.direction = "down";
          break;
        case "ArrowRight":
          this.direction = "right";
          break;
        case "ArrowLeft":
          this.direction = "left";
          break;
      }
    }
  }
  eventListeners() {
    document.addEventListener("keydown", this.handleKeyPress.bind(this));
  }
  increaseSpeed() {
    if (this.gameSpeedDelay > 150) {
      this.gameSpeedDelay -= 5;
    } else if (this.gameSpeedDelay > 100) {
      this.gameSpeedDelay -= 4;
    } else if (this.gameSpeedDelay > 50) {
      this.gameSpeedDelay -= 2;
    } else if (this.gameSpeedDelay > 25) {
      this.gameSpeedDelay -= 1;
    }
  }
  checkCillision() {
    const head = this.snake[0];
    if (head.x < 1 || head.x > 40 || head.y < 1 || head.y > 20) {
      this.ouchSound.play();
      this.ouchSound.volume = 0.4;
      this.resetGame();
    }
    for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
        this.ouchSound.play();
        this.resetGame();
      }
    }
  }
  resetGame() {
    this.introSound.pause();
    this.gameSound.pause();
    this.endSound.play();
    this.endSound.volume = 0.5;
    this.updateHighScore();
    this.stopGame();
    this.snake = [{ x: 20, y: 10 }];
    this.food = this.generateFood();
    this.direction = "right";
    this.gameSpeedDelay = 200;
    this.updateScore();
    this.instructions.style.display = "none";
    this.restart.style.display = "block";
    this.logo.style.display = "none";
    this.restartLogo.style.display = "block";
    this.title.style.display = "none";
  }
  updateScore() {
    const currentScore = this.snake.length - 1;
    this.score.textContent = currentScore.toString();
  }
  stopGame() {
    clearInterval(this.gameInterval);
    this.gameStarted = false;
    this.title.style.display = "block";
    this.instructions.style.display = "block";
    this.logo.style.display = "block";
  }
  updateHighScore() {
    const currentScore = this.snake.length - 1;
    if (currentScore > this.highscore) {
      this.highscore = currentScore;
      this.highScoreText.textContent = this.highscore.toString();
    }
    this.highScoreText.style.display = "block";
  }
}
const anaconda = new Anaconda();
