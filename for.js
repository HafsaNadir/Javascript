//forEach
const array=[6,7,8]

array.forEach(element => {
  console.log(element)  
})

//for in
for(let i in array)
{
    console.log(array[i])
}
const obj = { name: "hafsa", age:"19"}

for(let i in obj)
{
    console.log(obj[i])
}
const str="blow"
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
