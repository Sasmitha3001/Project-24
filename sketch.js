
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var rectangle1,rectangle2,rectangle3;
var paper,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	rectangle1=new Rectangle(610,550,20,100);
	rectangle2=new Rectangle(390,550,20,100);
	rectangle3=new Rectangle(500,590,200,20);

	ground=new Ground(400,610,800,10);

	paper=new Paper(150,50,10);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  rectangle1.display();
  rectangle2.display();
  rectangle3.display();

  ground.display();

paper.display();

keyPressed();
}

//Making the ball jump and fall
function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:0.1,y:-0.5})
	}
}



