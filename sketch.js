var fixedRect, movingRect;
var ayy, yeet, golasol,wassupgamerz;
var music;

function preload() {
    music=loadSound("music.mp3");
}
function setup() {
  createCanvas(1200, 800);
  fixedRect = createSprite(100,30,80,80);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(Math.round(random(1,1000)),Math.round(random(1,500)),80,80);
  movingRect.shapeColor = "green";
  movingRect.velocityX=-4;
  movingRect.velocityY=-4;
 
  
  ayy=createSprite(280,30,80,80);
  ayy.shapeColor="lime";
  yeet=createSprite(190, 30, 80, 80);
  yeet.shapeColor="yellow";
  

  
    
       
   
  

  golasol=createSprite(30,30,80,80 );
  golasol.shapeColor="cyan";
}

function draw() {

  background(0, 0, 0);

 
if (movingRect.y<30) {
  movingRect.y=10;
}

  if(wassupgamerz(yeet, golasol)) {
    yeet.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if (golasol.isTouching(movingRect)&& movingRect.bounceOff(golasol)) {
    movingRect.shapeColor="orange";
  }
  if (yeet.isTouching(movingRect)&& movingRect.bounceOff(yeet)) {
    movingRect.shapeColor="yellow";
    movingRect.velocityX=0;
    movingRect.velocityY=0;
  }
  
  if (fixedRect.isTouching(movingRect)&& movingRect.bounceOff(fixedRect)) {
    movingRect.shapeColor="blue";
  }

  if (ayy.isTouching(movingRect)&& movingRect.bounceOff(ayy)) {
    movingRect.shapeColor="gold";
  }

  
  drawSprites();
}

