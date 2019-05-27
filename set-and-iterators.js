const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

const iterator = months.values()
console.log(iterator.next()) //{ value: 'January', done: false }
console.log(iterator.next()) //{ value: 'February', done: false }
console.log(iterator.next()) //{ value: 'March', done: false }
console.log(iterator.next()) //{ value: 'April', done: false } and so on....

for(const iterator of months)
{
    console.log(iterator)
}