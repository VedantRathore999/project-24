class Iron {
    constructor(x,y,width,height) {
      var ioptions = {
          isStatic:false,
          restitution:0.1,
          'friction':0.0001,
          'density':120000
      }
      this.body = Bodies.rectangle(x,y,width,height,ioptions);
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