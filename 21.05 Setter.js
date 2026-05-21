// Intercepts when we assign a value to a property of an object, and allows us to execute custom code when that happens.

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    set info(value) {   // set means - when we assign a value to the info property, this function will be called
        [this.name, this.age] = value.split(',')  // we split the value by comma and assign it to name and age
        //                            ↑
        //                 splits "Bob,30" into ["Bob", "30"]
        //                 then destructures → name="Bob", age="30"
    }
}

const p = new Person('Alice', 25)
console.log(p.name)

p.info = 'Bob,30'  // this will call the setter function and update name and age   
console.log(p.name)  // Bob
console.log(p.age)   // 30


// By doing this we are just reassigning the name and age properties of the object, but we are doing it through a setter function that allows us to control how the values are assigned.
// And now original name and age properties are updated when we assign a value to the info property.
console.log('-----------------------------')


/*
Why do we need setters?
1. Validation: We can add validation logic in the setter to ensure that the value being assigned is valid. For example, we can check if the age is a positive number before assigning it.

2. Encapsulation: Setters allow us to hide the internal implementation of how the properties are stored and manipulated. We can change the internal structure of the object without affecting the external code that uses it.

3. Computed Properties: Setters can be used to create computed properties that derive their values from other properties. For example, we can have a fullName property that combines firstName and lastName.
*/

// Full example of above these three points in one
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName
        this.lastName = lastName
    }

    set userAge(value) {
        if (value < 0) {
            console.error('Age must be a positive number')
            return
        }
        this.age = value
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const user = new User('John', 'Doe', 30)
console.log(user.fullName)      // John Doe     -> calls the getter for fullName
user.fullName = 'Jane Smith'    // updates firstName and lastName       -> calls the setter for fullName
console.log(user.fullName)      // Jane Smith
user.userAge = -5               // logs error message
console.log(user.age)           // still 30, because the invalid age was not assigned

// One more catche, here fullName is both a getter and a setter. When we assign a value to fullName, it calls the setter, and when we access fullName, it calls the getter. This allows us to have a computed property that can be both read and written to.