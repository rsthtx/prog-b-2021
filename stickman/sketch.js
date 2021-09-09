let centerHeadX;

function setup() {
  createCanvas(400, 400);
  centerHeadX = 20;
}

function draw() {
  background(220);

  let speed = 20;
  
  if(mouseX <200){
    fill('red')
  } else {
    fill('blue')
  }
  
  let centerHeadY = 100;
  let headSize = 60;

  // Tegner hovedet
  circle(centerHeadX, centerHeadY, headSize);

  line(centerHeadX, centerHeadY + headSize / 2, centerHeadX, 200);

  // centerHeadX = centerHeadX + speed;
}
