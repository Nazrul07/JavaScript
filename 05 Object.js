// Think of JS objects as unordered_map<string, any> from C++, but much more powerful.

const person = {
    name: "Alice",
    age: 30,
    hobbies: ["reading", "hiking", "coding"],
    isEmployed: true
}

// Accessing properties
console.log(person.name);       // Alice
console.log(person["age"]);     // 30

// Adding new properties
person.city = "New York";       // If the property doesn't exist, it will be created
console.log(person.city);       // New York

// Modifying existing properties
person.age = 31;                // If the property exists, it will be updated
console.log(person.age);        // 31

// Deleting properties
delete person.isEmployed;       // Removes the property from the object
delete person.country;          // Deleting a non-existent property does nothing
console.log(person.isEmployed); // undefined

console.log(person)
console.log()


// Check if a property exists
console.log("name" in person);       // true
console.log("isEmployed" in person); // false