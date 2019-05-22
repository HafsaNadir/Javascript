//example1
const func = (city,address) => {
    const obj = {
        city,
        address
    }
    console.log(obj)
}
func("karachi","abc")

//example2
const func1 = (address) => {
    const {city,state} = address
    const newAddress = {
        city,
        state
    }
    console.log(newAddress)
}
func1({city: 'austin', state:'texas'})