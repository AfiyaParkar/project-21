
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload(){

}


function setup() {
	createCanvas(900, 900);

	var ball_options={
		isStatic:false,
		restitution:0.3,
		riction:0,
		density:1.2
	}

    rightSide=Bodies.rect(200,100,20,rightSide_options)
	leftSide=Bodies.rect(200,100,20,leftSide_options)

	engine = Engine.create();
	world = engine.world;

	display()

	groundObj=new ground(width/2,670,width,20)
	leftSide = new ground(1100,600,20,120);
	rightSide = new ground(1000,600,20,120);
	
	//Create the Bodies Here.
Matter.Bodies.circle(200, 250, 30, [options], [maxSides])


	Engine.run(engine);
  
}
function  keyPressed( {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
	}
})


function draw() {
  rectMode(CENTER);
  background(0);
  
  groundObj.display();
  drawSprites();
 
}



