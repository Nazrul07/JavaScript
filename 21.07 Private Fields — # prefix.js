// Used in modern JS

class bankAccount {
    #balance                        // Private field declaration
    #transactionHistory = []        // Private with default value

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        this.#balance += amount
        this.#transactionHistory.push(`Deposited: +${amount}`)
        console.log('Successfully deposited:', amount)
    }

    withdraw(amount) {
        if(amount > this.#balance) {
            console.log("Insufficient funds")
            return
        }
        this.#balance -= amount
        this.#transactionHistory.push(`Withdrawal: -${amount}`)
        console.log('Successfully withdrew:', amount)
        console.log('New balance:', this.#balance)
    }

    get balance() {
        return `Balance: ${this.#balance}`
    }

    get log() {
        return `Transaction Log: [${this.#transactionHistory.join(', ')}]`
    }
}

const myAccount = new bankAccount(1000)
console.log(myAccount.balance)

myAccount.deposit(500)
myAccount.deposit(200)
myAccount.deposit(1000)
myAccount.withdraw(300)

console.log(myAccount.balance)
console.log(myAccount.log)

// myAccount.#balance = 99999999        // SyntaxError: Private field '#balance' must be declared in an enclosing class

myAccount.withdraw(10000)               // Insufficient funds
console.log(myAccount.balance)


/*
Conclusion:
- Private fields are declared with a # prefix and are only accessible within the class.
- They cannot be accessed or modified from outside the class, ensuring encapsulation and data privacy.
- Attempting to access or modify private fields from outside the class will result in a syntax error.
- Private fields can be used to store sensitive data or implementation details that should not be exposed to the outside world.
- They help in maintaining the integrity of the class and prevent unintended side effects from external code.
*/