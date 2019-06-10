//destructuring arrays is same as destructuring objects
let [firstName,middleName,lastName] = ["john","joe","james"]
console.log(firstName) //john

lastName="bran"
console.log(lastName)

//example
let array=['a','b','c','d','e']
const [a,,b]=array
console.log(a) //a
console.log(b) //c

//example2
var[greeting = "hi",name = "Sarah"] = ["hello"]

console.log(greeting)//Hello
console.log(name)//Sarah