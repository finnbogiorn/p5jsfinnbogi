function setup(){
  createCanvas(1000, 1000);
  background(0);
  rectMode(CENTER);
          }
  
  function draw(){
    noFill();
    stroke(255);
    strokeWeight(1);
    
  ellipse(250, 300, 25, 25);
  ellipse(250, 370, 25, 25);
  ellipse(250, 440, 25, 25);
  ellipse(250, 510, 25, 25);
  ellipse(250, 580, 25, 25);
  ellipse(250, 650, 25, 25);
  ellipse(250, 720, 25, 25);
  ellipse(250, 790, 25, 25);
  
  ellipse(750, 300, 25, 25);
  ellipse(750, 370, 25, 25);
  ellipse(750, 440, 25, 25);
  ellipse(750, 510, 25, 25);
  ellipse(750, 580, 25, 25);
  ellipse(750, 650, 25, 25);
  ellipse(750, 720, 25, 25);
  ellipse(750, 790, 25, 25);
  
  ellipse(650, 370, 25, 25);
  ellipse(580, 440, 25, 25);
  ellipse(420, 440, 25, 25);
  ellipse(350, 370, 25, 25);
  ellipse(500, 510, 25, 25);
    
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = color(208, 9, 29)
      
  }