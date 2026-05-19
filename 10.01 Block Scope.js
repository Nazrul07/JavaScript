{
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
console.log(c); // 30

// This is exactly why var is dangerous and we should always use let/const.