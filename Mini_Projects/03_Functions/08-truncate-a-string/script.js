
function truncateString(string, number) {
  const secondPart = "...";

  if (string.length > number) {
    const firstPart = string.slice(0, number);
    return firstPart + secondPart;
  } else {
    return string;
  }
}

console.log(truncateString("Absolutely Longer", 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-", 1));

