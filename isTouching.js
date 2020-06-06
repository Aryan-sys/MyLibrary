var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
}

function draw() {
  background(0);  
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  
  
  drawSprites();
}

function isTouching(object1,object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 && 
    object2.x - object1.x < object2.width/2 + object1.width/2 && 
    object1.y - object2.y < object2.height/2 + object1.height/2 && 
    object2.y - object1.y < object2.height/2 + object1.height/2){
    return true;
  }
  else{
    return false;
  }
}