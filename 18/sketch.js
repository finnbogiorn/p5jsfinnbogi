function setup(){
    createCanvas(1000, 1000);
    background(149, 199, 232);
}

function draw(){
    fillr = 0;
    fillg = 0;
    fillb = 0;

    fillr = mouseY * 0.085;
    fillg = mouseY * 0.175;
    fillb = mouseY * 0.14;
    background(149 - fillr, 199 - fillg, 232 - fillb)

    slide1 = mouseY  * 0.1;
    slide2 = mouseY * 0.2;
    slide3 = mouseY * 0.15;
    slide4 = mouseY * 0.05;
    slide5 = mouseY * 0.13;
    slide6 = mouseY * -0.1;
    slide7 = mouseY * -0.3
    slide8 = mouseY * -0.13

    spread2 = mouseY * -0.01;
    spread4 = mouseY * -0.2;
    spread6 = mouseY * -0.125;
    spread7 = mouseY * -0.1
    spread9 = mouseY * -0.08

    fill(255, 179, 92);
    noStroke();
    beginShape()
    curveVertex(500, 400 + slide1); //1
    curveVertex(500, 400 + slide1); //1
    curveVertex(630, 200 + slide3); //3
    curveVertex(750 - spread4, 230 + slide4); //4
    curveVertex(800 - spread6, 500 + slide6); //6
    curveVertex(750 - spread7, 800 + slide7); //7
    curveVertex(650, 800 + slide8); //8
    curveVertex(630 - spread9, 500); //9
    curveVertex(600, 400 + slide5); //5
    curveVertex(550 - spread2, 500 + slide2); //2
    curveVertex(450 + spread2, 500 + slide2); //2
    curveVertex(400, 400 + slide5); //5
    curveVertex(370 + spread9, 500); //9
    curveVertex(350, 800 + slide8); //8
    curveVertex(250 + spread7, 800 + slide7); //7
    curveVertex(200 + spread6, 500 + slide6); //6
    curveVertex(250 + spread4, 230 + slide4); //4
    curveVertex(370, 200 + slide3); //3
    curveVertex(500, 400 + slide1); //1
    curveVertex(500, 400 + slide1); //1
    curveVertex();
    curveVertex();
    curveVertex();
    endShape();
}