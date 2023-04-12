let fuzz = []; // array of pixel objects
let d = 0;

function setup() {
  createCanvas(1000, 1000);
  // Create objects
  for (let i = 0; i < 8000; i++) {
    fuzz.push(new pixel());
  }
  background(0);
}

function draw() {
  background(0, 200);

  for (let i = 0; i < fuzz.length; i++) {
    fuzz[i].move();
    fuzz[i].display();
  }

  d = d + random(-10, 10);
  d > 400;
  d < 500;

  fill(0, 255, 0, 200);
  noStroke();
  beginShape();
  vertex(200, 800);
  vertex(200, 550);
  vertex(200 + d, 550); //glitch corner
  vertex(200 + d, 450); //glitch corner
  vertex(200, 450);
  vertex(200, 200);
  vertex(350, 200);
  vertex(500, 400);
  vertex(650, 200);
  vertex(800, 200);
  vertex(800, 450);
  vertex(800 + d, 450); //glitch corner
  vertex(800 + d, 550); //glitch corner
  vertex(800, 550);
  vertex(800, 800);
  vertex(700, 800);
  vertex(700, 550);
  vertex(700 + d, 550); //glitch corner
  vertex(700 + d, 450); //glitch corner
  vertex(700, 450);
  vertex(700, 300);
  vertex(586, 450);
  vertex(586 + d, 450); // glitch corner
  vertex(550 + d, 500); //glitch
  vertex(450 + d, 500); //glitch
  vertex(414 + d, 450); //glitch corner
  vertex(414, 450);
  vertex(300, 300);
  vertex(300, 450);
  vertex(300 + d, 450); //glitch corner
  vertex(300 + d, 550); //glitch corner
  vertex(300, 550);
  vertex(300, 800);
  endShape(CLOSE);
}

// pixel class
class pixel {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(5, 10);
    this.speed = 10;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    fill(random(100, 255), 100)
    noStroke();
    rect(this.x, this.y, this.diameter, this.diameter);
  }
}