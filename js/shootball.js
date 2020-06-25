class Shootball{
    constructor(bodyA,pointB){
        var Option = {
            badyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:35
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(Option)
        World.add(world,this.body)
    

    }
    attach(body){
        this.sling.bodyA = body

    }
    display(){
        var pointA = this.sling.bodyA.positon
        var pointB = this.pointB
        this.pointB.x = launchx
        this.pointB.Y = launchy



    }




}