
//character location
var characterX = 100;
var characterY = 100;

//define keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape locations and speed
var shapeX1 = 300;
var shapeX2 = 150;
var shapeX3 = 300;
var shapeY1 = 150;
var shapeY2 = 300;
var shapeY3 = 150;

//arrays
var shapeX1s = [];
var shapeX2s = [];
var shapeX3s = [];
var shapeY1s = [];
var shapeY2s = [];
var shapeY3s = [];
var diameters = [];

//shape speed arrays
var shapeX1Speeds = [];
var shapeX2Speeds = [];
var shapeX3Speeds = [];
var shapeY1Speeds = [];
var shapeY2Speeds = [];
var shapeY3Speeds = [];

//create shape when mouse clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(400, 400);
  createCharacter(100,50); 
  
  for (var i = 0; i < 50; i++) {
  //randomize shape speed with arrays
  shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeX2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeX3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY3Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  
  //randomize shapes with arrays
  shapeX1s[i] = getRandomNumber(500);
  shapeX2s[i] = getRandomNumber(600);
  shapeX3s[i] = getRandomNumber(700);
  shapeY1s[i] = getRandomNumber(500);
  shapeY2s[i] = getRandomNumber(600);
  shapeY3s[i] = getRandomNumber(700);
  diameters[i] = getRandomNumber(30);
  }
}

function draw() {
  //background detail
  background(220,200,300);
  stroke(0);
  fill(0);
  
  //spawn borders
  createBorders(10);
  
  //spawn character w/movement
  drawCharacter();
  characterMovement();

  //potential enemy
  fill(13, 145, 14);

  //draw the shapes
  for (var i = 0; i < shapeX1s.length; i++) {
    circle(shapeX1s [i], shapeY1s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }
  for (var i = 0; i < shapeX2s.length; i++) {
    circle(shapeX2s [i], shapeY1s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }
  for (var i = 0; i < shapeX3s.length; i++) {
    circle(shapeX3s [i], shapeY1s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }
  for (var i = 0; i < shapeY1s.length; i++) {
    circle(shapeX1s [i], shapeY2s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }
  for (var i = 0; i < shapeY2s.length; i++) {
    circle(shapeX2s [i], shapeY2s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  }
  for (var i = 0; i < shapeY3s.length; i++) {
    circle(shapeX3s [i], shapeY2s [i], diameters [i]);
    shapeX1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  } 

  // move the shape
  shapeXs[i] += shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
  // check to see if the shape has gone out of bounds
  if (shapeX1s[i] > width) {
        shapeX1s[i] = 0;
  }
  if (shapeX1s[i] < 0) {
        shapeX1s[i] = width;
  }
    if (shapeY1s[i] > height) {
        shapeY1s[i] = 0;
  }
  if (shapeY1s[i] < 0) {
        shapeY1s[i] = height;
  }
  if (shapeX2s[i] > width) {
    shapeX2s[i] = 0;
  }
  if (shapeX2s[i] < 0) {
    shapeX2s[i] = width;
  }
  if (shapeY2s[i] > height) {
    shapeY2s[i] = 0;
  }
  if (shapeY2s[i] < 0) {
    shapeY2s[i] = height;
  }
  if (shapeX3s[i] > width) {
    shapeX3s[i] = 0;
  }
  if (shapeX3s[i] < 0) {
    shapeXs[i] = width;
  }
  if (shapeY3s[i] > height) {
    shapeYs[i] = 0;
  }
  if (shapeY3s[i] < 0) {
    shapeYs[i] = height;
  }
}
  
  //spawn shape if mouse clicked
  fill(120,130,140);
  circle(mouseShapeX, mouseShapeY, 20);
  
  //check if character reached the exit
  if(characterX > width && characterY > width-50)
    {
      fill(0);
      stroke(10);
      textSize(30);
      text("You Win!", width/2-50, height/2 -50);
    }
}
  
//functions
function createCharacter(x, y)
{
  characterX = x;
  characterY = y
  console.log(characterX);
}
  
function drawCharacter()
  { 
    fill(25,40,100)
    circle(characterX, characterY, 30)
  }  

function characterMovement()
{  
  if(keyIsDown(w))
    {
      characterY -= 10;
    }
  if(keyIsDown(s))
    {
      characterY += 10;
    }
  if(keyIsDown(a))
    {
      characterX -= 10;
    }
  if(keyIsDown(d))
    {
      characterX += 10; 
    }
}

function mouseClicked ()
{
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
  
function createBorders(thickness)
{
  rect(0,0, width,thickness);
  rect(0,0, thickness, height);
  rect(0, height-thickness, width, thickness);
  rect(width-thickness,0,thickness, height -50);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}