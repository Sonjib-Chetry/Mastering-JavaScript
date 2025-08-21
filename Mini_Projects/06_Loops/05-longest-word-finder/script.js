function findLongestWordLength(str) {
  // Split the string into words
  let words = str.split(" ");
  
  // Initialize the maximum length
  let maxLength = 0;
  
  // Loop through each word
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }
  
  return maxLength;
}
