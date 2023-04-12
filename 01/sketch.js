function setup() {
    createCanvas(1000, 1000);
    background(157, 150, 197);
  }
  
  function draw() {
    fill(162, 19, 217);
    noStroke();
    
    rect(160, 80 + sin(frameCount * 0.05) * 50, 40, 400);
    rect(100, 50 + sin(frameCount * 0.04) * 70, 40, 700);
    rect(220, 50 + sin(frameCount * 0.06) * 30, 40, 700);
  }