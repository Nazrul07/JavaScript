class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    get info() {
        return `${this.name} is ${this.age} years old.`
    }
}

const p = new Person('Nazmul', 23)
console.log(p.info)      // Nazmul is 23 years old.
// console.log(p.info()) // TypeError: p.info is not a function

// The getter method allows us to access the info property as if it were a regular property,
// without needing to call it as a function.

// Getter is useful when we want to compute something from existing data but access it like a normal property.