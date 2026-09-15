fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error("HTTP Error: " + response.status);
            // Promise chain becomes rejected if the response is not ok. And then runs the catch block.
            // Here we are using throw new Error() to stop normal execution of this promise chain and turn this into a rejected promise.
            // if we just used console.log("Request failed") then the promise chain would continue to run and the catch block would not be executed. That's why the throw new Error() is used here to stop the normal execution of this promise chain and turn this into a rejected promise.
        }

        return response.json();
    })
    .then(data =>{
        console.log("Data received!");
    })
    .catch(error =>{
        console.log("Error: " + error.message);
    })