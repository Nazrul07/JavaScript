class Person {
    constructor(name, age) {     // Personal data - belongs to object
        this.name = name
        this.age = age
    }

    greet() {       // uses personal data - instance method
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }

    static create(name, age) {      // utility - no personal data needed
        return new Person(name, age)
    }
}

// instance method - needs object because it uses personal data
const person1 = new Person('Alice', 30)
console.log(person1.greet())


// static method - no object needed because it doesn't use personal data
const person2 = Person.create('Bob', 25)
console.log(person2.greet())


/*
// We already use static methods without knowing!

Math.max(1, 2, 3)       // Math is a class, max is static
Math.min(1, 2, 3)       // no object needed
Math.random()

JSON.parse('{"a":1}')   // JSON is a class, parse is static
JSON.stringify({a: 1})  // no object needed

Array.isArray([1,2,3])  // Array class, isArray is static

Math, JSON, Array — We never write new Math() or new JSON(). They are all static — just tools we call directly.


Just simple rule

Instance method  →  needs personal data (this.name, this.age)
                 →  different result per object
                 →  p.greet()

Static method    →  no personal data needed
                 →  same tool for everyone
                 →  MathUtils.square(5)
*/