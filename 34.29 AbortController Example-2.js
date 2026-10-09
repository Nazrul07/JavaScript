/*

const controller = new AbortController();

fetch(url1, {
    signal: controller.signal
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


const controller = new AbortController();

fetch(url2, {
    signal: controller.signal
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

controller.abort();

*/

// We cannot declare the same const controller twice in the same scope.
// We would get something like: "Identifier 'controller' has already been declared"

// But this is valid:
const controller1 = new AbortController();

fetch(url1, {
    signal: controller1.signal
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));


const controller2 = new AbortController();

fetch(url2, {
    signal: controller2.signal
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

controller2.abort(); // Only aborts the Fetch request that was given. It does not abort url1.

// Now it's very clear:
/*
    controller1 ───── signal ─────> fetch(url1)


    controller2 ───── signal ─────> fetch(url2)
                    │
                    │
                controller2.abort()
                    ↓
                ABORT url2
*/