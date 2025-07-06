
const user7Age = 18;
const user8Age = 18;

const user9Age = 18;
const user10Age = 20;

const user11Age = 18;
const user12Age = '20';

console.log(user7Age == user7Age); // true (same value)
console.log(user7Age == user8Age); // true (same value)
console.log(user9Age == user10Age); // false (18 != 20)

console.log(user9Age === user10Age); // false (different values)
console.log(+user9Age === user10Age); // false (18 !== 20)
console.log(parseInt(user9Age) === user10Age); // false (18 !== 20)

console.log(user7Age != user8Age); // false (they are equal)
console.log(user9Age != user10Age); // true (they are different)
console.log(user7Age != user8Age); // false (they are equal)

console.log(user9Age !== user10Age); // true (different values)
console.log(+user9Age !== user10Age); // true (18 !== 20)
console.log(parseInt(user9Age) !== user10Age); // true (18 !== 20)

console.log(user10Age > user9Age); // true (20 > 18)
console.log(user9Age > user10Age); // false (18 > 20 is false)
console.log(user7Age > user8Age); // false (18 > 18 is false)
console.log(user12Age > user11Age); // true ('20' is coerced to number)

console.log(user10Age < user9Age); // false (20 < 18 is false)
console.log(user9Age < user10Age); // true (18 < 20)
console.log(user7Age < user8Age); // false (18 < 18 is false)
console.log(user11Age < user12Age); // true (18 < '20' is true after coercion)

console.log(user9Age >= user10Age); // false (18 >= 20 is false)
console.log(user11Age >= user12Age); // false (18 >= '20' is false after coercion)

console.log(user11Age <= user12Age); // true (18 <= '20' is true after coercion)

/*

1. Equality Operators

a. Loose Equality (==)
Checks if two values are equal after type coercion (converts types to match before comparing).
Example: console.log(user7Age == user8Age); → true (both are 18)
Example: console.log(user11Age == user12Age); → false (18 == '20' → 18 == 20 → false)

b. Strict Equality (===)
Checks if two values are equal without type coercion (both value and type must match).
Example: console.log(user9Age === user10Age); → false (18 vs 20)
Example: console.log(user11Age === user12Age); → false (18 (number) vs '20' (string))


2. Inequality Operators

a. Loose Inequality (!=)
Checks if two values are not equal after type coercion.
Example: console.log(user7Age != user8Age); → false (they are equal)
Example: console.log(user9Age != user10Age); → true (18 != 20)

b. Strict Inequality (!==)
Checks if two values are not equal without type coercion (either value or type differs).
Example: console.log(user9Age !== user10Age); → true (18 !== 20)
Example: console.log(user11Age !== user12Age); → true (18 (number) !== '20' (string))


3. Greater Than (>) and Less Than (<)

Compares two values after type coercion (converts to numbers if possible).
Example: console.log(user10Age > user9Age); → true (20 > 18)
Example: console.log(user12Age > user11Age); → true ('20' → 20 > 18)
Example: console.log(user9Age < user10Age); → true (18 < 20)


4. Greater Than or Equal (>=) and Less Than or Equal (<=)

Checks if one value is greater/less than or equal to another (with type coercion).
Example: console.log(user11Age >= user12Age); → false (18 >= '20' → 18 >= 20 → false)
Example: console.log(user11Age <= user12Age); → true (18 <= '20' → 18 <= 20 → true)


5. Type Conversion Helpers (+ and parseInt())
+ (Unary Plus) and parseInt() explicitly convert strings to numbers before comparison.
Example:
console.log(+user3Age === user4Age); // +'18' → 18 === 20 → false
console.log(parseInt(user3Age) === user4Age); // parseInt('18') → 18 === 20 → false


Best Practice:
Prefer === and !== to avoid bugs from implicit type coercion. 
Use explicit conversion (Number(), parseInt()) when needed.

*/