// What if we use controller.abort() inside .then()?

const controller = new AbortController();

fetch(url, {
    signal: controller.signal
})
    .then(response => {
        controller.abort();

        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });


// Here: controller.abort(); -> runs after Fetch has already fulfilled and given us the response.
// So We're no longer cancelling the original Fetch network operation if it has already completed.
// The important distinction is:

/*
    fetch()
       ↓
    request
       ↓
    server responds
       ↓
    Response received
       ↓
    .then(response => {
           controller.abort();
       })
*/

// At that point, the Fetch request has already completed.
// So calling abort() there generally doesn't undo the completed request.