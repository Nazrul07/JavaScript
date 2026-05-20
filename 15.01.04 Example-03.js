// html tag (prevents XSS attacks)
// XSS = hacker injects <script> into our pages

function html(string, ...values) {
    const escaped = values.map(v =>
        String(v)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")  // < becomes &lt; -> brower shows < won't run it
            .repeat(/>/g, "&gt;")
    )

    return strings.reduce((result, str, i) => {
        return result + str + (escaped[i] ?? "")
    }, "")
}

let userComment = "<script> alert('Hacked!') </script>"


// Without tag
`<p>${userComment}</p>`
// → <p><script>alert('Hacked!')</script></p>
// Script runs on the page!


// With tag
html`<p>${userComment}</p>`
// → <p>&lt;script&gt;alert('Hacked!')&lt;/script&gt;</p>
// Displays as plain text — never runs!


/*
One rule to remember

A tag function always receives:

strings[] → text between the ${} — always one more than values
values[] → the ${} contents — your dynamic data
*/