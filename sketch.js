const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var button1,button2
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  var ballOption= {
    restitution:0.95
  }
  ball = Matter.Bodies.circle(200,200,20,ballOption)
  World.add(world,ball)
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  button1=createImg("up.png")
  button1.position(20,30)
  button1.size(50,50)
  button1.mouseClicked(vForce)

  button2=createImg("right.png")
  button2.position(200,30)
  button2.size(50,50)
  button2.mouseClicked(hForce)
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
}
function hForce()
{
  Matter.Body.applyForce(ball,{
    x:0,y:0
  },{
    x:0.05,y:0
  })
}
function vForce()
{
  Matter.Body.applyForce(ball,{
    x:0,y:0
  }, {x:0,y:0.02}
  )
}