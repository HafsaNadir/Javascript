//string
console.log(String(true)) //now it is "true"
console.log(String(undefined)) //"undefined"
console.log(String(null)) //"null"

//number
console.log(Number(undefined)) //NaN
console.log(Number(null)) //0
console.log(Number(true)) //1
console.log(Number(false)) //0
console.log(Number("1")) //1
console.log(Number("1a")) //NaN
console.log(Number("")) //0
console.log(Number(" ")) //0

//boolean
console.log(Boolean(1)) //true
console.log(Boolean(0))  //false
console.log(Boolean(null))  //false
console.log(Boolean(undefined)) //false
console.log(Boolean(NaN)) //false
console.log(Boolean("")) //false
console.log(Boolean(" ")) //true
console.log(Boolean("hello")) //true


