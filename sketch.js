
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine,world;

var divisions = [];
var particles ,count ;
var plinkos=[];
var score;
var divisionHeight=350;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
    ground1 = new ground();
   
	
    for (var k=0; k < 850; k= k+80){
      divisions.push(new division(k,620,10,500));
    }
    for (var j=0;  j<850;  j = j+65){
       plinkos.push(new plinko(j,200,19))
    }

    for (var j=25;  j<850;  j = j+65){
      plinkos.push(new plinko(j,120,19))
   }
   for (var j=25;  j<850;  j = j+65){
    plinkos.push(new plinko(j,280,19))
   }



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground1.display();

  
  
    for(var k=0;k<divisions.length;k++){
    divisions[k].display();
    }
    for (var j = 0;j<plinkos.length;j++){

    plinkos[j].display();

    }
    
    
   particles.display();

  // text("score "+ score,10,100)
  //drawSprites();
 
}


function mousePressed(){



 

    particles = new particle(mouseX,10,10,10);

  





}


