fetch(url)
    .then(response => {

        const contentType =
            response.headers.get("Content-Type");

        console.log("Content type:", contentType);

        return response.json();
    })
    .then(data => {
        console.log(data);
    });


// Now we can see what kind of content the server says it returned.