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

let MY_FAV=7;

if (MY_FAV === 7) { 
    // this is fine and creates a block scoped MY_FAV variable 
    // (works equally well with let to declare a block scoped non const variable)
    const MY_FAV = 20;

    // MY_FAV is now 20
    console.log('my favorite number is ' + MY_FAV);

    // this gets hoisted into the global context and throws an error
   // var MY_FAV = 20;
}

// MY_FAV is still 7
console.log('my favorite number is ' + MY_FAV);

//ES5 
console.log(a) // undefined
var a=100

var a
console.log(a) // undefined
a = 3
