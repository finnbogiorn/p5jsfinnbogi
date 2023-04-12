let x1 = 0;
let y1 = 0;

let x2 = -150;
let y2 = -150;

let x3 = 1200;
let y3;

let click = 0;

function setup(){
    createCanvas(1000, 1000);
    background(17, 1, 63);
}

function draw(){
    background(17, 1, 63);
    
    fill(35, 216, 89);
    noStroke();
    rect(150, y1, 100, 600, 200)

    fill(255, 255, 79)
    triangle(x2, y2, 200+y2, 300+x2, 400+y2, 100+x2)

    fill(255, 124, 196);
    rect(x3, 150, 100, 600, 300, 300)

    if (click === 0){
        y1=y1+20;
        if (y1 > 1000){
            y1 = -800;
        }
    }

    if (click === 1){
        x2 = x2 + 10;
        y2 = y2 + 10;
        if (x2 > 1200){
            x2 = - 150;
        }
        if (y2 > 1200){
            y2 = - 150;
        }
    }

    if (click === 2){
        x3 = x3 -20;
        if (x3 < -200){
            x3 = 1500;
        }
    }
}

function mousePressed(){
    if (mousePressed){
        click = click + 1;
    }
}