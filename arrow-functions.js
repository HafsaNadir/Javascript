const sum=(nums)=>{
    const total = nums.reduce((x,y)=> x*y)
    console.log(total)
}
sum([2,3,4])

//example2

const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]