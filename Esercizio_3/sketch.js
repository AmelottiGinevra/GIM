function setup() {
    createCanvas(windowWidth, windowHeight); 
    angleMode(DEGREES);
    colorMode(HSB, 360, 100, 100, 1); 
  }
  
  function draw() {
    background(0);
    

    let h = hour();
    let m = minute();
    let s = second();
  

    let secPos = createVector(-150, 0);
    let minPos = createVector(0, 0);
    let hourPos = createVector(150, 0);
  

    let maxSize = 300;
    

    let secSize = map(s, 0, 60, 50, maxSize);
    fill(map(s, 0, 60, 0, 360), 100, 100, 0.5);
    noStroke();
    ellipse(secPos.x + width / 2, secPos.y + height / 2, secSize, secSize);
    

    let minSize = map(m, 0, 60, 50, maxSize);
    fill(map(m, 0, 60, 0, 360), 100, 80, 0.5); 
    ellipse(minPos.x + width / 2, minPos.y + height / 2, minSize, minSize);
    
    let hourSize = map(h, 0, 24, 50, maxSize);
    fill(map(h, 0, 24, 0, 360), 100, 60, 0.5); 
    ellipse(hourPos.x + width / 2, hourPos.y + height / 2, hourSize, hourSize);
  
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48); 
    text(nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2), width / 2, height / 2 + maxSize / 2 + 40); 
  }
  

  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  