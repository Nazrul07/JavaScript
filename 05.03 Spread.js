// Example 1 — Updating a User Profile
const user = {
    name: 'Alice',
    age: 30,
    location: 'New York'
}

const updatedUser = {
    ...user,
    age: 31,
    location: 'San Francisco',
    profession: 'Software Engineer'
}

console.log(updatedUser)


// Example 2 — Merging Two Objects
const personalInfo = {
    name: 'Nazrul',
    age: 25,
    city: 'Chittagong'
}

const jobInfo = {
    profession: ['Software Engineer', 'Web Developer'],
    skills: ['C++', 'Python', 'JavaScript']
}

const contactInfo = {
    email: 'Nazrul104n@gmail.com'
}

const completeProfile = {
    ...personalInfo,
    ...jobInfo,
    ...contactInfo
}

console.log(completeProfile)



// One Rule to Remember
const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const mergedObj = { ...obj1, ...obj2 }  // In this case the value of 'b' from obj2 overwrites the value from obj1. Or I can say the later value of 'b' takes precedence over the earlier one.
console.log(mergedObj)                  // Output: { a: 1, b: 3, c: 4 }