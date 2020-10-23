class Box {
constructor (x,y,width,height){
    var options ={
        isStatic: false,
        restitution: 0.8,
        density:1.0,
        friction:1.3
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);  
   
 
}

display (){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate (angle);
    fill("white");
    strokeWeight(4);
    stroke("green");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
     pop();
}
}