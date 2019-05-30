const members = new Map()

members.set('Evelyn', 75.68)
members.set('Liam', 20.16)
members.set('Sophia', 0)
members.set('Marcus', 10.25)

let iteratorObjForKeys = members.keys()
console.log(iteratorObjForKeys.next()) //{ value: 'Evelyn', done: false }
console.log(iteratorObjForKeys.next()) //{ value: 'Liam', done: false }

///using for-of loop
for (const member of members) {
    console.log(member) //[ 'Evelyn', 75.68 ]
}                       //[ 'Liam', 20.16 ]
                        //[ 'Sophia', 0 ]
                        //[ 'Marcus', 10.25 ]
  