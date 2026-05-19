let nums = [10, 20, 15, 31, 39, 32]

// map — transform each element, returns NEW array
let doubled = nums.map(x => x * 2)
console.log(doubled)

let square = nums.map(x => x*x)
console.log(square)


// filter — keep elements that match condition, returns NEW array
let events = nums.filter(x => x % 2 == 0)
console.log(events)

let newEvents = nums.filter(x => x+10 <= 40)
console.log(newEvents)


// reduce — collapse array into single value
let sum = nums.reduce((acc, x) => acc+x, 0)
console.log(sum)

let result = nums.reduce((acc, x) => {
    if(x % 2 == 0){
        acc.even += x;
    }
    else{
        acc.odd += x;
    }
    return acc;
}, {even: 0, odd: 0})

console.log(result)     // Returns as an object