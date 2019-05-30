const obj = {age: 15, height: "5'10"}
const handler = {
    get(target,property){
        console.log(`we are accessing ${property} property`)
        console.log(target[property])
    }
}
const proxy = new Proxy(obj,handler)
proxy.age
proxy.name="john"
proxy.name