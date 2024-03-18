https://noahp80.github.io/Anaconda-Game/

Anaconda Game

Description
Anaconda is a classic snake game where the player controls a snake to eat food and grow in length. The goal is to achieve the highest score without colliding with the game boundaries or the snake's own body.

MVP (Minimum Viable Product)
Snake movement in four directions (up, down, left, right).
Snake can eat food to grow in length.
Game over when the snake collides with the boundaries or itself.
Display current score.
Ability to restart the game.

Backlog
Implement levels with increasing difficulty.
Add obstacles in the game.
Introduce different types of food with varying effects.
Multiplayer mode.
Enhance game graphics and user interface.

Data Structure
Anaconda class:
Properties: grid, restart, highScoreText, score, instructions, logo, restartLogo, title, eatSound, ouchSound, endSound, introSound, gameSound, snake, food, highscore, direction, gameInterval, gameSpeedDelay, gameStarted.
Methods: draw(), drawSnake(), createGameElement(), setPosition(), drawFood(), generateFood(), move(), startGame(), handleKeyPress(), eventListeners(), increaseSpeed(), checkCollision(), resetGame(), updateScore(), stopGame(), updateHighScore().

States and States Transitions
States:
Game not started
Game running
Game over
State Transitions:
Initial state transitions to "Game running" when the player presses the 'Space' key.
"Game running" transitions to "Game over" when the snake collides with boundaries or itself.
"Game over" transitions back to the initial state when the player presses the 'Space' key to restart.

Tasks
Implement basic snake movement and food generation.
Implement collision detection for boundaries and snake body.
Display current score.
Implement game restart functionality.
Enhance game with sound effects.

Extra Links
Trello

https://trello.com/invite/b/inzLYOCv/ATTI4c84ea89d7ca434f93185f2db95ee0e15E81D6CA/project-snake
