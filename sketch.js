
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint;

var bg;

function preload()
{
	bg=loadImage("Sprites/bg.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     boy=new Boy(160,400,200,300)
	 tree=new Tree(850,250,500,450)
	 stone=new Stone(100,320,20)
	 m1=new Mango(800,200,5)
	 m2=new Mango(700,200,5)
	 m3=new Mango(900,100,5)
	 m4=new Mango(950,250,5)
	 m5=new Mango(1030,170,5)
	 ground=new Ground(600,499,1200,2)
	 string=new String(stone.body,{x:100,y:320})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  boy.display()
  tree.display()
  stone.display()
  m1.display()
  m2.display()
  m3.display()
  m4.display()
  m5.display()
  ground.display()
  string.display()
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
	string.fly()
}

//function detectCollision(){
	//Matter.Body.isStatic()
