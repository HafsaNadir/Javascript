class Plane{
    constructor(engine_no)
    {
        this.engine_no = engine_no
        this.engine_active=false
    }
    startengine(){
        console.log("engine started")
        this.engine_active=true
    }
}
plane= new Plane("1")
console.log(plane.engine_active) //false
plane.startengine() //engine started
console.log(plane.engine_active) //true