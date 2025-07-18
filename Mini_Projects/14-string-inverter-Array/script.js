
function reverseString(string) {

  const split = string.split('');
  console.log(split);

  const reverse = split.reverse();
  console.log(reverse);

  const result = reverse.join('');
  return result;
}