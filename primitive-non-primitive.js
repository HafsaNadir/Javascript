//primitive datatypes: numbers, strings, booleans, null, undefined
let a=10
var b=10
console.log(a===b) //true

let c=null
let d=null
console.log(c===d) //true

let x=undefined
let y=undefined
console.log(x===y) //true

//non-primitive: arrays, objects
let names=["bran", "john", "james"]
let firstName=["bran", "john", "james"]
console.log(names===firstName) //false

let obj1={ name: "joe"}
let obj2={ name: "joe"}
console.log(obj1===obj2) //false