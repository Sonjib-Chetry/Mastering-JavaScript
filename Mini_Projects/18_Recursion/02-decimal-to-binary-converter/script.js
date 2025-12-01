// Get DOM elements for input, button, result display, and animation container
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");
const animationContainer = document.getElementById("animation-container");

// Animation data for visualizing the conversion process with timing and messages
const animationData = [
  {
    inputVal: 5,
    addElDelay: 1000,        // Delay to add element to container (ms)
    msg: 'decimalToBinary(5) returns "10" + 1 (5 % 2). Then it pops off the stack.',
    showMsgDelay: 15000,     // Delay to show explanation message
    removeElDelay: 20000,    // Delay to remove element
  },
  {
    inputVal: 2,
    addElDelay: 1500,
    msg: 'decimalToBinary(2) returns "1" + 0 (2 % 2) and gives that value to the stack below. Then it pops off the stack.',
    showMsgDelay: 10000,
    removeElDelay: 15000,
  },
  {
    inputVal: 1,
    addElDelay: 2000,
    msg: "decimalToBinary(1) returns '1' (base case) and gives that value to the stack below. Then it pops off the stack.",
    showMsgDelay: 5000,
    removeElDelay: 10000,
  }
];

// Recursive decimal to binary converter
const decimalToBinary = (input) => {
  // Base case: return '0' or '1' directly as strings
  if (input === 0 || input === 1) {
    return String(input);
  } else {
    // Recursive case: combine current remainder with previous results
    return decimalToBinary(Math.floor(input / 2)) + (input % 2);
  }
};

// Visualize the conversion process using animated call stack frames
const showAnimation = () => {
  result.innerText = "Call Stack Animation";

  animationData.forEach((obj) => {
    // Add animation frame element after specified delay
    setTimeout(() => {
      animationContainer.innerHTML += `
        <p id="${obj.inputVal}" class="animation-frame">
          decimalToBinary(${obj.inputVal})
        </p>
      `;
    }, obj.addElDelay);

    // Update frame with explanation message after delay
    setTimeout(() => {
      document.getElementById(obj.inputVal).textContent = obj.msg;
    }, obj.showMsgDelay);

    // Remove frame after specified delay
    setTimeout(() => {
      document.getElementById(obj.inputVal).remove();
    }, obj.removeElDelay);
  });

  // Show final conversion result after all animations complete
  setTimeout(() => {
    result.textContent = decimalToBinary(5);
  }, 20000);
};

// Validate input and handle conversion or animation
const checkUserInput = () => {
  const inputInt = parseInt(numberInput.value);

  // Input validation check
  if (!numberInput.value || isNaN(inputInt) || inputInt < 0) {
    alert("Please provide a decimal number greater than or equal to 0");
    return;
  }

  // Special case to show animation for input 5
  if (inputInt === 5) {
    showAnimation();
    return;
  }

  // Regular conversion for other valid inputs
  result.textContent = decimalToBinary(inputInt);
  numberInput.value = "";  // Clear input field
};

// Event listeners for button click and Enter key
convertBtn.addEventListener("click", checkUserInput);
numberInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});



/*
Three different implementations of decimal to binary conversion:
1. Iterative approach with step tracking arrays
2. Recursive countdown demonstration
3. Iterative string-building approach


// 1. Array-based implementation with debugging logs
const decimalToBinary = (input) => {
    // Arrays to track conversion steps for debugging purposes
    const inputs = [];
    const quotients = [];
    const remainders = [];
    
    // Handle zero input edge case
    if (input === 0) {
        result.innerText = "0";
        return;
    };
    
    // Continuous division by 2 until input is exhausted
    while (input > 0) {
        const quotient = Math.floor(input / 2);  // Get whole number quotient
        const remainder = input % 2;             // Get remainder (0 or 1)
        
        // Track conversion steps
        inputs.push(input);
        quotients.push(quotient);
        remainders.push(remainder);
        
        input = quotient;  // Update input for next iteration
    };
    
    // Debugging logs showing conversion steps
    console.log("Inputs: ", inputs);
    console.log("Quotients: ", quotients);
    console.log("Remainders: ", remainders);
    
    // Remainders are reversed to get correct binary order
    result.innerText = remainders.reverse().join("");
}

// 2. Recursive stack demonstration function
const countDownAndUp = (number) => {
    console.log(number);  // Log current number in call stack
    
    // Base case: stop recursion when reaching 0
    if (number === 0) {
        console.log("Reached base case");
        return;
    } else {
        // Recursive call with decremented number
        countDownAndUp(number - 1);
    };
};

// 3. Optimized iterative implementation using string building
const decimalToBinary = (input) => {
    let binary = "";  // Initialize output string
    
    // Handle zero input case directly
    if (input === 0) {
        binary = "0";
    };
    
    // Build binary string by prepending remainders
    while (input > 0) {
        binary = (input % 2) + binary;  // Add remainder to front of string
        input = Math.floor(input / 2);  // Update input for next iteration
    };
    
    // Update DOM with final result
    result.innerText = binary;
};


Implementation Notes:
- First method shows full conversion process but requires array reversal
- Second method demonstrates recursion mechanics
- Third method is most efficient with O(n) time complexity
- All implementations handle zero as special case
- Remainder collection order differs between array and string methods
*/