const myDate = new Date()

// Local get methods
console.log('Local Year', myDate.getFullYear())    //Returns the year (e.g., 2025)
console.log('Local Month', myDate.getMonth())    //Month 0–11 (0 = January, 11 = December)
console.log('Local Date', myDate.getDate())     //Day of the month 1–31
console.log('Local Day', myDate.getDay())     //Day of the week 0–6 (0 = Sunday, 6 = Saturday)
console.log('Local Hours', myDate.getHours())   //Hours 0–23
console.log('Local Minutes', myDate.getMinutes())  //Minutes 0–59
console.log('Local Seconds', myDate.getSeconds()) //Seconds 0–59
console.log('Local Milliseconds', myDate.getMilliseconds()) //Milliseconds 0–999
console.log('Local Year - 1900', myDate.getYear()) // Deprecated  //Returns the year minus 1900 (e.g., 125 for the year 2025)

// UTC get methods  //These work exactly like local get methods but return UTC time, not local time.
console.log('UTC Year', myDate.getUTCFullYear())  
console.log('UTC Month', myDate.getUTCMonth())
console.log('UTC Date', myDate.getUTCDate())
console.log('UTC Day', myDate.getUTCDay())
console.log('UTC Hours', myDate.getUTCHours())
console.log('UTC Minutes', myDate.getUTCMinutes())
console.log('UTC Seconds', myDate.getUTCSeconds())
console.log('UTC Milliseconds', myDate.getUTCMilliseconds())

// Other get methods
console.log('Timestamp in Milliseconds', myDate.getTime()) //→ Returns number of milliseconds since 1 Jan 1970 (Unix epoch)
console.log('Time Zone Offset in Minutes', myDate.getTimezoneOffset())  //→ Difference (in minutes) between UTC and local time.

// to methods without arguments
console.log('toString: ', myDate.toString())  //"Tue Dec 09 2025 12:45:30 GMT+0530 (India Standard Time)"
console.log('toUTCString: ', myDate.toUTCString())   //UTC version
console.log('toISOString: ', myDate.toISOString())  //2025-12-09T07:15:50.123Z
console.log('toJSON: ', myDate.toJSON())      //Same as ISO string, used when JSON.stringify() is called.
console.log('toDateString: ', myDate.toDateString())  //"Tue Dec 09 2025"
console.log('toTimeString: ', myDate.toTimeString())  //Time only (with timezone)

// to methods with arguments  //These convert date/time to local format depending on your region.
console.log('toLocaleString: ', myDate.toLocaleString()) //Example (India): "9/12/2025, 12:47:10 pm"
console.log('toLocaleDateString: ', myDate.toLocaleDateString())  //Example: 9/12/2025
console.log('toLocaleTimeString: ', myDate.toLocaleTimeString())  //Example: 12:48:20 pm

// Examples:-

// console.log(myDate.toLocaleTimeString('en', { timeStyle: 'full' }))
// console.log(myDate.toLocaleTimeString('en', { timeStyle: 'long' }))
// console.log(myDate.toLocaleTimeString('en', { timeStyle: 'medium' }))
// console.log(myDate.toLocaleTimeString('en', { timeStyle: 'short' }))

// console.log(myDate.toLocaleDateString('en-GB'))
// console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'full' }))
// console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'long' }))
// console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'medium' }))
// console.log(myDate.toLocaleDateString('en-GB', { dateStyle: 'short' }))

// Local set methods
myDate.setFullYear(2014)
myDate.setMonth(10)
myDate.setDate(5)
myDate.setHours(20)
myDate.setMinutes(12)
myDate.setSeconds(10)
myDate.setMilliseconds(60)
myDate.setTime(1709802054158)
myDate.setYear(2024) // Deprecated

// ✔ setMonth is 0–11
// ✔ setTime sets the entire date using timestamp

// UTC set methods  //Same as above but set UTC values.
myDate.setUTCFullYear(2014)
myDate.setUTCMonth(10)
myDate.setUTCDate(5)
myDate.setUTCHours(20)
myDate.setUTCMinutes(12)
myDate.setUTCSeconds(10)
myDate.setUTCMilliseconds(60)

// static methods
console.log(Date.now())   //→ Current timestamp in ms since 1 Jan 1970 Same as (new Date()).getTime()
console.log(Date.parse('04 Dec 1995 00:12:00 GMT'))  //→ Converts date string → timestamp
console.log(Date.UTC())  //→ Returns timestamp for given UTC parameters (Here you passed nothing, so it returns NaN)

// other methods
console.log(myDate.valueOf())  //→ Same as getTime() Returns timestamp (ms since 1970)


/*
🎉 In Simple Summary

| Type          | Examples                     | Meaning                         |
| ------------- | ---------------------------- | ------------------------------- |
| **Local Get** | getDate(), getHours()        | Based on your timezone          |
| **UTC Get**   | getUTCDate()                 | Based on UTC                    |
| **Format**    | toString(), toLocaleString() | Convert to readable strings     |
| **Local Set** | setDate(), setHours()        | Change values in local timezone |
| **UTC Set**   | setUTCDate(), setUTCHours()  | Change values in UTC            |
| **Static**    | Date.now(), Date.parse()     | Class-level methods             |
| **Other**     | getTime(), valueOf()         | Timestamps                      |
*/