
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin,ground,Paperball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,680,800,20);
	Paperball=new Paper(200,100,40); 
	dustbin1 = new Dustbin(600,665,150,20);
    dustbin2 = new Dustbin(523,630,20,90);
    dustbin3 = new Dustbin(673,630,20,90);

boxPosition = width/2-100;
boxY = 600;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
 
  Paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
}
 

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(Paperball.body,Paperball.body.position,{x:30,y:-90})
	}
 
}



