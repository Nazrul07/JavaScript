function createValidator(min, max) {
    return (value) => value >= min && value <= max;
}

const isValidAge  = createValidator(0, 120);
const isValidScore = createValidator(0, 100);

console.log(isValidAge(25));    // true
console.log(isValidAge(150));   // false
console.log(isValidScore(95));  // true