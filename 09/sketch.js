let displayEllipses = true;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  rectMode(CENTER);
}

function draw() {
  fill(255);
  quad(100, 900, 100, 500, 900, 200, 900, 900);
  noStroke();

  quad(100, 700, 100, 200, 700, 400, 400, 500);

    push();
    fill(0);
    ellipse(500, 600, 750, 300);
    pop();
  
  
  if (displayEllipses) {

    push();
    fill(255);
    ellipse(500, 600, 550, 150);
    pop();

    push();
    fill(0);
    ellipse(500, 600, 200, 300);
    pop();

    push();
    fill(255);
    ellipse(500, 600, 50, 100);
    pop();
    
  }
}

function mouseClicked() {
  displayEllipses = !displayEllipses;
}
