function add(a, b){
    return a + b;
}

console.log(add(2, 5)); // 7

// Functions can also be assigned to variables
let sum = add;
console.log(sum(3, 4)); // 7