let angle = 0;

function setup(){
    createCanvas(1000, 1000);
    angleMode(RADIANS); 
}

function draw(){
    background(30,40,60);
    noStroke(); 
    frameRate(12);
    
    push()
    fill(30,30,40)
    rect(0, 750, 1000, 1000);
    pop()


    push()
    translate(width/2, height/2);
    fill(240, 99, 164);
    rectMode(CENTER);
    rotate(mouseX);
    square(0, 0, 130);
    pop()

    angle += 0.02;

    rect(360, 400, 80, 400);
    fill(240, 99, 164);
    noStroke();
  
    rect(560, 400, 80, 400);
    fill(240, 99, 164);
  
    rect(360, 400, 270, 80);
    fill(240, 99, 164);
  
    push()
    translate(500,340,100,100);
    fill(30,40.50,60);
    rectMode(CENTER);
    rotate(mouseX);
    square(0, 0, 120);
    pop()
  
}