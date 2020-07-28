class Paper{
    constructor(x,y,radius){
       var paper_options={
        restitution:0.3,
            density:1.2,
            friction:0.5
        }
        this.body=Bodies.circle(x,y,radius,paper_options);
        this.radius=radius;
        World.add(world,this.body);
    }
    display(){
        fill("yellow");
        var position=this.body.position;
        ellipseMode(RADIUS);
        ellipse(position.x,position.y,this.radius);
    }  

}
