let cam;

function setup(){
    createCanvas(1000, 1000, WEBGL);
    background(0);
    camera = createCamera();
}

function draw(){
    camera.setPosition((mouseX - width/2)*0.1, (mouseY - height/2)*0.1, 1000);

    push()
    translate(-300, 0, 50)
    box(50, 500, 50)
    pop()

    push()
    translate(-150, 0, -50);
    rotateZ(-500)
    box(50, 500, 150)
    pop()
    
    push()
    rotateX(600)
    rotateY(150)
    rotate(40)
    translate(0, 0, 0);
    box(50, 500, 100)
    pop()
  
    push()
    rotateX(100,200,400)
    translate(160, 0, 30)
    box(50, 500, 50)
    pop()
}
