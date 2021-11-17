const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var backImg;
var boyImg, boy;
var snowImg;

function preload(){

  backImg=loadImage("snow2.jpg");
  boyImg=loadImage("boyT.png");
  snowImg=loadImage("snow4.webp");
}

function setup() {

  engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
  snow=Bodies.circle(200, 10, 10);
  World.add(world, snow);

  createCanvas(800,400);
  boy=createSprite(100, 200, 50, 50);
  boy.scale=0.2;
  boy.addImage(boyImg);
}

function draw() {
  background(backImg);  
image(snowImg, snow.position.x, snow.position.y, 40, 40);
  drawSprites();
}