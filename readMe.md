Anaconda Game

Description

Anaconda is a simple web-based snake game where players control a snake to eat food and grow. The game provides a classic arcade gaming experience with a jungle-themed backdrop.

MVP (Minimum Viable Product)

Snake movement in four directions (up, down, left, right)
Collision detection with the game borders and itself
Snake growth upon eating food
Score tracking
Game restart functionality
Backlog

High-score tracking
Sound effects for different game events
Enhanced graphics and animations
Mobile responsiveness
Levels with increasing difficulty
Data Structure

Classes and Methods
draw: Renders the game elements on the grid.
drawSnake: Draws the snake on the grid.
createGameElement: Creates HTML elements for the game.
setPosition: Sets the position of a game element on the grid.
drawFood: Draws the food on the grid.
generateFood: Generates random coordinates for the food.
move: Handles the snake movement and collision logic.
startGame: Initiates the game and sets up the game loop.
handleKeyPress: Listens for key presses to control the snake.
increaseSpeed: Increases the game speed as the snake grows.
checkCollision: Checks for collisions with borders and itself.
resetGame: Resets the game state after collision.
updateScore: Updates the displayed score.
stopGame: Stops the game loop.
updateHighScore: Updates and displays the high score.
States and States Transitions

Start State: Game not started
Transition: Pressing the 'Space' key starts the game.
Running State: Game in progress
Transitions: Arrow keys control snake movement.
End State: Game over
Transition: After collision, press 'Space' to restart.

Tasks
Implement basic snake movement and collision.
Add food generation and snake growth logic.
Implement score tracking and display.
Integrate sound effects for various game events.
Enhance game visuals and graphics.
Implement high-score tracking.
Ensure mobile responsiveness.
Implement levels with increasing difficulty.

Extra Links
Trello

https://trello.com/invite/b/inzLYOCv/ATTI4c84ea89d7ca434f93185f2db95ee0e15E81D6CA/project-snake
