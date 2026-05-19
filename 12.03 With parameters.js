function multiplier(factor){
    return function(number){
        return number * factor
    }
}

let twice = multiplier(2)
let thrice = multiplier(3)
let half = multiplier(0.5)

console.log(twice(5))
console.log(half(1002))
console.log(thrice(7))