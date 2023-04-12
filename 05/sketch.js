function setup(){
    createCanvas(1000, 1000);
    background(0);
}

function draw(){
    background(0, 0, 0, 50)
    noFill();
    stroke(255);
    strokeWeight(30);

    beginShape();
    vertex(200, 800);
    vertex(200, 200);
    vertex(mouseX, mouseY);
    vertex(800, 200);
    vertex(800, 800);
    endShape();
}