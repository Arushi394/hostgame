var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage,ground
var FoodGroup, obstaclesGroup
var score

function preload(){
monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")    
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 }
function setup() {
    createCanvas(600,600);
  
  monkey = createSprite(50,160,20,50);
  monkey.addAnimation("running", monkey_running);

  monkey.scale = 0.2;
  
  ground = createSprite(200,350,1200,20);
  FoodGroup=new Group()
  obstaclesGroup=new Group()
    }
function draw() {
background("white")
  ground.velocityX=-3
  
  if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
monkey.velocityY = monkey.velocityY + 0.8
if (ground.x < 0){
      ground.x = ground.width/2;
    }
  monkey.collide(ground);

spawnObstacles()
spawnFood()
  
drawSprites();

}
function spawnObstacles() {
if(frameCount % 300 === 0) {
obstacle = createSprite(800,320,10,40);
obstacle.velocityX = -6;
obstacle.addImage(obstacleImage);
obstacle.scale=0.15;
obstacle.lifetime = 300;
obstaclesGroup.add(obstacle);
}
}
function spawnFood(){
if(frameCount % 80 === 0){
banana = createSprite(600,250,40,10);
banana.y = random(120,200);
banana.velocityX = -5;
banana.lifetime = 300;
monkey.depth = banana.depth + 1;
banana.addImage(bananaImage);
banana.scale=0.05;
FoodGroup.add(banana);
}
}