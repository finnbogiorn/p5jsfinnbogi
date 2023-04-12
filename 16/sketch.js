let angle = 0;

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);

  directionalLight(95, 150, 255, 0, 0, -1);
  specularMaterial(255, 255, 0);

  rotateY(angle);

  noStroke();
  shininess(20);
  ambientLight(50);
  translate(-200, 0, 0);
  specularMaterial(255, 255, 0, 255);
  box(40, 400, 200);
  
  push()
  translate(200, -60)
  box(40, 200, 200);
  pop()
  
  translate(100, -100, 0);
  rotateZ(-PI / 2);
  
  box(40, 200, 200);
  translate(0, 200, 0);
  rotateZ(PI);
  
  box(40, 200, 200);
  translate(-100, -100, 0);
  rotateZ(PI / 2);
  
  push()
  translate(0,-200, 0)
  box(40, 400, 200);
  pop()
  
  
  // rotate speed
  angle += 0.03;
}