const user = {
    profile:{
        address:{
            city : "New York"
        }
    }
}

/*
Why we don't need to define city separately?
- Because city is a property of address, which is a property of profile, which is a property of user.
  So we can access it directly through the chain of properties without needing to define it separately.

  console.log(city) -> ReferenceError: city is not defined
*/

// Inside an object                 {}: colon
// Creating/updating a variable     = equals

// C++ style — crashes if intermediate is null
console.log(user.profile.address.city);     // fine here, but risky

// Safe access
console.log(user.profile?.address?.city)    // Output: "New York"
console.log(user.profile?.settings?.city)   // Output: undefined - doesn't throw an error, just returns undefined