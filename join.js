let array = [ 'what', 'are', 'you', 'doing?' ]

let a = array.join()
console.log(a) //what,are,you,doing?

let b= array.join('')
console.log(b) //whatareyoudoing?

let c = array.join(' ')
console.log(c) //what are you doing?

console.log(array.join(', ')) //what, are, you, doing?
console.log(array.join('-')) //what-are-you-doing?
console.log(array.join(' + ')) //what + are + you + doing?