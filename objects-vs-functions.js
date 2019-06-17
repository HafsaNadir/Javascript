var b = 10
function a (){
    b = 12
}
a()
console.log(b) //12

//premitive remains unchange while object changes its property
var x = 19
var obj = {
    name: 'jame' ,
    age: 19
}
function change(a,b)
{
    a = 30
    b.age = 17
}
change(x ,obj)

console.log(x) //19
console.log(obj.age) //17
