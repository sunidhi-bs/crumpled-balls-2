
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paperIMG,dustbinIMG;

function preload()
{
	paperIMG=loadImage("images/paper.png")
	dustbinIMG=loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var dustbinSprite = createSprite(650,410,170,20);
	dustbinSprite.addImage(dustbinIMG,"dustbin");
	dustbinSprite.scale = 0.57;

	//var paperSprite = createSprite(650,410,170,20);
	//paperSprite.addImage(paperIMG,"dustnbin");
	//paperSprite.scale = 0.57;

	ground = Bodies.rectangle(400,500,800,10 , {isStatic:true} );
	World.add(world,ground);
	
	//Create the Bodies Here.
	object1 = new Dustbin(650,500,150,20);
	object2 = new Dustbin(715,430,20,170);
	object3 = new Dustbin(585,430,20,170);
    paper = new Paper(150,450,3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  //paperSprite.x = paper.x;
  //paperSprite.y = paper.y;
  
 
  object1.display();
  object2.display();
  object3.display();
 
  fill("blue");
  rectMode(CENTER);
   rect(400,510,800,10);
   drawSprites();
   paper.display();
}
function keyPressed(){
 if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-25})
 }
}


