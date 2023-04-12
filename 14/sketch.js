let cam;

function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(200);
    normalMaterial();
}

function draw(){
  
    translate(100,20,30);
    orbitControl();
    rotateY(0.0);
  
    push()
    translate(-280, 0, 50);
    rotateX(2.5)
    rotateY(1)
    rotateZ(50)
    box(50, 400, 50);
    pop()
    
    push()
    translate(-200, -100, 100);
    rotateZ(10);
    rotateX(-4);
    rotateY(110.4);
    box(180, 60, 30);
    pop()
    
    push()
    translate(-80, -90, 50);
    rotateY(50)
    rotateX(100)
    rotateZ(75)
    box(290, 40, 60);
    pop()
  
    push()
    translate(-50, 0, -100);
    rotateY(52)
    rotateX(97.3)
    rotateZ(68)
    box(450, 50, 60);
    pop()
    
}