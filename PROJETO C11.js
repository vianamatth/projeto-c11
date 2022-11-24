var navio,mar,mar1,navio1;
function preload(){
navio = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
mar = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar1 = createSprite(400,200,400,20)
  mar1.addImage(mar)
  mar1.scale =0.3
  navio1 = createSprite(150,200,200,200)
  navio1.addAnimation("navio", navio)
  navio1.scale= 0.3
  mar1.velocityX +=0.3
}

function draw() {
  background("blue");
  if (mar1.x < 0) {
    mar1.x = mar1.width/2;
  }
 
    drawSprites();
  
}
