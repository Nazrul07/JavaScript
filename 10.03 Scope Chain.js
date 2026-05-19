let x = "global";

function outer() {                  // accessible everywhere
    let x = "outer";

    function inner() {              // only accessible inside outer
        let x = "inner";
        console.log(x); // "inner" — found locally

        function innerMost(){       // only accessible inside inner
            console.log(x); // "inner" — not found locally, goes up to inner
        }
        innerMost();
    }

    function middle() {             // only accessible inside outer
        // no x here — goes up to outer
        console.log(x); // "outer"
    }

    inner();
    middle();
}

outer();
console.log(x); // "global"