var Rectangle,FixedRectangle;

function setup() {
  createCanvas(800,400);
  Rectangle = createSprite(400, 200, 50, 50);
  Rectangle.shapeColor = "white";

  FixedRectangle = createSprite(420,200,100,100)
  FixedRectangle.shapeColor = "white";
}

function draw() {
  background("black");
  
if(Rectangle.x - FixedRectangle.x < Rectangle.width/2 + FixedRectangle.width/ 2 &&
   FixedRectangle.x - Rectangle.x < Rectangle.width/2 + FixedRectangle.width/2 &&
  Rectangle.y - FixedRectangle.y < Rectangle.height/2 + FixedRectangle.height/ 2
  && FixedRectangle.y - Rectangle.y < Rectangle.height/2 + FixedRectangle.height/ 2
  ){
  FixedRectangle.shapeColor = "Yellow";
  Rectangle.shapeColor = "Yellow";
}
else{
  Rectangle.shapeColor = "white";
  FixedRectangle.shapeColor = "white";

}

  Rectangle.x = mouseX;
  Rectangle.y = mouseY;
  drawSprites();
}