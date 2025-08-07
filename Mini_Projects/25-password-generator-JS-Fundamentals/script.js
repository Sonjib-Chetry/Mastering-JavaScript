

function generatePassword(length) {

  let result = "";

  const string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const array = string.split("");


  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * array.length);
    result += array[randomNumber];
  }

  return result;
}


const password = generatePassword(10)
console.log(`Generated password: ${password}`);


//Alternative

// function generatePassword(length) {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
//   let result = "";

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     result += characters[randomIndex];
//   }

//   return result;
// }

