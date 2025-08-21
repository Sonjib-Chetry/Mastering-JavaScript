


function mutation(array) {
  const firstWord = array[0].toLowerCase();
  const secondWord = array[1].toLowerCase();
  let loopLength = 0;

  for (const char of secondWord) {
    if (firstWord.includes(char)) {
      loopLength++;
    }
  }

  if (loopLength === secondWord.length) {
    return true
  } else { return false}

}


/*
function mutation([first, second]) {
  const firstWord = first.toLowerCase();
  const secondWord = second.toLowerCase();

  for (const char of secondWord) {
    if (!firstWord.includes(char)) {
      return false;
    }
  }

  return true;
}
*/