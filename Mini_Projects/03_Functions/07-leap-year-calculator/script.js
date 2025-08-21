

function isLeapYear(year) {
  if (year < 100) {
    if (year % 4 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  } else if (year >= 100 && year < 400) {
    if (year % 100 === 0) {
      return `${year} is not a leap year.`;
    } else if (year % 4 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  } else if (year >= 400) {
    if (year % 400 === 0) {
      return `${year} is a leap year.`;
    } else if (year % 100 === 0) {
      return `${year} is not a leap year.`;
    } else if (year % 4 === 0) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
}

// Alternative 

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     return `${year} is a leap year.`;
//   } else {
//     return `${year} is not a leap year.`;
//   }
// }

const result = isLeapYear(2001);
console.log(result);
