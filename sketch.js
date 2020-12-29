var move,fix
function setup() {
  createCanvas(800,800);
  move = createSprite(200,200,100,100);
  move.shapeColor = "orange";
  fix = createSprite(200,400,100,100);
  fix.shapeColor = "cyan";
  move.velocityY = -5;
  fix.velocityY = +5;
}

function draw() {
  background("gray");  

 bounceOff(move,fix);
 
  drawSprites();
}
