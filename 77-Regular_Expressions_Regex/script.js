// 📘 Regular Expressions (Regex) and Common Methods in JavaScript
// 🔹 What is a Regular Expression?

// A regular expression (regex) is a pattern used to search, match, and manipulate text.
// In JavaScript, you define a regex by wrapping the pattern between forward slashes:

const regex = /freeCodeCamp/;

// This regex will match the exact text "freeCodeCamp" anywhere in a string.

// 🔹 Common Regex Methods in JavaScript

// 1. test()
// Checks if a regex matches part of a string.
// Returns a boolean (true or false).

console.log(regex.test("freeCodeCamp"));         // true
console.log(regex.test("freeCodeCamp is great")); // true
console.log(regex.test("I love freeCodeCamp"));   // true
console.log(regex.test("freecodecamp"));          // false (case-sensitive)
console.log(regex.test("camp"));                  // false (partial match doesn’t count)

// 👉 Takeaway: test() only tells you whether or not a match exists.


// 2. match()
// Returns an array with details about the first match.
// If no match → returns null.

console.log("freeCodeCamp".match(regex));
// ['freeCodeCamp', index: 0, input: 'freeCodeCamp', groups: undefined]

console.log("I love freeCodeCamp".match(regex));
// ['freeCodeCamp', index: 7, input: 'I love freeCodeCamp', groups: undefined]

console.log("freecodecamp".match(regex)); // null

// 👉 Takeaway: match() is useful when you want more information about the match (like the position).


// 3. replace()
// Replaces the first match of a regex with another string (or the result of a function).

const str = "freecodecamp is rly kewl";

const replaced = str.replace(regex, "freeCodeCamp");
console.log(replaced); // freeCodeCamp is rly kewl

// 👉 Takeaway: Great for fixing typos, formatting, or substitutions.

/*
🔹 Quick Summary:

| Method      | Works On | Returns              | Example                           |
| ----------- | -------- | -------------------- | --------------------------------- |
| `test()`    | Regex    | `true` / `false`     | `/abc/.test("abc") → true`        |
| `match()`   | String   | Match array / `null` | `"abc".match(/b/) → ["b"]`        |
| `replace()` | String   | New string           | `"abc".replace(/b/, "x") → "axc"` |
*/



// 🔹 Common Regular Expression Modifiers (Flags) in JavaScript

// Flags are written after the closing / in a regex:
// const regex = /pattern/flags;

// ✅ Most Common Flags

// 1. i → Case-insensitive
// Makes regex ignore case.

const regex1 = /freecodecamp/i;

console.log(regex1.test("FREECodeCamp")); // true
console.log(regex1.test("freeCODEcamp")); // true


// 2. g → Global
// Finds all matches, not just the first.
// Note: g makes regex stateful when using .test(), so lastIndex changes.

const regex2 = /freeCodeCamp/g;
console.log("freeCodeCamp freeCodeCamp".match(regex2));
// ["freeCodeCamp", "freeCodeCamp"]


// 3. m → Multiline
// Allows ^ and $ to match the start and end of each line, not just the entire string.

const regex3 = /^freecodecamp/im;
const str1 = `I love
freecodecamp
a lot`;

console.log(regex3.test(str1)); // true (matches beginning of line 2)


// 4. s → Dotall (Single-line)
// Allows the . wildcard to match newlines (\n).

const regex4 = /foo.bar/s;
console.log(regex4.test("foo\nbar")); // true (without `s`, it would fail)


// 5. u → Unicode
// Enables full Unicode support (like emoji, special characters).

const regex5 = /🍎/u;
console.log("I have an apple 🍎".match(regex5)); // ["🍎"]


// 6. y → Sticky
// Similar to g, but matches must start exactly at lastIndex (does not skip ahead).

const regex6 = /foo/y;
const str2 = "foofoo";
regex6.lastIndex = 3;
console.log(regex6.test(str2)); // true (match starts exactly at index 3)


// 7. d → Indices
// Adds an indices property to match results, showing the start and end index of matches.

const regex7 = /freecodecamp/d;
const str3 = "I like freecodecamp";

console.log(str3.match(regex7));
// [
//   "freecodecamp",
//   index: 7,
//   input: "I like freecodecamp",
//   groups: undefined,
//   indices: [[7, 19], groups: undefined]
// ]


// 🔹 Anchors Reminder
// ^ → Match start of string (or line if m flag used).
// $ → Match end of string (or line if m flag used).

// /^freecodecamp/i.test("freecodecamp is great"); // true
// /freecodecamp$/i.test("I love freecodecamp"); // true

/*
📌 Summary Table:

| Flag | Name             | Effect                                      |
| ---- | ---------------- | ------------------------------------------- |
| `i`  | Case-insensitive | Ignores letter case                         |
| `g`  | Global           | Match all, not just first                   |
| `m`  | Multiline        | `^` and `$` work on each line               |
| `s`  | Dotall           | `.` matches newlines too                    |
| `u`  | Unicode          | Full Unicode support (emoji, special chars) |
| `y`  | Sticky           | Match only from exact `lastIndex`           |
| `d`  | Indices          | Adds start–end indices of matches           |
*/


// 📘 Matching and Replacing All Occurrences in JavaScript

// 🔹 Problem
// By default, match() and replace() only operate on the first match.

const regex8 = /freecodecamp/;
const str4 = "freecodecamp is the best we love freecodecamp";

console.log(str4.match(regex8));
// → ["freecodecamp", index: 0, input: "..."]

console.log(str4.replace(regex8, "freeCodeCamp"));
// → "freeCodeCamp is the best we love freecodecamp"

// 👉 Only the first occurrence was matched and replaced.


// 🔹 Solution 1: Use the g (global) flag
// Adding the g modifier tells JavaScript to find all occurrences.

const regex9 = /freecodecamp/g;
const str5 = "freecodecamp is the best we love freecodecamp";

console.log(str5.match(regex9));
// → ["freecodecamp", "freecodecamp"]

console.log(str5.replace(regex9, "freeCodeCamp"));
// → "freeCodeCamp is the best we love freeCodeCamp"

// ✅ Works for multiple matches and replacements.
// ❌ But match() loses extra info like index and groups.


// 🔹 Solution 2: matchAll() (ES2020+)
// Returns an iterator with detailed results for all matches.
// Must use a regex with the g flag.

const regex10 = /freecodecamp/g;
const str6 = "freecodecamp is the best we love freecodecamp";

const matches = str6.matchAll(regex10);
console.log(Array.from(matches));

// Output:
// [
//   ["freecodecamp", index: 0, input: "freecodecamp is the best we love freecodecamp", groups: undefined],
//   ["freecodecamp", index: 33, input: "freecodecamp is the best we love freecodecamp", groups: undefined]
// ]

// ✅ Preserves indices and groups for each match.
// ✅ Can be iterated lazily with .next() or converted with Array.from().


// 🔹 Solution 3: replaceAll() (ES2021+)
// Replaces all occurrences of a string or regex.
// Unlike replace(), it works directly with plain strings too.

const str7 = "freecodecamp is the best we love freecodecamp";

console.log(str7.replaceAll("freecodecamp", "freeCodeCamp"));
// → "freeCodeCamp is the best we love freeCodeCamp"

// With regex:

console.log(str7.replaceAll(/freecodecamp/g, "freeCodeCamp"));
// → "freeCodeCamp is the best we love freeCodeCamp"

// ✅ Easier than replace() when you always want all replacements.

/*
🔹 Quick Compariso:

| Method            | Global? | Returns                              | Keeps Match Info? |
| ----------------- | ------- | ------------------------------------ | ----------------- |
| `match()`         | ❌       | First match array                    | ✅ Yes             |
| `match()` + `g`   | ✅       | Array of strings only                | ❌ No              |
| `matchAll()`      | ✅       | Iterator (convert with `Array.from`) | ✅ Yes             |
| `replace()`       | ❌       | String with first replacement        | –                 |
| `replace()` + `g` | ✅       | String with all replacements         | –                 |
| `replaceAll()`    | ✅       | String with all replacements         | –                 |
*/



// 📘 Character Classes in Regular Expressions
// A character class lets you define a set of characters that can match one position in a string.


// 🔹 1. The Wildcard (.)
// Matches any single character (except line breaks, unless you use the s flag).

const regex11 = /a./;
console.log("an".match(regex11)); // ["an"]
console.log("ab".match(regex11)); // ["ab"]


// 🔹 2. Predefined Character Classes
/*
| Class | Matches                                        | Example                 |
| ----- | ---------------------------------------------- | ----------------------- |
| `\d`  | Any digit (`0–9`)                              | `/\d/.test("5") → true` |
| `\D`  | Any non-digit                                  | `/\D/.test("A") → true` |
| `\w`  | Any "word" character: `a–z`, `A–Z`, `0–9`, `_` | `/\w/.test("_") → true` |
| `\W`  | Any non-word character                         | `/\W/.test("@") → true` |
| `\s`  | Any whitespace (space, tab, newline, etc.)     | `/\s/.test(" ") → true` |
| `\S`  | Any non-whitespace character                   | `/\S/.test("X") → true` |
*/


// 🔹 3. Custom Character Classes ([...])
// You can create your own set of allowed characters.

const regex12 = /[abc]/;
console.log("apple".match(regex12)); // ["a"]
console.log("banana".match(regex12)); // ["b"] (first match only)

// 👉 Matches any one of a, b, or c.

/*
Ranges inside character classes
Instead of listing all, use - to define ranges:

/[a-d]/   // matches a, b, c, or d
/[0-9]/   // matches any digit
/[A-Z]/   // matches any uppercase letter
/[a-zA-Z0-9]/ // matches letters and digits (like \w, but no underscore)

Including special characters
If you want a literal hyphen (-), put it at the start or end:

/[-a-z]/ // matches "-" or any lowercase letter

You can also mix shorthand with custom:

/[-\w]/  // matches letters, digits, underscores, and "-"

*/


// 🔹 4. Negated Character Classes ([^...])
// A caret ^ at the beginning negates the class.
// Means "match anything not in this set."

const regex13 = /[^aeiou]/; // matches any consonant or non-letter
console.log("apple".match(regex13)); // ["p"]


// 🔹 5. Practical Examples
/*
✅ Match U.S. grades (A, B, C, D, F):

/[ABCDF]/.test("A"); // true
/[ABCDF]/.test("E"); // false

✅ Match a valid hex digit:

/[0-9A-Fa-f]/.test("B"); // true
/[0-9A-Fa-f]/.test("g"); // false

✅ Match whitespace or comma as a separator:

/[\s,]/.test(" "); // true
/[\s,]/.test(","); // true

*/
/*
📌 Summary
. → any character (except newline unless s flag).
\d, \w, \s → shorthand for digits, word characters, whitespace.
Uppercase (\D, \W, \S) → negated forms.
[abc] → any of a, b, c.
[a-z] → range.
[^a-z] → NOT lowercase letters.
Combine freely to match exactly what you need.


📘 Regex Character Classes Cheat Sheet

🔹 Predefined Classes (Shorthand)

| Pattern | Meaning                                                                  | Example                               |
| ------- | ------------------------------------------------------------------------ | ------------------------------------- |
| `.`     | Any single character (except newline, unless `s` flag used)              | `/a./` matches `"ab"`, `"ax"`, `"a1"` |
| `\d`    | Digit (`0–9`)                                                            | `/\d/` matches `"5"` in `"a5b"`       |
| `\D`    | Non-digit                                                                | `/\D/` matches `"a"` in `"a5b"`       |
| `\w`    | Word character: letters (`a–z`, `A–Z`), digits (`0–9`), underscore (`_`) | `/\w/` matches `"a"`, `"5"`, `"_"`    |
| `\W`    | Non-word character                                                       | `/\W/` matches `"@"` in `"a@"`        |
| `\s`    | Whitespace (space, tab, newline, etc.)                                   | `/\s/` matches `" "`                  |
| `\S`    | Non-whitespace character                                                 | `/\S/` matches `"a"` in `" a"`        |



🔹 Custom Classes ([...])

| Pattern       | Meaning                                        | Example                              |
| ------------- | ---------------------------------------------- | ------------------------------------ |
| `[abc]`       | Match **a, b, or c**                           | `/[abc]/` matches `"a"` in `"apple"` |
| `[a-z]`       | Match lowercase letters                        | `/[a-z]/` matches `"d"` in `"dog"`   |
| `[A-Z]`       | Match uppercase letters                        | `/[A-Z]/` matches `"C"` in `"Cat"`   |
| `[0-9]`       | Match digits                                   | `/[0-9]/` matches `"7"`              |
| `[a-zA-Z0-9]` | Match letters & digits (like `\w`, but no `_`) | `"a1B"` all match                    |
| `[^abc]`      | Match **NOT** a, b, or c                       | `/[^abc]/` matches `"d"` in `"dog"`  |
| `[^0-9]`      | Match non-digits                               | `/[^0-9]/` matches `"a"` in `"a1"`   |
| `[-a-z]`      | Match `-` or any lowercase letter              | Matches `"a"`, `"z"`, `"-"`          |
| `[\s,;]`      | Match whitespace, comma, or semicolon          | Useful for splitting text            |


🔹 Special Notes
Place - at start or end if you want to match a literal hyphen (-).
To match ] inside a class, put it first: /[]a-z]/ matches ] or any lowercase letter.
You can mix shorthand with custom sets:

const regex = /[\w.-]/; 
// matches letters, digits, _, dot, or dash
*/


// 🔍 Lookahead & Lookbehind in Regex
// These are called "zero-width assertions" because they check conditions without consuming characters.
// In other words, they assert context, but don’t include it in the final match.


// ✅ Positive Lookahead (?=)
// 👉 Matches a pattern only if it is followed by another pattern.
// Example:

const regex14 = /free(?=code)/i;

console.log(regex14.test("freeCodeCamp")); // true
console.log(regex14.test("free code camp")); // false


// ❌ Negative Lookahead (?!)
// 👉 Matches a pattern only if it is NOT followed by another pattern.
// Example:

const regex15 = /free(?!code)/i;

console.log(regex15.test("freeCodeCamp")); // false
console.log(regex15.test("free lunch"));   // true

// "free lunch" → "free" is NOT followed by "code".
// "freeCodeCamp" → "free" is followed by "code".


// ✅ Positive Lookbehind (?<=)
// 👉 Matches a pattern only if it is preceded by another pattern.
// Example:

const regex16 = /(?<=free)code/i;

console.log(regex16.test("freeCodeCamp")); // true
console.log(regex16.test("supercode"));    // false

// "freeCodeCamp" → "code" is preceded by "free".
// "supercode" → "code" is preceded by "super", not "free".


// ❌ Negative Lookbehind (?<!)
// 👉 Matches a pattern only if it is NOT preceded by another pattern.
// Example:

const regex17 = /(?<!free)code/i;

console.log("freeCodeCamp".match(regex17)); // null
console.log("supercode".match(regex17));    // ['code']

// "supercode" → "code" is NOT preceded by "free".
// "freeCodeCamp" → "code" is preceded by "free".


// ⚡ Key Points
// Lookaheads → check what comes after.
// Lookbehinds → check what comes before.
// They don’t consume characters → only "code" (not "free") is returned in a lookbehind example.

// Syntax recap:
// Positive Lookahead → X(?=Y)
// Negative Lookahead → X(?!Y)
// Positive Lookbehind → (?<=Y)X
// Negative Lookbehind → (?<!Y)X

// ✅ Use cases in real life:
// Validate passwords (must contain a number, uppercase, etc.).
// Extract emails (match username part only if followed by @domain.com).
// Find words not followed/preceded by certain words.



// 🔢 Regex Quantifiers
// Quantifiers specify how many times a pattern should repeat.
// They apply to the character, group, or class immediately before them.


// 1. Exact Quantifier {n}
// 👉 Match the preceding token exactly n times.

const regex18 = /^\d{4}$/;

console.log(regex18.test("1234"));  // true
console.log(regex18.test("12345")); // false

// ✔ Matches exactly 4 digits.


// 2. Range Quantifier {n,}
// 👉 Match the preceding token at least n times.

const regex19 = /^\d{4,}$/;

console.log(regex19.test("1234"));   // true
console.log(regex19.test("1234567")); // true

// ✔ Matches 4 or more digits.


// 3. Range Quantifier {n,m}
// 👉 Match the preceding token between n and m times (inclusive).

const regex20 = /^\d{4,6}$/;

console.log(regex20.test("123"));    // false
console.log(regex20.test("12345"));  // true
console.log(regex20.test("1234567"));// false

// ✔ Matches 4 to 6 digits only.


// 4. Optional Quantifier ?
// 👉 Equivalent to {0,1} → match zero or one occurrence.

const regex21 = /^[a-zA-Z]?\d{4,6}$/;

console.log(regex21.test("12345"));   // true
console.log(regex21.test("a1234"));   // true
console.log(regex21.test("az12345")); // false

// ✔ Allows an optional single letter before 4–6 digits.


// 5. Zero or More Quantifier *
// 👉 Equivalent to {0,} → match zero or more occurrences.

const regex22 = /^[a-zA-Z]*\d{4,6}$/;

console.log(regex22.test("12345"));    // true
console.log(regex22.test("az12345"));  // true
console.log(regex22.test("123"));      // false

// ✔ Matches any number of letters (including none) followed by 4–6 digits.


// 6. One or More Quantifier +
// 👉 Equivalent to {1,} → match one or more occurrences.

const regex23 = /^[a-zA-Z]+\d{4,6}$/;

console.log(regex23.test("a1234"));   // true
console.log(regex23.test("az12345")); // true
console.log(regex23.test("12345"));   // false

// ✔ Requires at least one letter before the digits.

/*
⚡ Special Notes

Quantifiers are greedy by default → they try to match as many characters as possible.
Example: /a+/ on "aaa" → matches "aaa".
You can make them lazy (non-greedy) by adding ?.
Example: /a+?/ on "aaa" → matches "a".

They work on characters, groups, or classes:
/(ab){2}/   // matches "abab"
/[0-9]{3}/  // matches "123"

For unlimited repeats, use:
* → 0 or more
+ → 1 or more

✅ Quick Summary Table:

| Quantifier | Meaning                   | Example                        |
| ---------- | ------------------------- | ------------------------------ |
| `{n}`      | Exactly `n` times         | `/\d{3}/` → `"123"`            |
| `{n,}`     | At least `n` times        | `/\d{3,}/` → `"12345"`         |
| `{n,m}`    | Between `n` and `m` times | `/\d{2,4}/` → `"12"`, `"1234"` |
| `?`        | 0 or 1 (optional)         | `/a?b/` → `"b"`, `"ab"`        |
| `*`        | 0 or more                 | `/a*b/` → `"b"`, `"aaab"`      |
| `+`        | 1 or more                 | `/a+b/` → `"ab"`, `"aaab"`     |
*/



// 🎯 Capturing Groups & Backreferences in Regex


// 1. What Are Capturing Groups?
// A capturing group is a way to "save" part of a regex match inside parentheses (...).
// When regex runs, it:
// Returns the whole match.
// Also stores any captured groups separately.
// 👉 Example:

const regex24 = /free(code)camp/i;
const result = "freecodecamp".match(regex24);

console.log(result);
// [
//   'freecodecamp',   // full match
//   'code',           // 1st captured group
//   index: 0,
//   input: 'freecodecamp'
// ]

// ✔ Group (code) captures "code" separately.


// 2. Using Capturing Groups in Replacement
// When replacing text, you can reuse captured parts with $1, $2, etc.

const regex25 = /free(co+de)camp/i;
console.log("freecooooodecamp".replace(regex25, "paid$1world"));
// → paidcooooodeworld

// ✔ $1 means “whatever the 1st group captured”.


// 3. Backreferences in Regex
// A backreference reuses a previously matched group within the regex itself.
// 👉 Example: Same number of os in both occurrences of "freecoo...camp":

const regex26 = /free(co+de)camp.*free\1camp/i;

console.log(regex26.test("freecooooodecamp is freecooooodecamp")); // true
console.log(regex26.test("freecooooodecamp is freecodecamp"));     // false

// ✔ \1 refers to the first capturing group (co+de).


// 4. Named Capture Groups
// Instead of using confusing numbers (\1, \2), you can name groups:

const regex27 = /free(?<code>co+de)camp.*free\k<code>camp/i;

console.log(regex27.test("freecooooodecamp is freecooooodecamp")); // true

// ✔ (?<code>co+de) creates a named group called code.
// ✔ \k<code> backreferences it.

// Named Groups in Replacement

const regex28 = /free(?<code>co+de)camp/i;
console.log("freecooooodecamp".replace(regex28, "paid$<code>camp"));
// → paidcooooodecamp


// 5. Non-Capturing Groups
// Sometimes you just want to group patterns without capturing.
// Use (?:...).
// 👉 Example: Match either "freecodecamp" or "freecandycamp":

const regex29 = /free(?:code|candy)camp/i;

console.log(regex29.test("freecodecamp"));   // true
console.log(regex29.test("freecandycamp"));  // true

// ✔ (?:code|candy) groups choices but doesn’t store them.

/*
⚡ Quick Summary Table:

| Syntax         | Meaning                 | Example                              |         |
| -------------- | ----------------------- | ------------------------------------ | ------- |
| `(abc)`        | Capturing group         | `/free(abc)camp/` → captures `"abc"` |         |
| `\1, \2...`    | Backreference by number | `/(\d{2})-(\1)/` → "12-12" ✅         |         |
| `(?<name>...)` | Named capturing group   | `/(?<word>\w+)/`                     |         |
| `\k<name>`     | Named backreference     | `/(\d+)-\k<digits>/`                 |         |
| `(?:...)`      | Non-capturing group     | \`/(?\:cat                           | dog)/\` |
*/

// ✅ In short:
// Capturing groups let you extract parts of a match.
// Backreferences let you reuse matched content either in the regex or replacement.
// Named groups make things more readable.
// Non-capturing groups improve performance/readability when you don’t need to capture.