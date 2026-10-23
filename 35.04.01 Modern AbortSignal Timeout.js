// Old way

const controller = new AbortController();
const timer = setTimeout(() => controller.abort(), 1000);

try {
    const res = await fetch(URL, {
        signal: controller.signal
    })
} catch (error) {
    if (error.name === 'AbortError') {
        throw new Error(`Request time out: ${error.message}`, { cause: error });
    }
} finally {
    clearTimeout(timer);
}


// New modern way
try {
    const res = await fetch(URL, {
        signal: AbortSignal.timeout(3000)
    });
} catch (error) {
    if (error.name === "TimeoutError") {
        throw new Error(`Request time out: ${error.message}`);
    }
}

/*
    When an operation is cancelled, JavaScript throws a specific DOMException.
    In production, we must distinguish between:
        1. TimeoutError: Triggered automatically because time ran out (AbortSignal.timeout).
        2. AbortError: Triggered manually because the user clicked a "Cancel" button or navigated away (controller.abort()).
*/