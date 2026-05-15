function sum(...nums){
    let total = 0;
    for(let n of nums){
        total += n;
    }
    return total;
}

function multiply(...nums){
    let total = 1;
    for(let n of nums){
        total *= n;
    }
    return total;
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

console.log(multiply(2, 5, 4));