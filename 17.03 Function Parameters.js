// Destructuring in Function Parameters
// Insted of accessing obj.name, obj.age everytime
function display({name, age, country = "Bangladesh"}){
    console.log(`${name}, ${age}, ${country}`)
}

display({name: "Rahim", age: 25})

// Array params
function sum([a, b, c]){
    return a + b + c
}

console.log(sum([1, 2, 3]))

// React style
function userCard({name, avatar, role = "user"}){
    return `${name} (${role})`
}

console.log(userCard({name: "Nazrul", avatar: ".img"}))