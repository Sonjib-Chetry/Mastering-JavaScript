function largestOfAll(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let maxNum = arr[i][0]; // start with first element
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] > maxNum) {
        maxNum = arr[i][j];
      }
    }
    result.push(maxNum);
  }
  
  return result;
}
