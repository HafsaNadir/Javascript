let validator = {
    set(target,property,value)
    {
        if(!Number.isInteger(value))
        {
            throw new ReferenceError("the age is not an integer")
        }
        else if(value>100)
        {
            throw new RangeError("the age is not valid")
        }
        else 
        target[property]=value
        console.log(target[property])
    }
}
const proxy= new Proxy({},validator)
proxy.age=60
proxy.age
proxy.age=150
