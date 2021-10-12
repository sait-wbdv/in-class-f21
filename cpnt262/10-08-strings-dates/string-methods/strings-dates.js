/* What day is it?!? */
const currentDate = new Date();

// console.log('getDate() ->', currentDate.getDate());
// console.log('getDay() ->', currentDate.getDay());
// console.log('getFullYear() ->', currentDate.getFullYear());
// console.log('getHours() ->', currentDate.getHours());
// console.log('getMilliseconds() ->', currentDate.getMilliseconds());
// console.log('getMinutes() ->', currentDate.getMinutes());
// console.log('getMonth() ->', currentDate.getMonth());
// console.log('getSeconds() ->', currentDate.getSeconds());
// console.log('getTime() ->', currentDate.getTime());
// console.log('getTimezoneOffset() ->', currentDate.getTimezoneOffset());
// console.log('toDateString() ->', currentDate.toDateString());
// console.log('toISOString() ->', currentDate.toISOString());
// console.log('toLocaleDateString() ->', currentDate.toLocaleDateString());
// console.log('toLocaleString() ->', currentDate.toLocaleString());
// console.log('toLocaleTimeString() ->', currentDate.toLocaleTimeString());
// console.log('toString() ->', currentDate.toString());
// console.log('toTimeString() ->', currentDate.toTimeString());
// console.log('valueOf() ->', currentDate.valueOf());

/* Output to DOM */
// Find target elements and assign them to a variable
const dateElement = document.querySelector('.date'); // class selector

// Display day date as content of the target element
dateElement.textContent = currentDate.toString();

// String
// const string = 'Harry Potter is tha bomb!';

// console.log(string.substr(6, 6));