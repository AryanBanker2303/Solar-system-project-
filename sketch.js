var sun, sunImage;

function preload(){

sunImage = loadImage(sunImage.png);


}

function setup(){
  createCanvas(600,600);
  sun = createSprite(200,200,200,200);
  sun = setAnimation("sunImage.png",sunImage.png);
}
function draw(){

background(1,101,1);


drawSprites();
}