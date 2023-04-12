let angle = 0;

function setup(){
    createCanvas(1000, 1000);
    background(0);
}

function draw(){
    background(0, 0, 0, 20);

    let h = map(sin(angle), -1, 1, 0, 140);
    fill(255);
    noStroke();
    circle(300, 300, h);
    circle(350, 350, h);
    circle(400, 400, h);
    circle(450, 450, h);
    circle(500, 500, h);
    circle(550, 450, h);
    circle(600, 400, h);
    circle(650, 350, h);
    circle(700, 300, h);
    circle(300, 350, h);
    circle(300, 400, h);
    circle(300, 450, h);
    circle(300, 500, h);
    circle(300, 550, h);
    circle(300, 600, h);
    circle(300, 650, h);
    circle(300, 700, h);
    circle(300, 750, h);
    circle(700, 350, h);
    circle(700, 400, h);
    circle(700, 450, h);
    circle(700, 500, h);
    circle(700, 550, h);
    circle(700, 600, h);
    circle(700, 650, h);
    circle(700, 700, h);
    circle(700, 750, h);

    angle += 0.1;


//    breathe = breathe + random(1, 5);
//    if (breathe >= 300){
//        breathe = breathe - random(1, 5);
//    }

}