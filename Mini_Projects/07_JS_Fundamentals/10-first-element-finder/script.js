function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]; // return the first element that passes the test
    }
  }
  return undefined; // if nothing passes
}
