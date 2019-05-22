let str ="what are you doing?"
let str1 = str.split()

console.log(str1) //[ 'what are you doing?' ]
console.log(str) //what are you doing?

str1=str.split(" ")
console.log(str1) //[ 'what', 'are', 'you', 'doing?' ]

str1=str.split("")
console.log(str1) //[ 'w','h','a',t',' ','a','r','e',' ' ,'y','o','u',' ',d','o','i','n','g','?' ]

str1=str.split("a")
console.log(str1) //[ 'wh', 't ', 're you doing?' ]