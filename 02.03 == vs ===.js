// == does type coercion (avoid this)
console.log(0 == false);   // true  ← dangerous!
console.log("" == false);  // true  ← dangerous!

// === checks value AND type (always use this)
console.log(0 === false);  // false ← correct
console.log(1 === 1);      // true