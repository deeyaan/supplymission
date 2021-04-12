
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(500,950,1000,40)
paper=new Paper(100,900,10)
dustbinl =new Dustbin(900,900,30,100)
dustbinr =new Dustbin(780,900,30,100)
dustbind =new Dustbin(835,940,100,30)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  paper.display();
  dustbinl.display();
  dustbinr.display();
  dustbind.display();
  drawSprites();
 
}



