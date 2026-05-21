// When NOT to use arrow functions

// 1. Object methods that need 'this'
const obj = {
    count: 0,
    increment: () => this.count++,  // 'this' is wrong here, it doesn't refer to obj
    incrementCorrect() {
        this.count++               // use regular method syntax to access 'this'
        console.log('Incremented count:', this.count)
    }
}
obj.increment()                     // This will not work as expected, 'this.count' is undefined
obj.incrementCorrect()              // This will work correctly
console.log('---------------------------------')




// 2. When we need to use 'arguments' object
function regularFunction() {
    console.log('Arguments in regular function:', arguments)  // 'arguments' is available here
}
const arrowFunction = () => {
    console.log('Arguments in arrow function:', arguments)  // 'arguments' is not available here, will cause an error
}

regularFunction(1, 2, 3)      // This will log the arguments
// arrowFunction(1, 2, 3)     // This will throw an error because 'arguments' is not defined
console.log('---------------------------------')




// 3. When we need to use 'new' keyword to create instances
function Person(name) {
    this.name = name
}
const ArrowPerson = (name) => {
    this.name = name  // 'this' does not work in arrow functions, so this will not set the name property
}

const person1 = new Person('Alice')         // This will work correctly
// const person2 = new ArrowPerson('Bob')   // This will throw an error because arrow functions cannot be used as constructors
console.log('Person 1:', person1.name)      // This will log 'Alice'
// console.log('Person 2:', person2.name)   // This will not work due to the error above
console.log('---------------------------------')




// 4. When we need to use 'this' in event handlers
/*
const button = document.createElement('button')
button.textContent = 'Click me'
button.addEventListener('click', function(){
    console.log('Button clicked, this is:', this)   // 'this' refers to to the button element.
})
*/