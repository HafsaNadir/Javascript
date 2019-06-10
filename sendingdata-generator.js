function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard']
    const facts = []

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name)
    }
    return facts
}

const generatorIterator = getEmployee()

// get the first name out of the generator
let name = generatorIterator.next().value
console.log(name)
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value 
console.log(name)

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value
console.log(name)
// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value
console.log(name)

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value
console.log(name)
name = generatorIterator.next(`${name} is impressive!`).value
console.log(name)
name = generatorIterator.next(`${name} is stunning!`).value
console.log(name)
name = generatorIterator.next(`${name} is awe-inspiring!`).value
console.log(name)

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value 
console.log(positions)

// displays each name with description on its own line
const display= positions.join('\n')
console.log(display)