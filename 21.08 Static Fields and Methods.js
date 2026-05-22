class MathUtils {
    static PI = 3.14159;

    static square(x) { return x * x }
    static cube(x) { return x * x * x }
    static clamp(value, min, max) { return Math.min(Math.max(value, min), max) }
}

console.log(MathUtils.PI);
console.log(MathUtils.square(5));
console.log(MathUtils.cube(3));
console.log(MathUtils.clamp(10, 0, 5));

/*
Why static?

class MathUtils {
    square(x) { return x * x }
    cube(x)   { return x * x * x }
}

// To use square() — we MUST create an object first
const math = new MathUtils()   // ← pointless object creation
math.square(5)                  // → 25

// This feels WRONG — why create an object just to do math?
// MathUtils has no personal data like name, age etc.
// It's just a collection of math tools
// Creating an object just to call a utility function is wasteful and unnecessary.


// Static solves this — no object needed
// Call directly on class — no object needed
*/