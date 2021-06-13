class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.r=r
		var roptions={
		restitution:0.3,
		isStatic:false,
		friction:5,
		density:1
        

		}
		this.body=Bodies.circle(this.x, this.y, r, roptions)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r)
			pop()
	}

}