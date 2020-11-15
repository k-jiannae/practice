
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbin;
var dustbin1;
var dustbin2;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(500,690,1300,20);
    dustbin = new Dustbin(600,670,150,20);
	dustbin1 = new Dustbin(520,620,20,80);
    dustbin2 = new Dustbin(672,620,20,80);
    paper = new Paper(100,670,20,20);
	
	
	
	
	




	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  ground.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();
  paper.display();
  drawSprites();
 
}

