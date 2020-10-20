class Paper{
    constructor(x, y,radius){
var options={
    isStatic:false,
    restitution:0.7,
    friction:0.5,
    density:21
}
this.paperIMG=loadImage("images/paper.png")
this.body = Bodies.circle(x, y, radius, options);
this.radius = radius;
World.add(world, this.body);
}
display(){
fill("white");
console.log("paper.display");

imageMode(RADIUS);
image(this.paperIMG,this.body.position.x,this.body.position.y,this.radius,this.radius);
}
}
