// Initialize the price of the item
let price = 3.26;

// Cash-In-Drawer: 2D array storing denomination names and their amounts
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Get DOM elements for displaying results and handling user interaction
const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

// Formats and displays the change result in the UI
const formatResults = (status, change) => {
  // Display transaction status
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  
  // Add each denomination's change amount to display
  displayChangeDue.innerHTML += change
    .map(
      ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
    )
    .join('');
};

// Main function to handle cash register logic
const checkCashRegister = () => {
  // Convert user input and price to cents to avoid floating-point errors
  const cashInCents = Math.round(Number(cash.value) * 100);
  const priceInCents = Math.round(price * 100);

  // Check if customer has insufficient funds
  if (cashInCents < priceInCents) {
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';  // Clear input field
    return;
  }

  // Handle exact payment case
  if (cashInCents === priceInCents) {
    displayChangeDue.innerHTML = '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  // Calculate change needed (in cents)
  let changeDue = cashInCents - priceInCents;
  
  // Create reversed copy of CID with amounts converted to cents
  const reversedCid = [...cid]
    .reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);
  
  // Denomination values in cents (ordered highest to lowest)
  const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  
  // Initialize result object with default 'OPEN' status
  const result = { status: 'OPEN', change: [] };
  
  // Calculate total cash in drawer (in cents)
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  // Check if drawer has insufficient funds
  if (totalCID < changeDue) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  // Check if change will empty the drawer
  if (totalCID === changeDue) {
    result.status = 'CLOSED';
  }

  // Calculate change breakdown
  for (let i = 0; i <= reversedCid.length; i++) {
    // Process denomination if it can contribute to change
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      // Determine maximum possible amount from this denomination
      const possibleChange = Math.min(total, changeDue);
      // Calculate number of units of this denomination
      const count = Math.floor(possibleChange / denominations[i]);
      // Calculate actual amount to take from this denomination
      const amountInChange = count * denominations[i];
      // Reduce remaining change due
      changeDue -= amountInChange;

      // Add denomination to result if used
      if (count > 0) {
        // Convert back to dollars before storing
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }

  // Check if exact change couldn't be made
  if (changeDue > 0) {
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  // Display results and update UI
  formatResults(result.status, result.change);
  updateUI(result.change);
};

// Entry point for checking transaction results
const checkResults = () => {
  // Ignore if cash input is empty
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

// Updates cash drawer display and UI elements
const updateUI = change => {
  // Mapping for user-friendly denomination names
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };

  // Update cash drawer amounts if change was given
  if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      // Find corresponding denomination in drawer
      const targetArr = cid.find(
        ([denominationName]) => denominationName === changeDenomination
      );
      // Update amount (using cents conversion for precision)
      targetArr[1] =
        (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) / 100;
    });
  }

  // Reset UI elements
  cash.value = '';
  priceScreen.textContent = `Total: $${price}`;
  
  // Update cash drawer display with current amounts
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
      )
      .join('')}
  `;
};

// Add click event handler to purchase button
purchaseBtn.addEventListener('click', checkResults);

// Add keyboard support for Enter key in cash input
cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

// Initialize UI on first load
updateUI();