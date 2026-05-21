// Utility function

class MathHelper {
    static add(a, b){
        return a + b
    }

    static subtract(a, b){
        return a - b
    }

    static multiply(a, b){
        return a * b
    }

    static divide(a, b){
        if (b === 0) {
            throw new Error("Cannot divide by zero");
        }
        return a / b
    }
}

console.log(MathHelper.add(5, 4));
console.log(MathHelper.subtract(5, 4));
console.log(MathHelper.multiply(5, 4));
console.log(MathHelper.divide(5, 4));


// No need to create object - just call on class directly.
// This is the beauty of static methods.