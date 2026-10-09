// controller.abort() does NOT automatically know about a fetch().
// The connection is created by signal: controller.signal.


// This is the actual connection
const controller = new AbortController();

fetch(url,
    {
    signal: controller.signal
    }
);

// Start this Fetch request, and make it listen to this controller's signal.

/*
    controller
        │
        │ signal
        ↓
    fetch(url)
*/

// Then: controller.abort();

// means:
/*
    controller
        │
        │ "ABORT!"
        ↓
    signal
        │
        ↓
    fetch(url)
        │
        ↓
    request aborted
*/