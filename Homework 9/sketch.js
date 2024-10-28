function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    textSize(15);
    fill(0);
    text("By Conor Manley", 280, 390);
    textSize(50);
    text("BUFF VAMP",60,360);
    
    fill(255, 204);
    ellipse (200,60,100,80);
    
    fill(20);
    rect (170,40,25,10);
    rect (208,40,25,10);
    
    strokeWeight(2);
    point (190,60);
    point (214, 60);
    
    line(170, 70, 230, 70);
    
    fill(600);
    triangle (175,70,187,90,200,70);
    triangle (200,70, 213, 90, 225, 70);
    
    line (200,100,200,220);
    line (200,220,150,300);
    line (200,220, 250,300);
    
    ellipse (130,150,100,40);
    ellipse (270,150,100,40);
    
    line (200,150,180,150);
    line (200,150,220,150);
    line (80,150,100,80);
    line (320, 150, 300, 80);
    
    triangle (120,300,163,280,160,300)
    triangle (280,300,237,280,240,300)
    
  }