var characterX = 100;
var characterY = 100;

var w = 87; 

var shapeXs = [];
var shapeYs = [];
var diameters = [];
var shapeXSpeeds = [];
var shapeYSpeeds = [];

var mouseShapeX = 100; 
var mouseShapeY = 100;

function setup() {
  createCanvas(500, 600);

  for (var i = 0; i < 50; i++) {
    shapeXSpeeds[i] = Math.floor(Math.random() * 5) + 1;
    shapeYSpeeds[i] = Math.floor(Math.random() * 5) + 1;

    shapeXs[i] = getRandomNumber(500);
    shapeYs[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(30);
  }

  createCharacter(100, 50);
}

function draw() {
  background(220, 200, 255);

  createBorders(10);

  drawCharacter();
  characterMovement();

  for (var i = 0; i < shapeXs.length; i++) {
    circle(shapeXs[i], shapeYs[i], diameters[i]);

    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    if (shapeXs[i] > width) shapeXs[i] = 0;
    if (shapeXs[i] < 0) shapeXs[i] = width;
    if (shapeYs[i] > height) shapeYs[i] = 0;
    if (shapeYs[i] < 0) shapeYs[i] = height;
  }

  fill(120, 130, 140);
  circle(mouseShapeX, mouseShapeY, 20);

  if (characterX > width - 50 && characterY > height - 50) {
    fill(0);
    stroke(10);
    textSize(30);
    text("You Win!", width / 2 - 50, height / 2 - 50);
  }
}

function createCharacter(x, y) {
  characterX = x;
  characterY = y;
}

function drawCharacter() {
  fill(25, 40, 100);
  circle(characterX, characterY, 30);
}

function characterMovement() {
  if (keyIsDown(w)) characterY -= 10;
  if (keyIsDown(s)) characterY += 10;
  if (keyIsDown(a)) characterX -= 10;
  if (keyIsDown(d)) characterX += 10;
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}

function createBorders(thickness) {
  rect(0, 0, width, thickness);
  rect(0, 0, thickness, height);
  rect(0, height - thickness, width, thickness);
  rect(width - thickness, 0, thickness, height - 50);
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}