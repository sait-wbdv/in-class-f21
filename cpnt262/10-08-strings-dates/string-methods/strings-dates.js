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
// Find target elements and assign them to a variabl
const dateElement = document.querySelector('.date'); // class selector

// Display day date as content of the target element
// You last accessed this page on Oct 8 at 8:45pm
// dateElement.textContent = currentDate.toString();

const time = currentDate.toLocaleTimeString();
const date = currentDate.toString().substr(4,6);

// Attribution: 
// https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();

// Trinary operator
const ampm = hours >= 12 ? 'pm' : 'am';

// Is the same as this if/else
// if (hours >= 12) {
//   const ampm = 'pm';
// } else {
//   const ampm = 'am';
// }

hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
const strTime = hours + ':' + minutes + ' ' + ampm;

dateElement.textContent = `You last accessed this page on ${date} at ${strTime}`;

// Create paragraph element variable
const paraElement = document.querySelector('p');

// Number of characters
const charElement = document.querySelector('.characters');
charElement.querySelector('span').textContent = paraElement.textContent.length;

// Number of words
const wordElement = document.querySelector('.words');
wordElement.querySelector('span').textContent = paraElement.textContent.split(' ').length;

// Number of times 'wizard' is mentioned
const wizardElement = document.querySelector('.wizards');
console.log(paraElement.textContent.match(/wizard/g).length);
wizardElement.querySelector('span').textContent = paraElement.textContent.match(/wizard/g).length;
