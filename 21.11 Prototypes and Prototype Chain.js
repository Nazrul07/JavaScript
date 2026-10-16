// Here is how code was written before ES6 classes 

// 1. Constructor function (acts like a constructor method)
function User(name, score) {
    // Own properties (unique to each instance)
    this.name = name;
    this.score = score;
}

// 2. Defining methods on the prototype (SHARED in memory by ALL instances!)
User.prototype.login = function () {
    console.log(`${this.name} has logged in.`);
};

User.prototype.increaseScore = function () {
    this.score++;
    return this.score;
};

// 3. Instantiating
const user1 = new User("Nazrul", 96);
const user2 = new User("Alex", 85);

user1.login(); // "Nazrul has logged in."
user1.increaseScore();
console.log(user1.score);

// Memory check: Do user1 and user2 have their own separate copy of login()?
console.log(user1.login === user2.login); // true! Both point to User.prototype.login

/*
    Why not define methods inside the constructor?
    -> If you put this.login = function() { ... } inside User, every new user would create a brand-new function in memory.
    -> Putting it on User.prototype means 10,000 users share one single function in memory.
*/




/*
    What the "new" Keyword Actually Does Under the Hood?
    - When we call new User("Nazrul", 100), JavaScript does 4 explicit steps:
        1. Creates a brand new empty object {}
        2. Sets that empty object's hidden [[Prototype]] to User.prototype (newObj.__proto__ = User.prototype).
        3. Calls User with `this` bound to that new object(User.call(newObj, "Nazrul", 100)).
        4. If the constructor didn't return an object, returns the newly created object.
*/





// ***Checking Inheritance & Ownership***
// Main goal is to see, how to inspect prototypes safely:
const user = new User("Nazrul", 100);

// chech if a property is directly on the instance, or inherited:
console.log(user.hasOwnProperty("name"));
// true (directly on user instance)
console.log(user.hasOwnProperty("login"));
// false (inherited from User.prototype)

// check prototype chain:
// __proto__ is the hidden property that points to the prototype:
console.log(user.__proto__);
// User.prototype

// We can check the prototype chain explicitly:
console.log(Object.getPrototypeOf(user)); // User.prototype

// We can check if an object is an instance of a constructor:
console.log(user instanceof User); // true

// Modern way to inspect the prototype (aviod direct `__proto__` in production):
console.log(Object.getPrototypeOf(user) === User.prototype); // true




// ***Prototype Inheritance (Parent & Child without class)***

function Admin(name, score, role) {
    // 1. Call parent constructor (like super(name, score))
    User.call(this, name, score);
    this.role = role;
}

// 2. Link Admin.prototype to inherit from User.prototype
Admin.prototype = Object.create(User.prototype);

// 3. Fix the constructor pointer (Object.create overwrote it)
Admin.prototype.constructor = Admin;

// 4. Add Admin-specific methods
Admin.prototype.deleteUser = function (targetUser) {
    console.log(`${this.name} deleted ${targetUser.name} `)
};

const admin1 = new Admin("SuperAdmin", 999, "manager");
admin1.login();
admin1.deleteUser(user1);