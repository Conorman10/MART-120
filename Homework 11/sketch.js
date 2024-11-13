var characterX = 100;
var characterY = 100;
var w = 87;
var s = 83;
var a = 65;
var d = 68;



function setup() {
  createCanvas(400, 400);
  createCharacter(100,50);
}

function draw() {
  background(40,100,300);
  stroke(0);
  fill(0);
  
  drawCharacter();
  characterMovement();
}
  
function createCharacter(x, y)
{
  characterX = x;
  characterY = y
  console.log(characterX);
}
  
function drawCharacter()
  { 
    fill(25,40,100)
    circle(characterX, characterY, 20)
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