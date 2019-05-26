const array=[6,7,8]
const obj = { name: "hafsa", age:"19"}
const str="blow"

//forEach
array.forEach(element => {
  console.log(element)  
})

str.forEach(i=> console.log(i)) //str.forEach is not a function

//for in
for(let i in array)
{
    console.log(array[i])
}
for(let i in obj)
{
    console.log(obj[i])
}
for(let i in str)
{
    console.log(str[i])
}

//for of
for(let i of array)
{
    console.log(i)
}
for(let i of str)
{
    console.log(i)
}
