
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var sling;
var stone;
var ground;
var boyimg;
var treeimg;
var mango1;
function preload()
{
	boyimg = loadImage("images/boy.png");
	treeimg = loadImage("images/tree.png");

}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone= new Stone(150,560);
	slingshot = new SlingShot(stone.body,{x:150,y:560});
	ground = new Ground(600,690,1200,40);

	mango1= new Mango( 1000,400,30,30)
	mango2= new Mango( 800,300,30,30)
	mango3= new Mango( 900,350,30,30)
	mango4= new Mango( 800,470,30,30)
	mango5= new Mango( 800,500,30,30)
	mango6= new Mango( 900,470,40,30)
	mango7= new Mango( 800,490,36,30)
	mango8= new Mango( 800,470,30,40)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boyimg,100,520,200,200);
  image(treeimg,800,180,400,500);
  stone.display();
  slingshot.display();
  ground.display();
  mango1.display()
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  collide(stone, mango1);
  collide(stone, mango2);
  collide(stone, mango3);
  collide(stone, mango4);
  collide(stone, mango5);
  collide(stone, mango6);
  collide(stone, mango7);
  collide(stone, mango8);
  drawSprites();
 
}


function mouseDragged(){
    
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(stone.body);
    }
}


function collide(object1,object2){
 
	 if(object2.body.position.x - object1.body.position.x <= object1.width/2 + object2.width/2){
		 Matter.Body.setStatic(object2.body, false)
	 }

 
 }