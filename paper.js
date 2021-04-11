class Paper {
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        Matter.bodies.circle(x,y,width,radius,[option],[maxSides]);
        this.radius = radius

        world.add(world,this.body);
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");

        circle(this.body.position.x,this.body.position.y,this.radius)
    }
}