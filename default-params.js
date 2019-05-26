const sum=(num1,num2=[1,2,3,4,5])=>{
    let total=0
    num1.forEach(n => total += n )
    console.log(total)

    total=0
    num2.forEach(n => total += n )
    console.log(total)
}
sum([1,2,3])

//example
const test = (num = 1) =>
    console.log(typeof num);  

  test();          // 'number' (num is set to 1)
  test(undefined); // 'number' (num is set to 1 too)
  test('');        // 'string' (num is set to '')
  test(null);      // 'object' (num is set to null)

  