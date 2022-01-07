
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var treeAnimation,stoneAnimation,boyAnimation,mango1A,mango2A;
var tree,ground;
var mango1, mango2, mango3 , mango4, mango5;
var stone1, launcher1;
function preload()
{
// treeAnimation = loadImage("tree.png");
// stoneAnimation = loadImage("stone.png");
// mango1A = loadImage("mango.png");
boyAnimation = loadImage("boy.png")
}

/*function setup() {
	createCanvas(1300, 600);
  //  text(mouseX + "," + mouseY,30,40);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(1000,620,160,100);
	// this.tree.scale = 0.005
	ground = new Ground(600,height,1600,20);
mango1 = new Mango(1100,100,30)
mango2 = new Mango(1000,70,30)
mango3 = new Mango(1000,230,30)
mango4 = new Mango(1100, 230, 25)
mango5 = new Mango(900,160,25)
mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);
//Stones
stone1 = new Stone(230,420,30)
launcher1 = new Launcher(stone1.body,{x:235, y:420})

	Engine.run(engine);
  
}*/

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(235,420,30); 

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
	Engine.run(engine);
 // Render.run(render);
}
function draw() {
 // rectMode(CENTER);
  background("skyblue");
 // text(mouseX + "," + mouseY,30,40)
  image(boyAnimation,200,340,200,300)
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
 
  stone1.display()
  launcher1.display();
  detectcollision(stone1,mango1)
  detectcollision(stone1,mango2)
  detectcollision(stone1,mango3)
  detectcollision(stone1,mango4)
  detectcollision(stone1,mango5)
  detectcollision(stone1,mango2)
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);
  detectollision(stoneObj,mango11);
  detectollision(stoneObj,mango12);

  //drawSprites();
 
}
function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
  launcher1.fly();
}
function detectcollision(lstone, lmango){
mangoBodyPosition = lmango.body.position
stoneBodyPosition = lstone.body.posiiton
var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x, mangoBodyPosition.y)
if( distance<=lmango.r + lstone.r){
  Matter.Body.setStatic(lmango.body,false)
}
  
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }


