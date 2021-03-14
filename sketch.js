var pc1;
var door;
var door2;
var floor;
var ceeling;
var wall1;
var wall2;
var life = 30;
var edges;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var p1;
var bow;
var arrow;
var code;


function preload(){

}

function setup(){

  engine = Engine.create();
	world = engine.world;

  p1 = new Player(40,350,20,40);
  bow = new Bow(358,300,40,20, PI/20);
  arrow = new Arrow(358,300,40,20, PI/12);
  code = new Code()


  pc1 = createSprite(40,370,20,40);
  door = createSprite(8,370,20,120);
  door2 = createSprite(390,370,20,120);
  floor = createSprite(400,400,800,20);
  floor.shapeColor = "purple";
  ceeling = createSprite(142,3,800,20);
  wall1 = createSprite(8,30,20,560);
  wall1.shapeColor = "green"
  wall2 = createSprite(390,30,20,560);
  wall2.shapeColor = "green"

  edges = createEdgeSprites()

  pc1.bounceOff(edges[0]);
  pc1.bounceOff(edges[1]);
  pc1.bounceOff(edges[2]);
  pc1.bounceOff(edges[3]);

  needleGroup = new Group();

}

function draw() {
  background("blue");
  Engine.update(engine);
  text(20);
  stroke("red");
  text("your health = " + life, 50,36);
  
  
  if(needleGroup.isTouching(pc1)){
    life -= 1;
  }
  
  if(life === 10){
    text(20);
    stroke("red")
    text("you lost 1 life. you have " + life + "left" ,100,108);
  }

  if(pc1.isTouching(edges[2])){
    pc1.velocityX = 0;
    pc1.velocityY = 0;
  }
  
  if(keyDown("RIGHT_ARROW")){
    pc1.velocityX = 5;
    pc1.velocityY = 0;
  } 
  
  if(keyDown("LEFT_ARROW")){
    pc1.velocityX = -5;
    pc1.velocityY = 0;
  } 
  
  if(keyDown("UP_ARROW")){
    pc1.velocityX = 0;
    pc1.velocityY = -5;
  } 
  
  if(keyDown("DOWN_ARROW")){
    pc1.velocityX = 0;
    pc1.velocityY = 5;
  } 
  
  needles();
  drawSprites();

  p1.display();
  bow.display();
  arrow.display();
  code.display();
}

function needles(){
  if(frameCount%80 === 0){
  var needles = createSprite(142,-10,2,20);
  needles.x = Math.round(random(2,400));
  needles.velocityY = 5;
  needleGroup.add(needles);
  }
  
}
