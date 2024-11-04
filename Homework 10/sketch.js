//background color
var redColor = 190;
var greenColor = 50;
var blueColor = 20;

//head variables
var headX = 200;
var headY = 60;
var headDiameter1 = 100;
var headDiameter2 = 80;
var headDirection = 1;

//eye variables
var eye1X = 190;
var eye1Y = 60;
var eye2X = 214;
var eye2Y = 60;
var eyeMovement = Math.floor(Math.random() * 10) +1;

//eyebrow variables
var eyebrow1X = 170;
var eyebrow1Y = 40;
var eyebrow2X = 208;
var eyebrow2Y = 40;
var eyebrowMovement = 3;

//bicep variables
var bicepY = 150;
var bicepMovement = Math.floor(Math.random() * 10) +1;

//text variables
var size = 50;
var count = 0;
var sizeDirection = 1;

function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    //background
    background(redColor,greenColor,blueColor);
    redColor++;
    blueColor++;
    
    //title
    textSize(15);
    fill(0);
    text("By Conor Manley", 280, 390);
    textSize(size);
    text("BUFF VAMP",60,360);
    size+= sizeDirection;
    count++;
    if(count > 5 || count < 0)
      {
        sizeDirection *=-1
        count = 0
      }
    
    //head
    fill(255, 204);
    ellipse (headX,headY,headDiameter1,headDiameter2);
    headDiameter1+=headDirection;
    headDiameter2+=headDirection;
    if(headDiameter1 >=120 || headDiameter1 <=80)
      {
        headDirection *= -1;
      }
    
    //eyebrows
    fill(20);
    rect (eyebrow1X,eyebrow1Y,25,10);
    rect (eyebrow2X,eyebrow2Y,25,10);
    eyebrow1X+=eyebrowMovement;
    eyebrow2X-=eyebrowMovement;
    eyebrow1Y+=eyebrowMovement;
    eyebrow2Y+=eyebrowMovement;
    if(eyebrow1X <=160 || eyebrow1X >=300)
      {
        eyebrowMovement *= -1
      }
    
    //eyes
    strokeWeight(2);
    point (eye1X,eye1Y);
    point (eye2X, eye2Y);
    eye1X+=eyeMovement;
    if(eye1X >=202 || eye1X <=178)
      {
        eyeMovement *= -1
      }
    eye2X-=eyeMovement;
    
    //mouth
    line(170, 70, 230, 70);
    
    //teeth
    fill(600);
    triangle (175,70,187,90,200,70);
    triangle (200,70, 213, 90, 225, 70);
    
    //bodylegs
    line (200,100,200,220);
    line (200,220,150,300);
    line (200,220, 250,300);
    
    //biceps
    ellipse (130,bicepY,100,40);
    ellipse (270,bicepY,100,40);
    bicepY+=bicepMovement;
    if(bicepY >= 300 || bicepY <=20)
      {
        bicepMovement *= -1
      }
    
    //arms
    line (200,150,180,150);
    line (200,150,220,150);
    line (80,150,100,80);
    line (320, 150, 300, 80);
    
    //feet
    triangle (120,300,163,280,160,300)
    triangle (280,300,237,280,240,300)
    
  }