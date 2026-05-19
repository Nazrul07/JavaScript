let nums = [-10, 0, 10, 13, 15, 20, 25, 30, 35]

nums.forEach((num, index) => {
    console.log(num, index)
})
console.log('------------------')


let person = {
    name: 'Nazrul',
    age: 25,
    location: 'Chittagong'
}

Object.keys(person).forEach(key =>{
    console.log(key)
    // console.log(key, ": ", person[key])
})

Object.values(person).forEach(value =>{
    console.log(value)
})
console.log('------------------')

Object.entries(person).forEach(entry =>{
    console.log(entry)
})
console.log('------------------')


Object.entries(person).forEach(([key, value]) =>{
    console.log(key, ": ", value)
})