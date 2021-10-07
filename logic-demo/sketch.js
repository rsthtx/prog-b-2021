function setup() {
  createCanvas(windowWidth, windowHeight)
}


function draw() {
  background(220);
  let x = mouseX
  let y = mouseY
  let diameter = 80

  let horizontalDivider = width / 2
  let verticalDivider = height / 2

  
  let isLeft = x < horizontalDivider
  let isAbove = y < verticalDivider
  
  if ((isLeft && isAbove) || (!isLeft && !isAbove)) {
    fill('red')
  } else {
    fill('white')
  }

  // divider lines
  line(horizontalDivider, 0, horizontalDivider, height)
  line(0, verticalDivider, width, verticalDivider)

  circle(x, y, diameter)

}
