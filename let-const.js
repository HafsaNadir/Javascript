//ES6
console.log(name)// Output: ReferenceError: name is not defined 
let name="bran"

var shape = "square"
let shape = "rectangle"
// SyntaxError: Identifier 'shape' has already been declared

var shape = "square";
if (condition) {
    // doesn't throw an error
    let shape = "rectangle";
    // more code 
}
// No error 

console.log(age) // Output: ReferenceError: age is not defined
const age=18

//ES5 
console.log(a) // undefined
var a=100

var a
console.log(a) // undefined
a = 3
