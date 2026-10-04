// When a server sends a file, image, or other binary data, we may use: response.blob()

// For example:

// response.json()  → JSON data
// response.text()  → text
// response.blob()  → binary/file-like data

// The Response object contains the response body, but we choose a method to read that body according to its format.