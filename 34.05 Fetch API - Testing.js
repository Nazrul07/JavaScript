// .catch() can catch errors from previous .then()
fetch(url)
    .then(response => {
        throw new Error("Something went wrong");
    })
    .catch(error => {
        console.log(error.message);
    });

// The error was thrown inside .then(). But .catch() catches it.

// fetch()
//  ↓
// .then()
//  ↓
// throw Error
//  ↓
// rejected Promise
//  ↓
// .catch()