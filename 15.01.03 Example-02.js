function sanitize(value) {
    if(typeof value == 'string') {
        return value
            .replace(/'/g, "''")
            .replace(/;/g, '')
            .replace(/--/g, '')
    }
    return value
}

function sql(strings, ...values) {
    // console.log(strings)  // array of string literals
    // console.log(values)   // array of interpolated values
    // console.log('---')
    const sanitizedValues = values.map(v => sanitize (v))   // clean all the values first
    return strings.reduce((result, string, val) => {
        return result + string + (sanitizedValues[val] ?? "")   // ?? means if sanitizedValues[val] is undefined, use empty string instead
    }, "")  // initialize the accumulator with an empty string
}

let username = "Alex"
let id = 5

let query = sql`SELECT * FROM users WHERE name = '${username}' AND id = ${id}`
console.log(query)
// → SELECT * FROM users WHERE name = 'Alex' AND id = 5  ✅ clean



let hackerInput = "'; DROP TABLE users; --"

let newQuery = sql`SELECT * FROM users WHERE name = '${hackerInput}'`
console.log(newQuery)

// Step 1 — sanitize() cleans the hacker input:
// "'; DROP TABLE users; --"
//  ↓ replace ' with ''
// "''; DROP TABLE users; --"
//  ↓ remove ;
// "'' DROP TABLE users --"
//  ↓ remove --
// "'' DROP TABLE users "

// Final query:
// SELECT * FROM users WHERE name = ''' DROP TABLE users '
// ✅ No longer valid SQL — attack blocked!


/*
let userInput = "'; DROP TABLE users; --"

// ❌ WITHOUT tag — dangerous raw string
let badQuery = `SELECT * FROM users WHERE name = '${userInput}'`
// → SELECT * FROM users WHERE name = ''; DROP TABLE users; --'
// 💀 Runs 2 SQL commands — deletes your table!

// ✅ WITH tag — sanitized
let safeQuery = sql`SELECT * FROM users WHERE name = '${userInput}'`
// → SELECT * FROM users WHERE name = ''' DROP TABLE users '
// 🛡️ Treated as plain text — safe!
*/