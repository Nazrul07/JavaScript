class Animal {      // Parent class
    constructor(name) {
        this.name = name
    }

    speak() {
        return `${this.name} makes a noise.`
    }

    toString() {
        return `Animal: ${this.name}`
    }
}

class Dog extends Animal {  // Child class that inherits from Animal
    constructor(name, breed) {
        super(name)  // call the parent class constructor to initialize name
        this.breed = breed
    }

    speak() {   // override the speak method of the parent class
        return `${this.name} barks.`
    }

    fullInfo() {
        return `${super.toString()}. Breed: ${this.breed}.`     // call the toString method of the parent class and add breed information
    }
}


const dog = new Dog('Buddy', 'Golden Retriever')
console.log(dog.speak())
console.log(dog.fullInfo())

// instanceof operator -> check if an object is an instance of a class or its subclasses
console.log(dog instanceof Dog)     // true, because dog is an instance of Dog
console.log(dog instanceof Animal)  // true, because Dog is a subclass of Animal, so dog is also an instance of Animal

/*
Conclusion:
1. Inheritance allows us to create a new class (child class) that is based on an existing class (parent class). The child class inherits properties and methods from the parent class, and can also have its own properties and methods.
2. We can override methods in the child class to provide a different implementation than the parent class. We can also call the parent class methods using super keyword.
3. The instanceof operator can be used to check if an object is an instance of a class or its subclasses.
4. Inheritance promotes code reusability and helps in creating a hierarchical structure of classes.
*/