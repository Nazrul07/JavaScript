const calculator = {
    value: 0,
    add(n) {
        this.value += n;    // This refers to the calculator object
        return this;        // Returning this allows for method chaining
    },
    substact(n){
        this.value -= n;
        return this;
    },
    result() {
        return this.value;
    }
}

// Creating a new calculator object
const obj1 = Object.create(calculator);
obj1.add(5).add(10).substact(3);    // Method chaining
console.log(obj1)                   // return object
console.log(obj1.result())
console.log(obj1.value)