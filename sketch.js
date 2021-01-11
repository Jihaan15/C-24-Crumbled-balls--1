var movingRectangle,fixedRectangle 
var gameObject
function setup() {

  createCanvas(800,400);
  movingRectangle=createSprite(100,200,50,50);
  movingRectangle.shapeColor="green";

  fixedRectangle=createSprite(300,200,50,50);
  fixedRectangle.shapeColor="green";


  gameObject=createSprite(200,200,50,50);
 gameObject.shapeColor="orange";
}

function draw() {
  background(255,255,255); 
  movingRectangle.x=World.mouseX; 
  movingRectangle.y=World.mouseY;

  if(isTouching(movingRectangle,gameObject)){
    movingRectangle.shapeColor="red";
    gameObject.shapeColor="red";

  }else{
    movingRectangle.shapeColor="green";
gameObject.shapeColor="orange";

  }


  drawSprites();
}
