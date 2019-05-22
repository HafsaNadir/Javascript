const info={
    firstName: "john",
    middleName: "peter",
    lastName: "joe",
}
const {firstName: fn ,lastName: ln } = info

console.log(`${fn} ${ln}`) //john joe
console.log(`${firstName} ${lastName}`) //errpr: firstName lastName not defined