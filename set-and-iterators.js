const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

const iterator = months.values()
console.log(iterator.next()) //{ value: 'January', done: false }
console.log(iterator.next()) //{ value: 'February', done: false }
console.log(iterator.next()) //{ value: 'March', done: false }
console.log(iterator.next()) //{ value: 'April', done: false } and so on....

//An easier method to loop through the items in a Set is the for...of loop
for(const iterator of months)
{
    console.log(iterator)
}