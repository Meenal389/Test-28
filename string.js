class String{
    constructor(b1,pointB){
  
    var options={
        bodyA:b1,
        pointB:pointB,
        length:1,
        stiffness:0.004
    }
    this.bodyA=b1;
    this.pointB=pointB;
    this.string=constraint.create(options);
    World.add(world,this.string);
    }
  
    fly(){
      this.string.bodyA=null;
    }
  
    display(){
      if(this.string.bodyA){
        var posA=this.string.bodyA.position;
        var posB=this.pointB;
        strokeWeight(1)
        line(posA.x,posA.y,posB.x,posB.y);
      }
    }
  }