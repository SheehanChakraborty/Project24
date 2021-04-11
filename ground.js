class Ground {
    constructor(x,y,width,height){
        var options ={
           
            'restitution':0,
            'friction':0,
            'density':1,
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;

        world.add(world,this.body);
    }
    display(){
        rectMode(Center);
        fill(255);

        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}