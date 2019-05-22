const func=(...nums)=>{
    console.log(nums) //[1,2,3,4,5]
    for(let num of nums)
    {
        console.log(num)
    }
}
func(1,2,3,4,5)

//example2

function sumAll(...args) { // args is the name for the array
    let sum = 0
  
    for (let arg of args) 
    sum += arg  
    return sum
  }
  var total= sumAll(1,2,3,4,5)
  console.log(total) //15

