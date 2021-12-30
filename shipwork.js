var sea,ship;
var seaImg,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg1=loadAnimation("sea.png")

  shipImg1 = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
  

}

function setup(){
  createCanvas(2000,1000);
  background("blue");


  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.scale=1;
 sea.velocityX = -3;
  
  ship = createSprite(130,275,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  
if(sea.x<0){
  sea.x=sea.width/2
 
}
 
if(keyDown("left")){
ship.velocityX=-2
}

if(keyDown("right")){
  ship.velocityX=2
  }

  
  drawSprites();
}
