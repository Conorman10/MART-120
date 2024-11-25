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
var shapeY1 = 300;
var shapeY2 = 150;
var shapeZ1 = 300;
var shapeZ2 = 150;

//arrays
var shapeX1s = [];
var shapeX2s = [];
var shapeY1s = [];
var shapeY2s = [];
var shapeZ1s = [];
var shapeZ2s = [];
var diameters = [];

//shape speed arrays
var shapeX1Speeds = [];
var shapeX2Speeds = [];
var shapeY1Speeds = [];
var shapeY2Speeds = [];
var shapeZ1Speeds = [];
var shapeZ2Speeds = [];

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
  shapeY1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeZ1Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeZ2Speeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  
  //randomize shapes with arrays
  shapeX1s[i] = getRandomNumber(500);
  shapeX2s[i] = getRandomNumber(600);
  shapeY1s[i] = getRandomNumber(500);
  shapeY2s[i] = getRandomNumber(600);
  shapeZ1s[i] = getRandomNumber(500);
  shapeZ2s[i] = getRandomNumber(600);
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
  
  //shapes
  fill(3, 150,3);
  circle(shapeX, shapeY1, 10);
  fill(200, 50, 70);
  circle(shapeX, shapeY2, 20);
  
  //shape speeds
  shapeX +=shapeXSpeed;
  shapeY1 +=shapeY1Speed;
  shapeY2 +=shapeY2Speed;
  
  //respawn shapes if they leave the screen
  if(shapeX1 > width)
    {
      shapeX1 = 0;
    }
  if(shapeX1 < 0)
    {
      shapeX1 = width;
    }
  if(shapeX2 > width)
    {
      shapeX2 = 0;
    }
  if(shapeX2 < 0)
    {
      shapeX2 = width;
    }  
  if(shapeY1 > height)
    {
      shapeY1 = 0;
    }
  if(shapeY1 < 0)
    {
      shapeY1 = height;
    } 
  if(shapeY2 > height)
    {
      shapeY2 = 0;
    }
  if(shapeY2 < 0)
    {
      shapeY2 = height;
    }
  if(shapeZ1 > height)
    {
      shapeZ1 = 0;
    }
  if(shapeZ1 < 0)
    {
      shapeY1 = height;
    } 
  if(shapeZ2 > height)
    {
      shapeY2 = 0;
    }
  if(shapeZ2 < 0)
    {
      shapeY2 = height;
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