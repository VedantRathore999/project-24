class Stone {
    constructor(x,y,width,height) {
      var soptions = {
          isStatic:false,
          restitution:0.1,
          'friction':0.01,
          'density':120
      }
      this.body = Bodies.rectangle(x,y,width,height,soptions);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };