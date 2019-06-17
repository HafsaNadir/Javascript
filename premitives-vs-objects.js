var a = 3
var b = a
a = 5
console.log(a) //5
console.log(b) //3

const person = {
    name: 'james' ,
    age: 19
}
var person1 = person
person1.age = 18
console.log(person.age) //18
console.log(person1.age) //18