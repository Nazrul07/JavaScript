function highlight(strings, ...values) {
    return strings.reduce((result, str, val) =>{
        return result + str + (values[val] !== undefined ? `**${values[val]}**` : '')
    }, "")
}

let name = "Alex"
let score = 92

let result = highlight`My name is ${name} and my score is ${score}`

console.log(result)