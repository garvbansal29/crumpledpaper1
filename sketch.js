
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var dustbinlog1,dustbinlog2,dustbinbase;
var paper;

function preload()
{
	
}

function setup() {
	createCanvas(900, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ground = new Ground(450,470,1200,20);

   dustbinlog1 = new Dustbin(700,420,10,70); 
   dustbinbase = new Dustbin(743,450,80,10);
   dustbinlog2 = new Dustbin(788,420,10,70);

   paper = new Paper(100,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();

dustbinlog1.display();
dustbinbase.display();
dustbinlog2.display();

paper.display();

  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10});
}

}

