class Canon {
    constructor(x, y) {
      var options = {
        "isStatic" : true
      }
      this.body = Bodies.rectangle(x, y, 200, 30, options);
      this.width = 200;
      this.height = 30;
      var angle = this.body.angle;
      var pos = this.body.position;

      World.add(world, this.body);
    }
  
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;

      if (keyIsDown(LEFT_ARROW) && angle > -2.00) {
        angle -= 0.05
        Matter.Body.setAngle(this.body, angle);
      }
      if (keyIsDown(RIGHT_ARROW) && angle < 0.000001) {
        angle += 0.05
        Matter.Body.setAngle(this.body, angle);
      }
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rect(0, 0, this.width, this.height);
      pop();
      rect(75, 350, 200, 100);
    }
  }