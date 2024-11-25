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
var shapeColors = [];

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

  //background details
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

  //randomize shape directions  
  if (Math.random() > 0.5) shapeX1Speeds[i] *= -1;
  if (Math.random() > 0.5) shapeX2Speeds[i] *= -1;
  if (Math.random() > 0.5) shapeX3Speeds[i] *= -1;
  if (Math.random() > 0.5) shapeY1Speeds[i] *= -1;
  if (Math.random() > 0.5) shapeY2Speeds[i] *= -1;
  if (Math.random() > 0.5) shapeY3Speeds[i] *= -1;
  
  //randomize shapes with arrays
  shapeX1s[i] = getRandomNumber(500);
  shapeX2s[i] = getRandomNumber(600);
  shapeX3s[i] = getRandomNumber(700);
  shapeY1s[i] = getRandomNumber(500);
  shapeY2s[i] = getRandomNumber(600);
  shapeY3s[i] = getRandomNumber(700);
  diameters[i] = getRandomNumber(30);

  //randomize colors
  shapeColors[i] = color(getRandomNumber(255), getRandomNumber(255), getRandomNumber(255));

  }
}

function draw() {

  // Background and border details
  background(220, 200, 300);
  stroke(0);
  fill(0);

  // Spawn borders
  createBorders(10);

  // Spawn character with movement
  drawCharacter();
  characterMovement();

  // Potential enemy
  fill(13, 145, 14);

  // Move and draw shapes
  for (var i = 0; i < shapeX1s.length; i++) {

    fill(shapeColors[i]);

  // First set of shapes 
    shapeX1s[i] += shapeX1Speeds[i];
    shapeY1s[i] += shapeY1Speeds[i];

    if (shapeX1s[i] > width) {
      shapeX1s[i] = 0; 
    } else if (shapeX1s[i] < 0) {
      shapeX1s[i] = width; 
    }

    if (shapeY1s[i] > height) {
      shapeY1s[i] = 0; 
    } else if (shapeY1s[i] < 0) {
      shapeY1s[i] = height; 
    }

    circle(shapeX1s[i], shapeY1s[i], diameters[i]);

  //second set of shapes
    shapeX2s[i] += shapeX2Speeds[i];
    shapeY2s[i] += shapeY2Speeds[i];

    if (shapeX2s[i] > width) {
      shapeX2s[i] = 0;
    } else if (shapeX2s[i] < 0) {
      shapeX2s[i] = width;
    }

    if (shapeY2s[i] > height) {
      shapeY2s[i] = 0;
    } else if (shapeY2s[i] < 0) {
      shapeY2s[i] = height;
    }

    circle(shapeX2s[i], shapeY2s[i], diameters[i]);

  //third set of shapes
    shapeX3s[i] += shapeX3Speeds[i];
    shapeY3s[i] += shapeY3Speeds[i];

    if (shapeX3s[i] > width) {
      shapeX3s[i] = 0;
    } else if (shapeX3s[i] < 0) {
      shapeX3s[i] = width;
    }

    if (shapeY3s[i] > height) {
      shapeY3s[i] = 0;
    } else if (shapeY3s[i] < 0) {
      shapeY3s[i] = height;
    }

    circle(shapeX3s[i], shapeY3s[i], diameters[i]);
  }

  // Spawn shape if mouse clicked
  fill(120, 130, 140);
  circle(mouseShapeX, mouseShapeY, 20);

  // Check if character reached the exit
  if (characterX > width && characterY > width - 50) {
    fill(0);
    stroke(10);
    textSize(30);
    text("You Win!", width / 2 - 50, height / 2 - 50);
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