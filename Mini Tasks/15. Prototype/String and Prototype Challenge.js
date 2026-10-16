function UserAccount(username, email, rawPhone) {
    this.username = username;
    this.email = email;
    this.rawPhone = rawPhone;
}

// Attached to the prototype, accessing data vai `this`:
UserAccount.prototype.getMaskedEmail = function () {
    const email = this.email;           // Accessing data via `this`

    const atIndex = email.indexOf('@');

    if (atIndex <= 1) return "Invalid Email";

    //get email without @
    const localPart = email.slice(0, atIndex);
    const domainPart = email.slice(atIndex);

    // First char + asterisks + last char
    const masked = localPart[0] + "*".repeat(localPart.length - 2) + localPart.at(-1);

    return masked + domainPart;
}

UserAccount.prototype.getFormattedPhone = function () {

    // Accessing data via `this`
    let rawPhone = this.rawPhone;

    // Removing white space from first and last.
    rawPhone = rawPhone.trim();

    // Adding leading zero if the number has less than 11 digits.
    rawPhone = rawPhone.padStart(11, "0");  // If the number is less than 11 digits, add leading zeros.

    // Formatting the number as 01xxxx-xxxxxx.
    const firstPortion = rawPhone.slice(0, 5);
    const lastPortion = rawPhone.slice(5);

    const format = firstPortion + '-' + lastPortion;

    return format;
}


UserAccount.prototype.getOwnDetails = function () {
    const ownKeys = [];

    for (const key in this) {
        // Object.hasOwn() checks if the property belogs directly to `this` instance
        // And NOT inherited from UserAccount.prototype
        if (Object.hasOwn(this, key)) {
            ownKeys.push(key);
        }
    }

    return ownKeys;
}

// const user1 = new UserAccount("Nazrul", "nazrul104n@gmail.com", "01880000000");

// console.log(user1.getMaskedEmail());
// console.log(user1.getFormattedPhone());
// console.log(user1.getOwnDetails());


function AdminAccount(username, email, rawPhone, permissions) {
    UserAccount.call(this, username, email, rawPhone);
    this.permissions = permissions;
}

// Link Admin.prototype to inherit from UserAccount.prototype
AdminAccount.prototype = Object.create(UserAccount.prototype);


// Fix the constructor pointer (Object.create overwrote it)
AdminAccount.prototype.constructor = AdminAccount;

AdminAccount.prototype.hasPermission = function (perm) {
    // Array.prototype.includes() returns true or false
    return this.permissions.includes(perm);
}


const user = new UserAccount("nazrul", "nazrul.dev@gmail.com", "1880000000");

const admin = new AdminAccount("superadmin", "admin@company.com", "1700000000", ["READ", "WRITE", "DELETE"]);

// Test string & formatting methods:
console.log("User infromations:")
console.log(user.getMaskedEmail());
console.log(user.getFormattedPhone());
console.log(user.getOwnDetails());
console.log('------------------------');
console.log();

// Test Inherited prototype methods on Admin:
console.log("Admin Informations:");
console.log(admin.getMaskedEmail());
console.log(admin.getFormattedPhone());
console.log(admin.hasPermission("DELETE"));
console.log(admin.hasPermission("BILLING"));
console.log(admin.getOwnDetails());
console.log('------------------------');
console.log();


// Prototype chain checks:
console.log(admin instanceof AdminAccount);
console.log(admin instanceof UserAccount);
console.log(Object.hasOwn(admin, "getMaskedEmail"));
console.log(Object.getPrototypeOf(AdminAccount.prototype) === UserAccount.prototype);
console.log(UserAccount.prototype.isPrototypeOf(admin));
console.log(Object.getPrototypeOf(admin) === AdminAccount.prototype);
console.log(admin.constructor);