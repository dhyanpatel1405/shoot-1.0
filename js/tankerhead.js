class Tankerhead{
    constructor(x,y,width,height){
        var opt = {
            isStatic:true
    
        }
        this.body = Bodies.rectangle(x,y,width,height,opt)
        this.width = width
        this.height = height
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        var angle = this.body.angle
        angleMode(DEGREES)
        if (keyIsDown(LEFT_ARROW) && angle<=1 && angle>-28) {
             angle -= 1;
              Matter.Body.setAngle(this.body, angle); }
    
        if (keyIsDown(RIGHT_ARROW) && angle>=-28 && angle<1) {
             angle += 1;
              Matter.Body.setAngle(this.body, angle); }    

            launchx = pos.x + ((this.height+10)*cos(angle))
            launchy = pos.y + ((this.height-10)*sin(angle))
        if (keyIsDown(32)){ Matter.Body.setPosition(Canonball.body,{x:launchx-100,y:launchy-35}); }

        if (keyIsDown(32) && angle-11){ Matter.Body.setPosition(Canonball.body,{x:launchx-120,y:launchy-20}); }

        if (keyIsDown(32)){ Matter.Body.setPosition(Canonball.body,{x:launchx-100,y:launchy-35}); }

        if (keyIsDown(32)){ Matter.Body.setPosition(Canonball.body,{x:launchx-100,y:launchy-35}); }






        push()  
    rect(pos.x,pos.y,this.width,this.height) 
    pop()
    }
   
    
    }
    
    
    