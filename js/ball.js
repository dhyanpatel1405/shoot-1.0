class Ball{
    constructor(x,y,width,height){
        var opt = {
            density:1.5,
            friction:1,
            restitution:0.9,
            frictionAir:0.08
    
        }
        this.body = Bodies.rectangle(x,y,20,20,opt)
        this.width = 20
        this.height = 20
    World.add(world,this.body)
    }
    display(){
        var pos = this.body.position 
        var angle = this.body.angle
        push()  
        translate(pos.x,pos.y);
    rect(pos.x,pos.y,this.width,this.height) 
    pop()
    }
    
    }
    
    
    