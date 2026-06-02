function evenRange(start, end){
    return {
        [Symbol.iterator]() {
            let current = start % 2 === 0 ? start : start + 1

            return {
                next() {
                    if(current <= end) {
                        let value = current
                        current += 2
                        return { value, done: false }
                    }
                    return { value: undefined, done: true }
                }
            }
        }
    }
}

for(let n of evenRange(1, 20)) {
    console.log(n)
}

const evens = [...evenRange(1, 15)]
console.log(evens)