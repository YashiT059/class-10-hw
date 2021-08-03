var sea,seaImg
var ship,shipImg
function preload(){
seaImg = loadImage ("sea.png")
shipImg = loadAnimation ('ship-1.png', 'ship-2.png', 'ship-3.png', 'ship-4.png')
}

function setup(){
  createCanvas(400,400);
  sea = createSprite (200,200, 1,1)
  sea.addImage ("sea", seaImg)
  ship = createSprite (200,300,1,1)
  ship.addAnimation ("ship", shipImg)
  ship.scale = 0.1
  sea.scale= 0.5
}

function draw() {
  background("blue");
 drawSprites ()
 sea.velocityX = -4
 if (sea.x < 0) {
  sea.x = sea.width/10
 }
}