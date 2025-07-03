

const message = 'Hello World'; // Define a constant string variable 'message' with value 'Hello World'
const intro = 'My name is Sonjib Chetry'; // Define a constant string variable 'intro' with a personal introduction
const capitalMessage = message.toUpperCase(); // Convert 'message' to uppercase and store in 'capitalMessage'
const longMessage = '             String Methods and Properties          '; // Define a string with leading and trailing whitespace
const trimMessageStart = longMessage.trimStart(); // Remove leading whitespace from 'longMessage' and store in 'trimMessageStart'
const trimMessageEnd = longMessage.trimEnd(); // Remove trailing whitespace from 'longMessage' and store in 'trimMessageEnd'
const accountNo = '1234'; // Define a string representing an account number


console.log(message.length); // Log the length of 'message' (number of characters)

console.log(message[6]); // Log the 7th character of 'message' (0-based index)

console.log(message.toUpperCase()); // Log 'message' converted to uppercase

console.log(capitalMessage); // Log the pre-computed uppercase version of 'message'

console.log(longMessage.trim()); // Log 'longMessage' with both leading and trailing whitespace removed

console.log(longMessage.trim().toLowerCase()); // Log 'longMessage' trimmed and converted to lowercase

console.log(longMessage.includes('Methods')); // Check if 'longMessage' contains 'Methods' (case-sensitive) and log result

console.log(longMessage.includes('methods')); // Check if 'longMessage' contains 'methods' (case-sensitive) and log result

console.log(message.indexOf('W')); // Find and log the index of 'W' in 'message'

console.log(message.indexOf('w')); // Find and log the index of 'w' in 'message' (returns -1 if not found)

console.log(message.indexOf('World')); // Find and log the starting index of 'World' in 'message'

console.log(message.replace('World', 'Earth')); // Replace 'World' with 'Earth' in 'message' and log the result

console.log(message.replace('world', 'Earth')); // Attempt to replace 'world' (lowercase) in 'message' (no change)

console.log(message.replace('o', 'O')); // Replace first occurrence of 'o' with 'O' in 'message'

console.log(message.replaceAll('o', 'O')); // Replace all occurrences of 'o' with 'O' in 'message'

console.log(message.concat(' ', intro)); // Concatenate 'message', a space, and 'intro' string

console.log(accountNo.padStart(16, 'X')); // Pad 'accountNo' at start to make 16 characters total, using 'X'

console.log(accountNo.padEnd(16, 'X')); // Pad 'accountNo' at end to make 16 characters total, using 'X'

console.log(intro.charAt(11)); // Get and log the character at index 11 in 'intro' string

console.log(intro.charCodeAt(11)); // Get and log the UTF-16 code unit at index 11 in 'intro'

console.log(intro.split(' ')); // Split 'intro' into array of substrings using space as delimiter

console.log(intro.split('')); // Split 'intro' into array of individual characters

console.log(intro.split('a')); // Split 'intro' into array of substrings using 'a' as delimiter

console.log(`Last four digit of my Account No. is ${accountNo.padStart(16, 'X')}.`); // Log a template literal string with padded account number