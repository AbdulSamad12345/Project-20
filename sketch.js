
var cat, catImg, catMove, catHappy;
var mouse, mouseImg, mouseTease,mouseHappy;
var garden,gardenImg;


function preload() {
    
catImg=loadImage("cat1.png");
catMove=loadAnimation("cat2.png","cat3.png");
mouseImg=loadImage("mouse4.png");
mouseTease=loadAnimation("mouse2.png","mouse3.png");
gardenImg=loadImage("garden.png");
catHappy=loadAnimation("cat4.png");
mouseHappy=loadAnimation("mouse1.png");

}

function setup(){
    createCanvas(1000,800);
    
    garden=createSprite(500,400,20,20);
    garden.addImage(gardenImg);
    
    cat=createSprite(880,700,20,20);
    cat.addImage(catImg);
    cat.addAnimation("move",catMove);
    cat.addAnimation("happyC",catHappy);
    cat.scale=0.2;

    mouse=createSprite(220,700,20,20);
    mouse.addImage(mouseImg);
    mouse.addAnimation("tease",mouseTease);
    mouse.addAnimation("happyM",mouseHappy);
    mouse.scale=0.2;

}

function draw() {

    background("black");
    
  if(keyCode===LEFT_ARROW){
      cat.x=cat.x-20;
      cat.changeAnimation("move",catMove);
      mouse.changeAnimation("tease",mouseTease);
  }

  if(cat.x<250){
      cat.velocityX=0;
      cat.x=150;
      cat.changeAnimation("happyC",catHappy);
      mouse.changeAnimation("happyM",mouseHappy);
  }

    drawSprites();
}


