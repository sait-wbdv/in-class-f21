// Accept command line input
const inputValue = process.argv[2];

// Define data array
const guild = [
  // Item 1
  {
    // general
    id: 1,
    name: 'Harry',
    class: 'wizard',
    race: 'elf',
    // stats
    strength: 16,
    dexterity: 14,
    constitution: 12,
    intelligence: 14,
    wisdom: 16,
    charisma: 10,
    // Modifiers
    poisoned: false
  },
  // Item 2
  {
    // general
    id: 2,
    name: 'Ryan Reynolds',
    class: 'bard',
    race: 'human',
    // stats
    strength: 12,
    dexterity: 16,
    constitution: 14,
    intelligence: 6,
    wisdom: 10,
    charisma: 20,
    // Modifiers
    poisoned: true
  },
  {
    // general
    id: 3,
    name: 'Spry',
    class: 'rogue',
    race: 'elf',
    // stats
    strength: 6,
    dexterity: 18,
    constitution: 10,
    intelligence: 18,
    wisdom: 14,
    charisma: 8,
    // Modifiers
    poisoned: false
  }
];

// Your code here
console.log(inputValue)

const matchingCharacter = guild.find(function(item) {
  if (Number(inputValue) === item.wisdom) {
    return true;
  } else {
    return false;
  }
})

// Log the results
if (matchingCharacter) {
  console.log(`Found a guild member with ${inputValue} Wisdom: \n`, matchingCharacter);
} else {
  console.log(`Couldn't find any guild members with ${inputValue} Wisdom. Please try again.`);
}