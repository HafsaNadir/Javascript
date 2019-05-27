//A symbol is a unique and immutable data type that is often used to identify object properties

const sym1 = Symbol('apple')
console.log(sym1) //Symbol(apple)

const sym2= Symbol('apple') 
console.log(sym2) //Symbol(apple)

console.log(sym1===sym2) //false

//example
const bowl = {
    'apple': { color: 'red', weight: 136.078 },
    'banana': { color: 'yellow', weight: 183.151 },
    'orange': { color: 'orange', weight: 170.097 },
    'banana': { color: 'yellow', weight: 176.845 }
  }
console.log(bowl) //{ apple: { color: 'red', weight: 136.078 },banana: { color: 'yellow', weight: 176.845 },orange: { color: 'orange', weight: 170.097 } }

const bowl1= {
    [Symbol('apple')]: { color: 'red', weight: 136.078 },
    [Symbol('banana')]: { color: 'yellow', weight: 183.151 },
    [Symbol('orange')]: { color: 'orange', weight: 170.097 },
    [Symbol('banana')]: { color: 'yellow', weight: 176.845 }   
}
console.log(bowl1) //{ [Symbol(apple)]: { color: 'red', weight: 136.078 },[Symbol(banana)]: { color: 'yellow', weight: 183.151 },[Symbol(orange)]: { color: 'orange', weight: 170.097 },[Symbol(banana)]: { color: 'yellow', weight: 176.845 } }