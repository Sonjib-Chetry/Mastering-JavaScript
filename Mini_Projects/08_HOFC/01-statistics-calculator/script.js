// Calculates the mean (average) of an array of numbers
const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

// Calculates the median (middle value) of a sorted array
const getMedian = (array) => {
    const sorted = array.toSorted((a, b) => a - b); // Sort array in ascending order
    const median = sorted.length % 2 === 0
        // If even number of elements, average the two middle values
        ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
        // If odd, return the middle element
        : sorted[Math.floor(sorted.length / 2)];
    return median;
};

// Calculates the mode (most frequent value(s)) of the array
const getMode = (array) => {
    const counts = {}; // Object to store the frequency of each number

    // Count occurrences of each number in the array
    array.forEach(el => counts[el] = counts[el] ? counts[el] + 1 : 1);

    // If all values occur with the same frequency, return null (no mode)
    if (new Set(Object.values(counts)).size === 1) {
        return "No mode value";
    };

    // Find the key with the highest count
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0];

    // Filter keys that have the same highest frequency
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);

    // Join the array into a string separated by comma and space
    return mode.join(", ");
};

// Calculates the range (difference between max and min) of the array
const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
};

// Calculates the variance (average of squared differences from the mean)
const getVariance = (array) => {
    const mean = getMean(array); // Calculate the mean of the array

    // Sum the squared differences from the mean and divide by array length
    const variance = array.reduce((acc, el) => {
        const difference = el - mean;
        const squared = difference ** 2;
        return acc + squared;
    }, 0) / array.length;

    return variance;
};

// Calculates the standard deviation (square root of variance)
const getStandardDeviation = (array) => {
    const variance = getVariance(array); // Get variance
    const standardDeviation = Math.sqrt(variance); // Square root of variance
    return standardDeviation;
};

// Main function that processes user input and displays calculated statistics
const calculate = () => {
    const value = document.querySelector("#numbers").value; // Get input string from DOM
    const array = value.split(/,\s*/g); // Split string into array of values
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el)); // Convert to numbers and filter out NaNs

    // Calculate all statistical values
    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);
    const variance = getVariance(numbers);
    const standardDeviation = getStandardDeviation(numbers);

    // Display results in the DOM
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#range").textContent = range;
    document.querySelector("#variance").textContent = variance;
    document.querySelector("#standardDeviation").textContent = standardDeviation;
};
