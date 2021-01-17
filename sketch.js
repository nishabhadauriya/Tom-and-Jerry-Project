var tom ,tom1,tom2,tom3;
var bg,bgImage;
var j,jImg,j2;
var j4;

function preload() 
{
    tom1=loadImage("tomOne.png");
    //load the images here
    bgImage=loadImage("garden.png");
    jImg=loadImage("jerryOne.png");
    tom2=loadAnimation("tomTwo.png","tomThree.png");
    j2=loadAnimation("jerryTwo.png","jerryThree.png");
    tom3=loadImage("tomFour.png");
    j4=loadImage("jerryFour.png");
}

function setup()
{
  createCanvas(800,600);
  //create tom and jerry sprites here
    
  bg=createSprite(420,300,400,400)
  bg.addImage("farm",bgImage)
  bg.scale=1;

  tom=createSprite(600,500,5,5);
  tom.addImage("running",tom1);
  tom.scale=0.03;
  tom.setCollider("circle",0,0,10)
  tom.debug=true;

  j=createSprite(200,500,20,20);
  j.addImage("jerry",jImg);
  j.scale=0.03;
 
  j.setCollider("circle",0,0,10)
  j.debug=true;
}

function draw() {
  background("red ");
  drawSprites();
  fill("black");
  textSize(20);
  text(mouseX+','+mouseY,100,105);
    
//Write condition here to evalute if tom and jerry collide
if(tom.x-j.x<j.width/2+tom.width/2
  &&j.x-tom.x<j.width/2+tom.width/2)
  {
    tom.velocityX=0;
    tom.addAnimation("catLastImage",tom3);
    tom.changeAnimation("catLastImage");
  }   
}
 
function keyPressed()
{
//For moving and changing animation write code here
if(keyCode===LEFT_ARROW)
  {
  j.addAnimation("runningjerry",j2);
  j.changeAnimation("runningjerry");
  tom.velocityX=-3;
  tom.addAnimation("runningtom",tom2);
  tom.changeAnimation("runningtom");
  }
}
