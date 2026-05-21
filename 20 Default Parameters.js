// Basic
function greet(name = "World") {
    console.log(`Hello, ${name}!`)
}
greet()
greet("Karim")
console.log('------------------')



// Default can be an expression
function createID(prefix = "user", id = Math.round(Math.random()*100).toString()){
    return `${prefix}_${id}`
}
console.log(createID())
console.log(createID("Halim"))
console.log(createID("Kabir", "36"))
console.log('------------------')



// Default can reference earlier params
function range(start = 5, end = start + 10) {
    return [start, end]         // returning as an array
}
console.log(range())            // will use default value for both start and end
console.log(range(20))
console.log(range(5, 50))
console.log('------------------')


// Default can be a function call
function getRandom(range = 10) {
    return Math.round(Math.random()*range)
}

function doSomething(value = getRandom(100)) {
    return `Value is: ${value}`
}

console.log(doSomething())
console.log(doSomething(42))
console.log('------------------')



// Undefined triggers default, null does not
function test(x = 42){
    console.log(x)
}
test()          // 42
test(undefined) // 42, because undefined triggers the default value
test(null)      // null, because null is a valid value
test(0)         // 0, because 0 is a valid value
test('')        // '', because an empty string is a valid value
test(NaN)       // NaN, because NaN is a valid value
test(false)     // false, because false is a valid value