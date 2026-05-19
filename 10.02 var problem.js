// Classic problem with var in loops

for(var i = 0 ; i < 3 ; i++){
    console.log(i);
}
console.log(i); // 3 (unexpected behavior)
console.log('------------------')

for(let j = 0 ; j < 3 ; j++){
    console.log(j);
}
// console.log(j); // ReferenceError: j is not defined (expected behavior)
console.log('------------------')
