// use this for objects - Don't use for...in on arrays — it iterates over indices as strings and can behave unexpectedly.
const person = {
    name: 'Nazrul',
    age: 25,
    skills: ['JavaScript', 'Python', 'C++'],
    isEmployed: false
}

for(let key in person) {
    console.log(key, "->", person[key]);
}


// for...in gives us -> keys
// for...of gives us -> values