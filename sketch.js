var fixedRect, movingRect,gameobject1;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(400, 500, 30, 80);
  gameobject1.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobject1.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  
  bounceOff(movingRect,gameobject1);
  bounceOff(fixedRect,gameobject1);
  isTouching(movingRect,gameobject1);
  
  drawSprites();
}
