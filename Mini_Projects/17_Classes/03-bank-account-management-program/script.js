
// 1. Define BankAccount class
class BankAccount {
  constructor() {
    this.balance = 0; // default balance
    this.transactions = []; // store transactions
  }

  // 2. Deposit method
  deposit(amount) {
    if (amount > 0) {
      this.transactions.push({ type: "deposit", amount: amount });
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`;
    }
    return "Deposit amount must be greater than zero.";
  }

  // 3. Withdraw method
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.transactions.push({ type: "withdraw", amount: amount });
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
    }
    return "Insufficient balance or invalid amount.";
  }

  // 4. Check balance method
  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  // 5. List all deposits
  listAllDeposits() {
    const deposits = this.transactions
      .filter(tx => tx.type === "deposit")
      .map(tx => tx.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  // 6. List all withdrawals
  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter(tx => tx.type === "withdraw")
      .map(tx => tx.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

// 7. Create an instance of BankAccount
const myAccount = new BankAccount();

// Add at least 5 transactions (at least 2 deposits, at least 2 withdrawals, balance > $100)
myAccount.deposit(200); // deposit 1
myAccount.deposit(150); // deposit 2
myAccount.withdraw(50); // withdraw 1
myAccount.withdraw(70); // withdraw 2
myAccount.deposit(100); // deposit 3
