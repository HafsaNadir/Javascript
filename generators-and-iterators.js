// A generator is a function that can stop midway and then continue from where it stopped. 
function* getEmployees()
{
    console.log('function is started')
    const names=['john' , 'rick' , 'joe' , 'james', 'richard']
    for(const name of names)
    {
        console.log(name)
    }
    console.log('function is ended')
}
let emp1 = getEmployees()
emp1.next() //function is started
            // john
            // rick
            // joe
            // james
            // richard
            // function is ended

//The yield keyword is new and was introduced with ES6. 
//It can only be used inside generator functions. yield is what causes the generator to pause.
function* getEmployees()
{
    console.log('function is started')
    const names=['john' , 'rick' , 'joe' , 'james', 'richard']
    for(const name of names)
    {
        console.log(name)
        yield
    }
    console.log('function is ended')
}
let emp2 = getEmployees()
emp2.next() //function is started
            //john
emp2.next() //rick

//example
function* display()
{
    console.log('this line will be executed first')
    yield 'hello'
    console.log('this line will be executed after a pause')
    yield 'world'
}
const output = display()
console.log(output.next().value) //this line will be executed first
                                 //hello
console.log(output.next().value) //this line will be executed after a pause
                                 //world
console.log(output.next().value) //undefined