
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;


function setup() {
	createCanvas(800, 700);
  rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper = new Paper(100,600,10)
	dustbin = new Dustbin(550,620,20,100);
   ground = new Ground(400,680,800,20);

   
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
 Engine.update(engine);

 paper.display();
 ground.display();

 dustbin.display();
 

  drawSprites();
 
}
function keyPresses(){
	if(keyCode===UP_ARROW){
		Matter.body.applyForce(paper.body,paper.body.position,{x:15,y:-15})
	}
}


