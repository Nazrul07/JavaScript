for(var k = 0 ; k < 3 ; k++){
    setTimeout(() => {
        console.log(k)
    }, 1000)
    // Waits 1000ms (1 second), then runs the function 
}
// Output: 3, 3, 3 (unexpected behavior)
// var is function scoped — there is only one shared i for the entire loop.
// By the time the functions wake up, the loop already finished and i became 3.

console.log('------------------')   // Even this will run before the setTimeout callbacks,
// because they are asynchronous and will be executed after the current call stack is empty.


for(let m = 0 ; m < 3 ; m++){
    console.log(m);
}