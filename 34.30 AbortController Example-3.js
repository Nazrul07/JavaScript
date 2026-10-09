// One signal can be connected to a Fetch request.
// Aborting that signal affects the requests using that signal.

// For example:
const controller = new AbortController();

fetch(url1, {
    signal: controller.signal
});

fetch(url2, {
    signal: controller.signal
});

controller.abort();

// Now both requests are connected to the same signal:

/*
                      ┌── fetch(url1)
                      │
    controller.signal ┤
                      │
                      └── fetch(url2)

    controller.abort()
        ↓
    signal becomes aborted
        ↓
    both Fetch requests are aborted
*/