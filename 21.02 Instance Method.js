// Function every object gets when we create it using a class. It is used to initialize the object.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`
    }
}

const p1 = new Person('Nazmul', 23)
const p2 = new Person('Nazim', 40)

console.log(p1.greet())
console.log(p2.greet())

// each object has its OWN greet() using its OWN this.name