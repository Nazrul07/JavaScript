// So that instead of var we will use let and const in the loops

for(let i = 0 ; i < 3 ; i++){
    setTimeout(() =>{
        console.log(i)
    }, 1000)
}

for(let j = 0 ; j < 2 ; j++){
    setTimeout(() => {
        console.log(j)
    }, 500)
}

// Same thing will apply here for setTimeout and setInterval. But unlike var, let and const will not cause any problem in the loops.