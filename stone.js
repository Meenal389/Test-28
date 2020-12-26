class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            density:1.2,
            friction:1,
            restitution:0
        }
        
        this.body=Bodies.circle(x,y,r/2,options)
        this.r=r;
        this.image=loadImage("Sprites/stone.png")
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,0,0,this.r*2,this.r*2);
        pop()
    }
}