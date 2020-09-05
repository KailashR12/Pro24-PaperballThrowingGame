
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var paper1, dustbin1;
var dustbin2,dustbin3;
var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,350,2);
	dustbin1 = new Dustbin(400,680,200,20);
	dustbin2 = new Dustbin(490,650,20,100);
	dustbin3 = new Dustbin(310,650,20,100);
	ground = new Ground(600,height,1200,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();

//paper1.collide(ground);
//dustbin1.collide(ground);
//dustbin2.collide(ground);
//dustbin3.collide(ground);

  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0.5,y:-0.5});
	}
}

