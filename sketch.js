
  const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var shoot
var tanker
var tankerhead
var ball
var bgimg
var gamestate = "start"
var launchx
var launchy
var launcherx
var launchery
var b1,b2,b3,b4
var canonball2
var shot
function preload(){
bgimg = loadImage("images/bg1.jpg");



}
function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(0.1,490,1400,10);
    //shoot = new 
    tanker = new Tanker(50,400,100,100);
    //tankerhead = new
    //ball = new
    b1 = new Ball(300,100,10,20);
    b2 = new Ball(400,200,10,10);
    b3 = new Ball(500,150,20,10);
    b4 = new Ball(300,250,10,10);
    canonball2 = new Canonball(20,20,10,20)
    shot = new Shootball(Canonball.body,{x:85,y:300})
}

function draw() {
background(bgimg);
Engine.update(engine);
ground.display();
//canonball.display()
tanker.display();
//tankerhead.display();
b1.display();
b2.display();
b3.display();
b4.display();
canonball2.display()
shot.display()

}
