class Monster {
    constructor(x, y){
      var options = {
        restitution:0,
        friction:1.0,
        density:1.0,
        isStatic:true
      }
      this.body = Bodies.circle(x,y,100,options);
      this.radius = 100
      this.image = loadImage("monster.png");
      // this.visibility = 255
      World.add(world,this.body)
    }
  flu() {
    Matter.Body.setStatic(this.body,false)
  }
   display(){
super.display;
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0,this.radius,this.radius);
    pop();

    if(this.body.speed < 3){
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity-0.01;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     }
  
      
    }
     
   };