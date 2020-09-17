var bullet,wall;
var speed,weight,thickness;

function setup(){
  var canvas =createCanvas(1000,400);
  bullet=createSprite(50,100,50,20);
  wall=createSprite(900,215,thickness,height/2);
  speed=random(223,321);
  weight=random(3,52);
  thickness=random(5,30);
}

function draw(){
  background(0);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX=speed;
  
  if(hasCollided(bullet,wall)){

    bullet.velocityX=0;
    var damage =0.5* weight* speed *speed/thickness*thickness*thickness;
    if(damage>10){
      bullet.shapeColor=color(255,0,0);
    }

    if (damage<100) {
      bullet.shapeColor=color(0,255,0);
      
    }

  }

  bullet.collide(wall);
drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;

  }
 return false;

}
