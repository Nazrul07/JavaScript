// static — belongs to the CLASS, not the object

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    // static - called on person class directly.
    static create(name, age) {
        return new Person(name, age)    // creates and returns a new Person object.
    }
}

// call on the Class directly, not on an object.
const p1 = Person.create('Nazmul', 23)
console.log(p1.name)    // Nazmul

const p2 = new Person('Nazim', 40)
console.log(p2.name)          // Nazim
// p2.create("Saiful", 31)    // TypeError: p2.create is not a function

// Instance method → object.method()
// Static method   → Class.method()