class Tanker{
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
        push()  
    rect(pos.x,pos.y,this.width,this.height) 
    pop()
    }
    
    
    }