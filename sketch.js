var bgsprite,ladybug;



function preload(){
  bg =loadImage("imagefolder/bg2.jpg");
  bugImg =loadAnimation("imagefolder/image1.png","imagefolder/image2.png");
}




function setup() {
  createCanvas(800,400);
  bgsprite= createSprite(200, 200, 200, 200);
  bgsprite.addImage(bg);
  bgsprite.velocityY=-2;
  ladybug=createSprite(400,200,40,200);
  ladybug.addAnimation("running",bugImg)
}

function draw() {
  background(255,255,255);  
  if(bgsprite.y<50){
  bgsprite.y=100;
  }
  if(keyDown("RIGHT_ARROW")){
    ladybug.x=ladybug.x+2
  }
  if(keyDown("LEFT_ARROW")){
    ladybug.x=ladybug.x-2
  }
  drawSprites();
}