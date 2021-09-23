let xPos = 200;
let yPos = xPos
let xSpeed = 5
let ySpeed = 7

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {

  let radius = 70
  let diameter = radius * 2
  let grayValue = map(xPos, 0, width, 0, 255)
  fill(grayValue)

  circle(xPos, yPos, diameter)

  xPos = xPos +  xSpeed
  yPos = yPos +  ySpeed

  let pastRightEdge = width < xPos + radius
  let pastLeftEdge = 0 > xPos - radius
  if (pastRightEdge || pastLeftEdge) {
    xSpeed = -xSpeed
  }

  let belowBottom = height < yPos + radius
  let aboveTop = 0 > yPos - radius
  if (belowBottom || aboveTop) {
    ySpeed = -ySpeed
  }
}
