// Accept command line input
const inputValue = process.argv[2];

// Define data array
const characterClasses = [
  'fighter',
  'wizard',
  'rogue',
  'barbarian',
  'bard'
];

// Your code goes here
const output = characterClasses.includes(inputValue);

if (output) {
  console.log(`"${inputValue}" is a valid Character Class!`);
} else {
  console.log(`"${inputValue}" is NOT a valid Character Class! Please try again.`);
}
