var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "purple";
  movingRect = createSprite(500,200,30,80);
  movingRect.shapeColor = "blue";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "yellow";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "yellow";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "yellow";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "pink";

  gameObject3.velocityX = 2;
  gameObject4.velocityX = -2;
}
 
function draw() {
  background(255,255,255);
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if (isTouching(movingRect, gameObject1)) {
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    gameObject1.shapeColor = "purple";
    movingRect.shapeColor = "blue";
  }
  bounceOff(gameObject3, gameObject4);
  drawSprites();
}

