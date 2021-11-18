let spawnPosition = new p5.Vector()
let balls = []
let bouncingBalls = []
let randomBouncingBalls = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  spawnPosition = createVector(width / 2, height / 2)
  createBalls()
  createBouncingBalls()
  createRandomBouncingBalls()
}

function draw() {
  background(220);

  for (const ball of balls) {
    ball.update()
    ball.render()
  }

  for (const ball of bouncingBalls) {
    ball.update()
    ball.render()
  }

  for (const ball of randomBouncingBalls) {
    ball.update()
    ball.render()
  }
}

// ==== helper functions
function createBalls() {
  balls = []
  for (let i = 0; i < 50; i++) {
    balls.push(new Ball(spawnPosition))
  }
}

function createBouncingBalls() {
  bouncingBalls = []
  for (let i = 0; i < 10; i++) {
    bouncingBalls.push(new BouncingBall(spawnPosition))
  }
}

function createRandomBouncingBalls() {
  randomBouncingBalls = []
  for (let i = 0; i < 40; i++) {
    randomBouncingBalls.push(new RandomBouncingBall(spawnPosition))
  }
}


//=== events
function mousePressed() {
  spawnPosition.x = mouseX
  spawnPosition.y = mouseY
  // createBalls()
  createBouncingBalls()
}