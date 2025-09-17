// Get the button element with id "sort" to trigger sorting when clicked
const sortButton = document.getElementById("sort");

// Function to retrieve input values, sort them, and update the UI
const sortInputArray = (event) => {
    event.preventDefault();  // Prevent the default form submission behavior

    // Collect all dropdown elements with class "values-dropdown", convert NodeList to array,
    // then map each dropdown's value to a number
    const inputValues = [...document.getElementsByClassName("values-dropdown")]
        .map((dropdown) => Number(dropdown.value));

    // Choose one of the sorting algorithms by uncommenting the corresponding line:
    // const sortedValues = insertionSort(inputValues); // using insertionSort
    const sortedValues = bubbleSort(inputValues);    // using bubbleSort
    // const sortedValues = selectionSort(inputValues); // using selectionSort
    // const sortedValues = inputValues.sort((a, b) => { // using built-in .sort()
    //     return a - b;
    // });

    // Update the UI with the sorted values
    updateUI(sortedValues);
};

// Function to display sorted values in the UI
const updateUI = (array = []) => {
    // Iterate over each number in the array along with its index
    array.forEach((num, i) => {
        // Select the output element corresponding to the current index
        const outputValueNode = document.getElementById(`output-value-${i}`);
        // Set the text content of the element to the current number
        outputValueNode.innerText = num;
    });
};

// Bubble sort implementation: repeatedly swap adjacent elements if they are in the wrong order
const bubbleSort = (array) => {
    for (let i = 0; i < array.length; i++) {  // Outer loop for each pass
        for (let j = 0; j < array.length - 1; j++) {  // Inner loop for pairwise comparisons
            if (array[j] > array[j + 1]) {  // If the current element is greater than the next
                const temp = array[j];      // Store current element in temp
                array[j] = array[j + 1];    // Move next element into current position
                array[j + 1] = temp;        // Place temp (original current) in next position
            }
        }
    }
    return array;  // Return the sorted array
};

// Selection sort implementation: repeatedly select the minimum element and swap it into place
const selectionSort = (array) => {
    for (let i = 0; i < array.length; i++) {  // Iterate over each position in the array
        let minIndex = i;  // Assume the current index holds the minimum value

        for (let j = i + 1; j < array.length; j++) {  // Find the true minimum in the remainder
            if (array[j] < array[minIndex]) {  // If a smaller element is found
                minIndex = j;  // Update minIndex to this new position
            }
        }

        // Swap the element at i with the element at minIndex
        const temp = array[i];
        array[i] = array[minIndex];
        array[minIndex] = temp;
    }
    return array;  // Return the sorted array
};

// Insertion sort implementation: build the sorted array one item at a time
const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {  // Start from the second element
        const currValue = array[i];  // Store the value to be inserted
        let j = i - 1;  // Start comparing with the element on the left

        // Shift elements to the right until the correct position is found
        while (j >= 0 && array[j] > currValue) {
            array[j + 1] = array[j];  // Move the larger element one position right
            j--;  // Move left in the array
        }

        // Insert the current value into its sorted position
        array[j + 1] = currValue;
    }
    return array;  // Return the sorted array
};

// Attach the click event listener to the sort button to invoke sorting
sortButton.addEventListener("click", sortInputArray);
