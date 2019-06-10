//normal function 
function getEmployees()
{
    console.log('function is started')
    const names=['john' , 'rick' , 'joe' , 'james', 'richard']
    for(const name of names)
    {
        console.log(name)
    }
    console.log('function is ended')
}
getEmployees()

//generators
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
getEmployees()