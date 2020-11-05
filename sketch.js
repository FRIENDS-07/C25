const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;
var ball;

var box1,box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var bg;

function preload(){
  
  bg = loadImage("sprites/bg.png");

}

function setup() {

  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  box1 = new box(600,400);
  box2 = new box(840,400);
  box3 = new box(600,300);
  box4 = new box(840,300);
  box5 = new box(720,200);

  ground1 = new ground();

  pig1 = new Pig(720,400);
  pig2 = new Pig(720,300);

  log1 = new Log(720,350,350,PI);
  log2 = new Log(720,250,350,PI);
  log3 = new Log(660,150,170,-PI/4);
  log4 = new Log(780,150,170,PI/4);

  bird1 = new Bird(300,200);
  
}

function draw() {

  background(bg);  

  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground1.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();

}