const name = "Jhon Doe"     // global variable
let name2 = "Alina"         // global variable
var name3 = "Charlie"       // global variable

const obj = {
    name: "Bob",

    // Level 1
    outer: function() {
        console.log("Regular: ", this.name)

        // Level 2
        const inner = () => {
            console.log("Inner (arrow): ", this.name)

            // Level 3
            const innerMost = () => {
                console.log("Inner most (arrow): ", this.name)
            }
            innerMost()
        }
        inner()
    },

    arrowOuter: () => {
        console.log("Arrow const: ", this.name)
        console.log("Arrow let: ", this.name2)
        console.log("Arrow var: ", this.name3)
    }
}
obj.outer()
obj.arrowOuter()

/* In browser environment,

Output will be:
Regular:  Bob
Inner (arrow):  Bob
Inner most (arrow):  Bob
Arrow const:  undefined
Arrow let:  undefined
Arrow var:  Charlie
*/