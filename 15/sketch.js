function setup() {
    createCanvas(1000, 1000);
  }
  
  function draw() {
    background(180);
      
      for (let i = 0; i < 10; i++) {
      push()
      let strokeWeightVal = random(1, 20);
      let strokeColorVal = color(random(255), random(255), random(255));
      strokeWeight(strokeWeightVal);
      stroke(strokeColorVal);
      let x1 = random(width);
      let y1 = random(height);
      let x2 = random(width);
      let y2 = random(height);
      let x3 = random(width);
      let y3 = random(height);
      let x4 = random(width);
      let y4 = random(height);
      let x5 = random(width);
      let y5 = random(height);
      let x6 = random(width);
      let y6 = random(height);
      line(x1, y1, x2, y2);
      line(x2, y2, x3, y3);
      line(x3, y3, x4, y4);
      line(x4, y4, x5, y5);
      line(x5, y5, x6, y6);
      pop()
      
      push()
      noStroke()
      fill(250)
      rect(300, 0, 50, 1000);
      triangle(mouseX, 200, 750, 0, 300, 00);
      rect(700, 0, 50, 1000);
      pop()
    }
  }