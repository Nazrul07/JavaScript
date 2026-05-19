function makeAdder(){
    const adders = []

    for(let i = 0 ; i < 3 ; i++){ // If we used var instead of let, all three would give 13 — because var doesn't create a new scope per iteration.
        adders.push((x) => x + i)
    }
    return adders
}

const [add1, add2, add3] = makeAdder()
console.log(add1(10)) // 11
console.log(add2(10)) // 12
console.log(add3(10)) // 13

/*
CLOSURE                     +               let SCOPE
──────────────────────────────────────────────────────
each function remembers                     each iteration has
its own i even after                        its own separate i
makeAdders() is done                        not shared with others
*/