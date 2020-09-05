class Paper{
    constructor (x,y){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        fill("purple");
        rect(pos.x,pos.y , this.width, this.height);
      }
}
