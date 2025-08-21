
function sumAll(twoNumArray) {

  let [ num1, num2 ] = twoNumArray;

  let result = 0;

  if (num2 > num1) {
    for (let i = num1; i <= num2; i++) {
      result = i + result
      console.log(result);
    }
  }

  if (num1 > num2) {
    for (let i = num2; i <= num1; i++) {
      result = i + result
      console.log(result);
    }
  }

  if (num1 === num2) {
    result = num1 + num2
    console.log(result);
  }

  return result
}

sumAll([5, 5])