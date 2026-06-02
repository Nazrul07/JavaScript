// ||=  -> Assign if current value is falsy
let a = null

a ||= 'default value'       // ( ||= ) means "assign if falsy"

console.log(a) // 'default value'

let b = "existing value"
b ||= 'default value' 

console.log(b) // 'existing value'



//  &&=  -> Assign if current value is truthy
let c = 'initial value'
c &&= 'new value'       // ( &&= ) means "assign if truthy"

console.log(c) // 'new value'

// 0 means falsy value



// ??=  -> Assign if current value is nullish (null or undefined)
let d = null
d ??= 'default value'       // ( ??= ) means "assign if nullish"

console.log(d) // 'default value'