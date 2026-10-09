// What if we put abort() inside the second .then()?

const controller = new AbortController();

fetch(url, {
    signal: controller.signal
})
    .then(response => response.json())
    .then(data => {
        controller.abort();

        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// Again, by the time we reach: .then(data => {}
// the response body has already been read and the Promise has fulfilled.
// So: controller.abort(); -> is too late to cancel that completed Fetch.
// It doesn't mean: "Cancel the .then()."
// It only aborts the operation associated with the signal if that operation is still ongoing.


/*
What if we put abort() inside .catch()?

- .catch() runs because something has already gone wrong.
If the Fetch was already aborted: controller.abort();
then .catch() receives the resulting AbortError.

Calling: controller.abort(); -> again doesn't restart or cancel something new.
So this is generally unnecessary calling it again inside .catch().
*/