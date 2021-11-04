let ballCount = 10
let xPositions = new Array(ballCount)
let yPositions = new Array(ballCount)
let ySpeeds = new Array(ballCount)
let d = new Array(ballCount)

function setup() {
  createCanvas(windowWidth, windowHeight);
  reset(40);
}

function draw() {
  background(220);

  for (let i = 0; i < xPositions.length; i++) {
    circle(xPositions[i],yPositions[i],d[i])
    yPositions[i] += ySpeeds[i]
  }
}

function reset(maxSize) {
  for (let i = 0; i < ballCount; i++) {
    xPositions[i] = random(2, width)
    ySpeeds[i] = random(0.5, 10)
    d[i] = random(2, maxSize)
  }
  yPositions.fill(20)
}

function mousePressed() {
  let size = map(mouseX,0,width, 40, 200)
  console.log(size)
  reset(size);
}