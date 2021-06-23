class Ball{
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.image=loadImage("paper.png")
        this.body = Bodies.circle(x,y,radius, options);
        this.radius = radius

        World.add(world, this.body);
    }
    display(){
        
        var ballPos=this.body.position;		

			push()
			translate(ballPos.x, ballPos.y);
			rectMode(CENTER)
			
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			
			pop()
        
        // ************   We need to display the image instead of circle hence commenting these lines *****
       
        // ellipseMode(RADIUS);

      //  fill("yellow");

       // circle(this.body.position.x, this.body.position.y, this.radius);

    }       
};
