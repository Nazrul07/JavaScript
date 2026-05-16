for(var i = 0 ; i < 3 ; i++){
    setTimeout(() =>{
        console.log(i)
    }, 1000)
}

for(var j = 0 ; j < 2 ; j++){ // This will run before the previous loop. Cause the previous loop's setTimeout is more than this loop's setTimeout.
    setTimeout(() => {
        console.log(j)
    }, 500)
}

// Output will be: 2 2 3 3 3. Because of the var keyword, the value of i and j will be 3 and 2 respectively when the setTimeout callback is executed.