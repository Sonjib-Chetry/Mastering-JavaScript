
const currentDate = new Date()

const options = {
  weekday: 'short', // ddd
  month: 'short',   // MMM
  day: '2-digit',   // dd
  year: 'numeric',  // yyyy
  hour: '2-digit',  // HH
  minute: '2-digit',// mm
  second: '2-digit',// ss
  hour12: false,
  timeZoneName: 'short' // TIMEZONE
}

console.log(currentDate.toLocaleString('en-GB', options));  //toLocaleString

const currentDateFormat = `Current Date and Time: ${currentDate.toLocaleDateString("en-GB", options)}`;  //toLocaleDateString

console.log(currentDateFormat);

function formatDateMMDDYYYY(date) {
  return `Formatted Date (MM/DD/YYYY): ${date.toLocaleDateString("en-US")}`
}

console.log(formatDateMMDDYYYY(currentDate));

function formatDateLong(date) {
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }

  return `Formatted Date (Month Day, Year): ${date.toLocaleDateString("en-US", options)}`
}

console.log(formatDateLong(currentDate));