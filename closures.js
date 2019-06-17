function retirement (retirementAge){
 var a="year left until retirement"
 return function(yearOfBirth)
 {
     var age = 2016 - yearOfBirth
     console.log((retirementAge - age) + a)
 }
}
var r = retirement(66)
r(1990)

retirement(66)(1990) //same answer as above