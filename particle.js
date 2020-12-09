class particle{

constructor(x,y,r){

this.body = Bodies.circle(x,y,r)
this.width = r;
this.color = color( random(0,255), random(0,255), random(0,255) );
World.add(world,this.body);

}

display(){

var pos = this.body.position;

push();
translate(pos.x,pos.y);
noStroke();
fill(this.color);
ellipseMode(RADIUS);
ellipse(0,0,this.width,this.width);
pop();


}

}