class Person {
    constructor(name, age) {
        // 'this' refers to the current instance of the class
        this.name = name
        this.age = age
    }
}

const p = new Person('Alex', 25)
//                     ↑      ↑
//              goes to name  goes to age

console.log(p.name) 
console.log(p.age)

// constructor runs automatically when we write new Person().
// this means the object being created right now.