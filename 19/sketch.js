function setup() {
    createCanvas(1000, 1000);
    background(20, 20, 20);
    noStroke();
  }
  
  function draw() {
    
    push()
    fill(255, 100, 100, 50);
    
    ellipse(random(width), random(height), random(20, 200), random(20, 200));
    fill(100, 255, 100, 50);
    square(random(width), random(height), random(20, 200), random(20, 200));
    fill(100, 100, 255, 50);
    square(random(width), random(height), random(20, 200), random(20, 200));
  
    stroke(255, 255, 255, 50);
    strokeWeight(random(1, 10));
    line(random(width), random(height), random(width), random(height));
    pop()
    
    fill(200)
    rect(0,0,1000,100)
    rect(0,0, 100, 1000)
    rect(0,900, 900, 100)
    rect(900, 100, 1000, 1000)
    
    push()
    fill(200)
    triangle(500, 400, 900, 100, 100, 100);
    pop()
    
    
  }
  
  