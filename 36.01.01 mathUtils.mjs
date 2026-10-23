// In Node.js, when using import and export without a package.json,
// we use the .mjs file extension (Modular JavaScript).
// This tells Node: "Treat this file as a modern ES Module!"

// 1. NAMED EXPORTS (Multiple utilities in one file):
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// 2. DEFAULT EXPORT (The primary thing this file represents):
// Only ONE default export allowed per file!
export default class Calculator {
    multiply(a, b) {    // Instance method
        return a * b;
    }

    static divide(a, b) {
        return a / b;
    }
}

/*
    Here the engine translates it into this:
    1. Static Method: attached DIRECTLY to the Calculator object itself:
        Calculator.divide = function(a, b) {
            return a / b;
        };
    
    2. Instance Method: attached to the Calculator.prototype:
        Calculator.prototype.multiply = function(a, b) {
            return a * b;
        };


    -> static methods belongs to the Class itself - Call with CalssName.method().
    -> Regular methods belongs to the Instances created by new with instance.method().
*/