const user = {
    id: 1,
    profile: {
        name: 'Alex',
        address: {
            city: "Dhaka",
            zip: 1200
        }
    }
}

const {
    id: userId,
    profile: {
        name: userName,
        address: {
            zip
        }
    }
} = user

console.log(userId);        // 1
console.log(userName);      // Alex
console.log(zip);           // 1200

console.log(user.profile.name)          // Alex
console.log(user.profile.address.zip)  // 1200


// The main thing, we use destructuring to object to extract values and assign them to variables in a more concise way.
// Beause using "user.profile.address.zip" like 10 times in a code is not looking good.
// So, we can use destructuring to extract the values we need and assign them to variables, which makes our code cleaner and easier to read.

/*
Dot notation      →  use once or twice
Destructuring     →  use when accessing same value multiple times
*/


/* 
Then why not manual assigning ?

zip = user.profile.address.zip   →  simple, readable, always works

Destructuring                    →  better when:
                                    - extracting many values at once
                                    - inside function parameters
                                    - working with API responses (lots of nested data)
                                    - when we want to rename variables while extracting

For 1 or 2 values — just do zip = user.profile.address.zip, it's simpler and easier to read.
Destructuring shines when we have many values to extract at once.
*/