let xPos = 30;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let speed = 1

  circle(xPos,150,50)

  xPos = xPos +(3 * speed);

}
