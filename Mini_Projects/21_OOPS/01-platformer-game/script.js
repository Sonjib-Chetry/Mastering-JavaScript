// Selecting DOM elements for game controls and screens
const startBtn = document.getElementById("start-btn"); // Start button element
const canvas = document.getElementById("canvas"); // Game canvas element
const startScreen = document.querySelector(".start-screen"); // Initial game screen
const checkpointScreen = document.querySelector(".checkpoint-screen"); // Checkpoint notification screen
const checkpointMessage = document.querySelector(".checkpoint-screen > p"); // Checkpoint message text
const ctx = canvas.getContext("2d"); // 2D rendering context for canvas

// Set canvas dimensions to match window size
canvas.width = innerWidth; // Canvas width = window width
canvas.height = innerHeight; // Canvas height = window height

// Physics constants
const gravity = 0.5; // Gravity force applied to player
let isCheckpointCollisionDetectionActive = true; // Toggle for checkpoint collision detection

// Calculate proportional sizes based on screen height
const proportionalSize = (size) => {
  return innerHeight < 500 ? Math.ceil((size / 500) * innerHeight) : size;
};

// Player character class
class Player {
  constructor() {
    // Initial position with proportional scaling
    this.position = {
      x: proportionalSize(10), // Starting X position
      y: proportionalSize(400), // Starting Y position
    };
    // Movement velocity
    this.velocity = {
      x: 0, // Horizontal velocity
      y: 0, // Vertical velocity
    };
    // Player dimensions with proportional scaling
    this.width = proportionalSize(40); // Player width
    this.height = proportionalSize(40); // Player height
  }

  // Render player on canvas
  draw() {
    ctx.fillStyle = "#99c9ff"; // Light blue color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw rectangle
  }

  // Update player position and physics
  update() {
    this.draw(); // Render player
    this.position.x += this.velocity.x; // Apply horizontal movement
    this.position.y += this.velocity.y; // Apply vertical movement

    // Apply gravity if not touching bottom of canvas
    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      // Prevent moving above canvas top
      if (this.position.y < 0) {
        this.position.y = 0;
        this.velocity.y = gravity;
      }
      this.velocity.y += gravity; // Apply gravity acceleration
    } else {
      this.velocity.y = 0; // Stop vertical movement at bottom
    }

    // Prevent moving beyond left boundary
    if (this.position.x < this.width) {
      this.position.x = this.width;
    }

    // Prevent moving beyond right boundary
    if (this.position.x >= canvas.width - this.width * 2) {
      this.position.x = canvas.width - this.width * 2;
    }
  }
}

// Platform class for surfaces player can stand on
class Platform {
  constructor(x, y) {
    this.position = { x, y }; // Platform position
    this.width = 200; // Fixed platform width
    this.height = proportionalSize(40); // Platform height with scaling
  }

  // Render platform on canvas
  draw() {
    ctx.fillStyle = "#acd157"; // Green color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw rectangle
  }
}

// Checkpoint class for progression markers
class CheckPoint {
  constructor(x, y, z) {
    this.position = { x, y }; // Checkpoint position
    this.width = proportionalSize(40); // Width with scaling
    this.height = proportionalSize(70); // Height with scaling
    this.claimed = false; // Claim status flag
  }

  // Render checkpoint on canvas
  draw() {
    ctx.fillStyle = "#f1be32"; // Gold color
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height); // Draw rectangle
  }

  // Handle checkpoint claiming
  claim() {
    this.width = 0; // Hide checkpoint
    this.height = 0; // Hide checkpoint
    this.position.y = Infinity; // Move off-screen
    this.claimed = true; // Mark as claimed
  }
}

// Instantiate player object
const player = new Player();

// Platform positions data
const platformPositions = [
  { x: 500, y: proportionalSize(450) },
  { x: 700, y: proportionalSize(400) },
  { x: 850, y: proportionalSize(350) },
  { x: 900, y: proportionalSize(350) },
  { x: 1050, y: proportionalSize(150) },
  { x: 2500, y: proportionalSize(450) },
  { x: 2900, y: proportionalSize(400) },
  { x: 3150, y: proportionalSize(350) },
  { x: 3900, y: proportionalSize(450) },
  { x: 4200, y: proportionalSize(400) },
  { x: 4400, y: proportionalSize(200) },
  { x: 4700, y: proportionalSize(150) },
];

// Create platform objects from positions
const platforms = platformPositions.map(
  (platform) => new Platform(platform.x, platform.y)
);

// Checkpoint positions data
const checkpointPositions = [
  { x: 1170, y: proportionalSize(80), z: 1 },
  { x: 2900, y: proportionalSize(330), z: 2 },
  { x: 4800, y: proportionalSize(80), z: 3 },
];

// Create checkpoint objects from positions
const checkpoints = checkpointPositions.map(
  (checkpoint) => new CheckPoint(checkpoint.x, checkpoint.y, checkpoint.z)
);

// Main animation loop
const animate = () => {
  requestAnimationFrame(animate); // Recursive animation call
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas frame

  // Render all platforms
  platforms.forEach((platform) => {
    platform.draw();
  });

  // Render all checkpoints
  checkpoints.forEach(checkpoint => {
    checkpoint.draw();
  });

  player.update(); // Update and render player

  // Handle player movement and world scrolling
  if (keys.rightKey.pressed && player.position.x < proportionalSize(400)) {
    player.velocity.x = 5; // Move player right
  } else if (keys.leftKey.pressed && player.position.x > proportionalSize(100)) {
    player.velocity.x = -5; // Move player left
  } else {
    player.velocity.x = 0; // Stop horizontal movement

    // Scroll world right when player moves right
    if (keys.rightKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x -= 5; // Move platforms left
      });
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x -= 5; // Move checkpoints left
      });
    } 
    // Scroll world left when player moves left
    else if (keys.leftKey.pressed && isCheckpointCollisionDetectionActive) {
      platforms.forEach((platform) => {
        platform.position.x += 5; // Move platforms right
      });
      checkpoints.forEach((checkpoint) => {
        checkpoint.position.x += 5; // Move checkpoints right
      });
    }
  }

  // Platform collision detection
  platforms.forEach((platform) => {
    // Rules for top collision (landing on platform)
    const collisionDetectionRules = [
      player.position.y + player.height <= platform.position.y, // Player above platform
      player.position.y + player.height + player.velocity.y >= platform.position.y, // Player moving downward
      player.position.x >= platform.position.x - player.width / 2, // Player within left bound
      player.position.x <= platform.position.x + platform.width - player.width / 3, // Player within right bound
    ];

    // Handle landing on platform
    if (collisionDetectionRules.every((rule) => rule)) {
      player.velocity.y = 0; // Stop vertical movement
      return;
    }

    // Rules for side collision (hitting platform edge)
    const platformDetectionRules = [
      player.position.x >= platform.position.x - player.width / 2, // Player within left bound
      player.position.x <= platform.position.x + platform.width - player.width / 3, // Player within right bound
      player.position.y + player.height >= platform.position.y, // Player below platform top
      player.position.y <= platform.position.y + platform.height, // Player above platform bottom
    ];

    // Handle side collision
    if (platformDetectionRules.every(rule => rule)) {
      player.position.y = platform.position.y + player.height; // Position player on top
      player.velocity.y = gravity; // Apply gravity
    };
  });

  // Checkpoint collision detection
  checkpoints.forEach((checkpoint, index, checkpoints) => {
    // Rules for checkpoint collection
    const checkpointDetectionRules = [
      player.position.x >= checkpoint.position.x, // Player right of left edge
      player.position.y >= checkpoint.position.y, // Player below top edge
      player.position.y + player.height <= checkpoint.position.y + checkpoint.height, // Player above bottom edge
      isCheckpointCollisionDetectionActive, // Checkpoints are active
      player.position.x - player.width <= checkpoint.position.x - checkpoint.width + player.width * 0.9, // Player left of right edge
      index === 0 || checkpoints[index - 1].claimed === true, // Previous checkpoint claimed (if not first)
    ];

    // Handle checkpoint collection
    if (checkpointDetectionRules.every((rule) => rule)) {
      checkpoint.claim(); // Mark checkpoint as claimed

      // Final checkpoint handling
      if (index === checkpoints.length - 1) {
        isCheckpointCollisionDetectionActive = false; // Disable checkpoints
        showCheckpointScreen("You reached the final checkpoint!"); // Show final message
        movePlayer("ArrowRight", 0, false); // Stop player movement
      }
      // Regular checkpoint handling
      else if (player.position.x >= checkpoint.position.x && player.position.x <= checkpoint.position.x + 40) {
        showCheckpointScreen("You reached a checkpoint!"); // Show checkpoint message
      }
    };
  });
}

// Keyboard input state tracker
const keys = {
  rightKey: { pressed: false }, // Right arrow state
  leftKey: { pressed: false } // Left arrow state
};

// Player movement controller
const movePlayer = (key, xVelocity, isPressed) => {
  // Disable movement after final checkpoint
  if (!isCheckpointCollisionDetectionActive) {
    player.velocity.x = 0;
    player.velocity.y = 0;
    return;
  }

  // Handle different key actions
  switch (key) {
    case "ArrowLeft": // Left arrow key
      keys.leftKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x -= xVelocity;
      break;
    case "ArrowUp": // Up arrow key
    case " ": // Spacebar
    case "Spacebar": // Spacebar (legacy)
      player.velocity.y -= 8; // Apply jump force
      break;
    case "ArrowRight": // Right arrow key
      keys.rightKey.pressed = isPressed;
      if (xVelocity === 0) {
        player.velocity.x = xVelocity;
      }
      player.velocity.x += xVelocity;
  }
}

// Initialize game
const startGame = () => {
  canvas.style.display = "block"; // Show canvas
  startScreen.style.display = "none"; // Hide start screen
  animate(); // Start game loop
}

// Display checkpoint message
const showCheckpointScreen = (msg) => {
  checkpointScreen.style.display = "block"; // Show message screen
  checkpointMessage.textContent = msg; // Set message text
  // Auto-hide message unless it's final checkpoint
  if (isCheckpointCollisionDetectionActive) {
    setTimeout(() => (checkpointScreen.style.display = "none"), 2000);
  }
};

// Event listeners
startBtn.addEventListener("click", startGame); // Start game on button click

window.addEventListener("keydown", ({ key }) => {
  movePlayer(key, 8, true); // Key press handler
});

window.addEventListener("keyup", ({ key }) => {
  movePlayer(key, 0, false); // Key release handler
});