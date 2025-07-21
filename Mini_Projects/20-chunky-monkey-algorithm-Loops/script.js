
function chunkArrayInGroups(array, number) {

  const arrayLength = array.length
  console.log(`Length of array ${arrayLength}`);

  if (arrayLength < number) {
    return array
  }

  const possibleSplit = Math.floor(arrayLength / number)
  console.log(`Possible number of splits ${possibleSplit}`);

  const remaining = arrayLength - (possibleSplit * number)
  console.log(`Remaining array length after split ${remaining}`);

  let mainResult = []

  for (let i = 1; i <= possibleSplit; i++) {
    let removed = array.splice(0, (number));
    mainResult.push(removed);
  }

  if (array.length > 0) {
    mainResult.push(array);
  }
  
  return mainResult
}

