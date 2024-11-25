//character location
var characterX = 100;
var characterY = 100;

//define keys
var w = 87;
var s = 83;
var a = 65;
var d = 68;

//shape locations and speed
var shapeX = 300;
var shapeY = 150;

//arrays
var shapeXs = [];
var shapeYs = [];
var diameters = [];

//shape speed arrays
var shapeXSpeeds = [];
var shapeYSpeeds = [];


//create shape when mouse clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(500, 600);
  
  for (var i = 0; i < 50; i++) {
  //randomize shape speed with arrays
  shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  
  //randomize shapes with arrays
  shapeXs[i] = getRandomNumber(500);
  shapeYs[i] = getRandomNumber(600);
  diameters[i] = getRandomNumber(30);
  }

  createCharacter(100,50); 
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

  //draw the shapes
  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

  //move the shape
  shapeXs[i] +=shapeXSpeeds[i];
  shapeYs[i] += shapeYSpeeds[i];
  
  //check if shape has gone out of bounds
  if (shapeXs[i] > width) {
    shapeXs[i] = 0;
  }
  if (shapeXs[i] < 0) {
    shapeXs[i] = width;
  }
  if (shapeYs[i] > height) {
    shapeYs[i] = 0;
  }
  if (shapeYs[i] < 0) {
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