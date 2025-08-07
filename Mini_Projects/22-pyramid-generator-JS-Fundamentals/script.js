function pyramid(character, rowCount, isInverted) {
  const rows = [];

  for (let i = 1; i <= rowCount; i++) {
    if (!isInverted) {
      rows.push("\n" + " ".repeat(rowCount - i) + character.repeat(2 * i - 1));
    } else {
      rows.unshift("\n" + " ".repeat(rowCount - i) + character.repeat(2 * i - 1));
    }
  }

  let result = "";

  for (const row of rows) {
    result = result + row;
  }

  return result + "\n";
}
