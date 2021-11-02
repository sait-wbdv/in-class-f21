// Accept command line input
const inputString = process.argv[2];
const guild = require('./guild')

// TODO: clean up our expression
const matchingCharacter = guild.find(function(item) {
  if (inputString === item.name) {
    return true;
  } else {
    return false;
  }
})

// Log the results
if (matchingCharacter) {
  console.log(`Found ${inputString}: \n`, matchingCharacter);
} else {
  console.log(`Couldn't find ${inputString}. Please try again.`);
}