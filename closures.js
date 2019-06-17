function retirement (retirementAge){
 var a="years left until retirement"
 return function(yearOfBirth)
 {
     var age = 2016 - yearOfBirth
     console.log((retirementAge - age) + a)
 }
}
var r = retirement(66)
r(1990)

retirement(66)(1990) //same answer as above

//example
function showName(firstname,lastname)
{
    let intro = "name is "
    return function()
    {
        console.log(intro + firstname + " " + lastname)
    }
}
showName('hafsa' , 'nadir')()
//or
var name = showName('james' , 'john')
name()