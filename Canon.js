class Canon {
    constructor(x, y) {
      var options = {
        "density" :   1.5,
        "friction" : 1.0,
        "restitution" : 0.8,
        "frictionAir":0.06,
        "isStatic" : true
      }
      this.body = Bodies.rectangle(x,y,100,100,options);
      this.width = 100;
      this.height = 100;
      
      //this.image = loadImage("assets/canon.png");
      World.add(world, this.body);
    }
  
    display(){
      rect(this.body.position.x, this.body.position.y - (400 - this.body.position.y), 30, 200, this.angle);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
        //image(this.image, 100, 50);
    }
  }