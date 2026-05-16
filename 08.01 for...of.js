// use this for Arrays, Strings, Sets and Maps. not for objects

let nums = [10, 13, 15, 20, 25, 30, 35]

for(let num of nums){
    console.log(num);
}
console.log()

// Works in string too
for(let ch of "Nazrul"){
    console.log(ch)
}
console.log()


// With index — use entries()
for(let [index, value] of nums.entries()){
    console.log(index, ": ", value)
}