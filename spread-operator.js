//for arrays
let array1 = [1,2,3,4,5]
let array2 = [...array1]
console.log(array2) //[1,2,3,4,5]

//for objects
let example1 = { firstName: "bran" }
let example2 = {...example1}
console.log(example2) //{firstName: "bran"}

//example
let arr1 = ['a','b','c']; 
let arr2 = arr1; 
  
arr2.push('d'); 
console.log(arr2); //[a,b,c,d] 
console.log(arr1); //affects arr1 as well as arr2 
//output: [a,b,c,d]

//while using spread operator only arr2 will be affected
arr2 = [...arr1]
arr2.push('z')
console.log(arr2) //[a,b,c,d,z]
console.log(arr1) //[a,b,c,d]

//example2
let a=[1,2,3,4]
let b=[a,5,6,7]
console.log(b) //[[1,2,3,4],5,6,7]

//but using spread operator
b=[...a,5,6,7]
console.log(b) //[1,2,3,4,5,6,7]
