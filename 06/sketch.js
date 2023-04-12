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
    vertex(300, 900);
    vertex(300, 300);
    vertex(mouseX, mouseY);
    vertex(900, 300);
    vertex(900, 900);
    endShape();

    beginShape();
    vertex(250, 850);
    vertex(250, 250);
    vertex(mouseX, mouseY);
    vertex(850, 250);
    vertex(850, 850);
    endShape();

    beginShape();
    vertex(200, 800);
    vertex(200, 200);
    vertex(mouseX, mouseY);
    vertex(800, 200);
    vertex(800, 800);
    endShape();

    beginShape();
    vertex(150, 750);
    vertex(150, 150);
    vertex(mouseX, mouseY);
    vertex(750, 150);
    vertex(750, 750);
    endShape();

    beginShape();
    vertex(100, 700);
    vertex(100, 100);
    vertex(mouseX, mouseY);
    vertex(700, 100);
    vertex(700, 700);
    endShape();

    beginShape();
    vertex(50, 650);
    vertex(50, 50);
    vertex(mouseX, mouseY);
    vertex(650, 50);
    vertex(650, 650);
    endShape();
}