var fixedRect, movingRect;
var gameObject1;
var anotherObject;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameObject1 = createSprite(400, 600,80,30);
  gameObject1.shapeColor = "yellow";
  gameObject1.debug = true;
anotherObject = createSprite(400,200,60,30);
anotherObject.shapeColor = "pink";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
gameObject1.velocityY = -10;

}

function draw() {
  background(0,0,0); 
   if(isTouching(movingRect,anotherObject)){
movingRect.shapeColor = "red";
anotherObject.shapeColor = "white";
   }
   else{
       movingRect.shapeColor = "green";
       anotherObject.shapeColor = "pink";
   }
bounceOff(gameObject1,fixedRect);
 
  drawSprites();
}
