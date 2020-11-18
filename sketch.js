var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var options;
var box1s,box2s,box3s;
var box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10,Options);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

    var Options = {
		isStatic : true
	}

	groundSprite=createSprite(width/2, height-35, width,10,Options);
	groundSprite.shapeColor=color(255)

	box1s = createSprite(width/2,height-50,200,20);
	box1s.shapeColor = "red";

	box2s = createSprite(width/2.6,610,20,100);
	box2s.shapeColor = "red";

	box3s = createSprite(width/1.6,610,20,100);
	box3s.shapeColor = "red";


	engine = Engine.create();
	world = engine.world;
	
	box2 = Bodies.rectangle(width/2.6,610,20,200,{isStatic:true});
	World.add(world,box2);

	box3 = Bodies.rectangle(width/1.6,610,20,200,{isStatic:true});
	World.add(world,box3);

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0, isStatic:true});
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 box1 = Bodies.rectangle(width/2,630,200,20,{isStatic:true});
	 World.add(world,box1);


	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody , false);
}  

}