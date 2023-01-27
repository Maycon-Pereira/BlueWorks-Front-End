// Get the canvas element
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

// Set the size of the canvas
canvas.width = 500;
canvas.height = 500;

// Create the snake
var snake = [{x: 250, y: 250}];

// Create the food
var food = {x: Math.floor(Math.random() * canvas.width), 
            y: Math.floor(Math.random() * canvas.height)};

// Set the initial direction of the snake
var direction = "right";

// Draw the snake and the food on the canvas
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the snake
  for (var i = 0; i < snake.length; i++) {
    ctx.fillStyle = "white";
    ctx.fillRect(snake[i].x, snake[i].y, 10, 10);
  }

  // Draw the food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);
}

// Move the snake in the current direction
function move() {
  var head = snake[0];

  // Update the position of the snake based on the direction
  if (direction == "right") {
    head = {x: head.x + 10, y: head.y};
  } else if (direction == "left") {
    head = {x: head.x - 10, y: head.y};
  } else if (direction == "up") {
    head = {x: head.x, y: head.y - 10};
  } else if (direction == "down") {
    head = {x: head.x, y: head.y + 10};
  }

  // Add the new head to the front of the snake
  snake.unshift(head);

  // Check if the snake has collided with the food
  if (head.x == food.x && head.y == food.y) {
    // Generate a new piece of food
    food = {x: Math.floor(Math.random() * canvas.width), 
            y: Math.floor(Math.random() * canvas.height)};
  } else {
    // Remove the tail of the snake
    snake.pop();
  }
}

// Handle the arrow key presses
document.onkeydown = function(event) {
  if (event.keyCode == 37 && direction != "right") {
    direction = "left";
  } else if (event.keyCode == 38 && direction != "down") {
    direction = "up";
  } else if (event.keyCode == 39 && direction != "left") {
    direction = "right";
  } else if (event.keyCode == 40 && direction != "up") {
    direction = "down";
  }
}

// Check if the snake has collided with the walls
function checkCollision() {
  var head = snake[0];
  if (head.x >= canvas.width || head.x < 0 || head.y >= canvas.height || head.y < 0) {
    alert("Game Over");
    clearInterval(interval);
  }
}

// Check if the snake has collided with itself
function checkSelfCollision() {
  var head = snake[0];
  for (var i = 1; i < snake.length; i++) {
    if (head.x == snake[i].x && head.y == snake[i].y) {
      alert("Game Over");
      clearInterval(interval);
    }
  }
}

// Call the draw function every 100 milliseconds
var interval = setInterval(function() {
  move();
  checkCollision();
  checkSelfCollision();
  draw();
}, 100);

