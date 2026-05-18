function createBankAccount(initialBalance){
    let balance = initialBalance

    return{
        deposit(amount){
            balance += amount
            console.log(`Deposited ${amount}. New balance: ${balance}`)
        },

        withdraw(amount){
            if(amount > balance){
                console.log(`Insufficient funds. Current balance: ${balance}`)
            }else{
                balance -= amount
                console.log(`Withdrew ${amount}. New balance: ${balance}`)
            }
        },

        getBalance(){
            console.log(`Current balance: ${balance}`)
        }
    }
}

const myAccount = createBankAccount(500)
myAccount.getBalance()
myAccount.deposit(10000)
myAccount.deposit(1500)
myAccount.withdraw(20000)
myAccount.withdraw(10000)
myAccount.getBalance()

myAccount.balance = 1000000 // This will not change the actual balance. Because balance is private and cannot be accessed directly.
myAccount.getBalance()