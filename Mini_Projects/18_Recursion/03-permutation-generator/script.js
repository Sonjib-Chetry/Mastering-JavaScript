
function permuteString(str, prefix = "", results = []) {
  // Base case: if no characters left in str
  if (str.length === 0) {
    results.push(prefix);
    return results;
  }

  for (let i = 0; i < str.length; i++) {
    // Remove the character at position i
    const rem = str.slice(0, i) + str.slice(i + 1);
    // Recursive call with updated prefix and remaining string
    console.log(results);
    permuteString(rem, prefix + str[i], results);
  }

  // Remove duplicates and return
  return Array.from(new Set(results));
}
