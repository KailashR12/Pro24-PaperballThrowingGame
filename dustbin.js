class Dustbin {
   constructor (x,y,width,height) {
       var options = {
         isStatic:true,
         'restitution':0.8,
         'friction':0.3,
         'density':1.0
       }
      this.body = Bodies.rectangle(x,y,width,height,options) ;
      this.width = width;
      this.height = height;

      World.add(world, this.body);
   }
   display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     // var pos =Matter.Body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y, this.width, this.height);
    //super.display();
  }
}