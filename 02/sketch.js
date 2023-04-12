let size = 0;

function setup() {
  createCanvas(1000, 1000);
  background(188, 190, 73);
}

function draw() {
  
  translate(-250, 0)
  background(188, 190, 73);
  fill(255);
  noStroke();
  

  rect(500, 200, 20, size);
  rect(650, 250, 20, size);
  rect(800, 200, 20, size);
  rect(300, 200, size * 10, 20);
  rect(650, 240, size * 8, 20);
}

function mouseWheel(event) {
  if (event.delta > 0) {
    size -= 30;
  } else {
    size += 30;
  }
  
  size = constrain(size, 10, 300);
}
