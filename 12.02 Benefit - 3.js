// General approach — data and functions are separate, easy to lose track

let balance = 0
function deposit(amount) { balance += amount }
function withdraw(amount) { balance -= amount }
function getBalance() { return balance }

// Closure — everything is bundled together neatly
function createBankAccount() {
    let balance = 0
    return {
        deposit:    function(amount) { balance += amount },
        withdraw:   function(amount) { balance -= amount },
        getBalance: function() { return balance }
    }
}

const user1 = createBankAccount();
const user2 = createBankAccount();

user1.deposit(100);
user2.deposit(200);
user1.withdraw(30);
user2.deposit(50);
user1.deposit(20);

console.log(user1.getBalance()) // 90
console.log(user2.getBalance()) // 250



/*
Problem                 General Approach                Closure

Data safety             Anyone can modify               Private & protected
Multiple instances      Share same data                 Each has own data
Organisation            Data & functions scattered      Bundled together
*/