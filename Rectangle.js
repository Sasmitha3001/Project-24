class Rectangle{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        this.height=height;
        this.width=width;
        World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
         fill("red");
        rectMode(CENTER);
        rect(position.x,position.y,this.width,this.height);
    }
}
