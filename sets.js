//In ES6, there’s a new built-in object that behaves like a mathematical set and works similarly to an array. 
//This new object is conveniently called a "Set". The biggest differences between a set and an array are:
// Sets are not indexed-based - you do not refer to items in a set based on their position in the set
// items in a Set can’t be accessed individually
// Basically, a Set is an object that lets you store unique items. You can add items to a Set, remove items from a Set, and loop over a Set.
// These items can be either primitive values or objects.

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.'])
console.log(games) //Set { 'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart' }

games.add('Banjo-Tooie')
games.add('Age of Empires')
games.delete('Super Mario Bros.')
console.log(games) //Set { 'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires' }

games.clear()
console.log(games) //Set {}

//example
const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

console.log(months.size) //12

console.log(months.has('September')) //true

//.values() method to return the values in a Set.
console.log(months.values())
console.log(months.keys())
//The .keys() method will behave the exact same way as the .values() 
//method by returning the values of a Set within a new Iterator Object. 
//The .keys() method is an alias for the .values() method for similarity with maps.
