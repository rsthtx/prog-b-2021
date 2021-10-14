let fillColor = 'black'

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);
  let x = mouseX
  let y = mouseY
  let d = 80
  
  fill(fillColor)  
  if (keyIsPressed) {
    rect(x, y, d)
  } else {
    circle(x, y, d)
  }
}

function keyPressed() {
  console.log("Pressed", key)
  if (key == 'r') {
    fillColor = 'red'
  }
  if (key == 'b') {
    fillColor = 'blue'
  }
}

function keyReleased() {
  console.log("Released", key)
}
