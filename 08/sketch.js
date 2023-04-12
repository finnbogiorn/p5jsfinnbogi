let yPos = 0;

function setup(){
    createCanvas(1000, 1000);
    frameRate(30);
}

function draw() {
  // draw() loops forever, until stopped
  let r = map(sin(frameCount * 0.03), -1, 1, 0, 255);
  let g = map(sin(frameCount * 0.05), -1, 1, 0, 255);
  let b = map(sin(frameCount * 0.07), -1, 1, 0, 255);
  background(r, g, b);
  stroke(255)
  
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(380, mouseX, width, mouseY);

  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(480, mouseX, width, mouseY);

  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(580, mouseX, width, mouseY);
  
  push()
  noStroke()
  rect(000,700,1000)
  pop()
}