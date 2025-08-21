function repeatStringNumTimes(str, num) {
  // If num is less than or equal to 0, return empty string
  if (num <= 0) {
    return "";
  }

  let repeatedStr = "";
  // Repeat str 'num' times using a loop
  for (let i = 0; i < num; i++) {
    repeatedStr += str;
  }

  return repeatedStr;
}
