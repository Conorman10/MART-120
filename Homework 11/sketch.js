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
var shapeY1 = 300;
var shapeY2 = 150;
var shapeXSpeed;
var shapeYSpeed;

//create shape when mouse clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(400, 400);
  createCharacter(100,50); 
  
  //randomize shape speed
  shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);
  shapeY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) +1);  
  
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
  if(shapeX > width)
    {
      shapeX = 0;
    }
  if(shapeX < 0)
    {
      shapeX = width;
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