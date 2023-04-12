function setup(){
    createCanvas(1000, 1000);
    background(0);
}

function draw(){
    background(0, 0, 0)
    noFill();
    stroke(255);
    strokeWeight(30);

    beginShape();
    vertex(100, random(890,900));
    vertex(300, random(880,900));
    vertex(300, random(280,300));
    vertex(450, random(430,450));
    vertex(600, random(690,700));
    vertex(750, random(430,450));
    vertex(900, random(280,300));
    vertex(900, 900);
    vertex(1000, random(880,900))
    endShape();

    noStroke();
    fill(20,200, random(100, 200));
    rect(0, 0, 1000, 100);

    noStroke();
    fill(20,200, random(100, 200));
    rect(0, 0, 100, 1000);
}