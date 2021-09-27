var msa,ms;
var c
var sea,ship
function preload(){
  msa = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  c = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,400,400);
  sea.addImage("sea",c);
  sea.x = sea.width /2;
  sea.velocityX = -4;

  ship = createSprite(200,250,50,50);
  ship.addAnimation("ship",msa);
  ship.scale = 0.3
}

function draw() {
  background("blue");
  
  if (sea.x < 0){
    sea.x = sea.width/2;
  }
 
  drawSprites();
 
}