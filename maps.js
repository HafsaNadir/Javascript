//If Sets are similar to Arrays, then Maps are similar to Objects
// because Maps store key-value pairs similar to how objects contain named properties with values 
const employees = new Map()

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
})
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
})
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
})
employees.delete('julia@udacity.com')
employees.delete('richard@udacity.com')
console.log(employees)  //Map {
                        //'james.parkes@udacity.com' => { firstName: 'James',
                        //lastName: 'Parkes',
                        //role: 'Content Developer' } }

employees.clear()
console.log(employees) //Map {}

//example
const members = new Map()

members.set('Evelyn', 75.68)
members.set('Liam', 20.16)
members.set('Marcus', 10.25)

console.log(members.has('Xavier')) //false
console.log(members.has('Marcus')) //true
//And you can also retrieve values from a Map, by passing a key to the .get() method
console.log(members.get('Evelyn')) //75.68
console.log(members.size) //3