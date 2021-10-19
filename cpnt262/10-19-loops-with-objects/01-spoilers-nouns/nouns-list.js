const nouns = [
  "bush",
  "shovel",
  "cave",
  "mouth",
  "shell",
  "tear",
  "razor",
  "nest",
  "pad",
  "fear",
  "prize",
  "power",
  "pocket",
  "cane",
  "pump",
  "mask",
  "junk",
  "kiss",
  "photo",
  "shower",
  "slide",
  "freedom"
];

let output = '';

// 1. Finally, using `Array.forEach()`: invoke `handleItem()` for each item in the noun array to create your comma-separated list.
// 2. Create an anonymous function that accepts the (JS-created) array `item` (the noun) as a parameter.
nouns.forEach(function(noun){
  // 3. Inside the function, use the addition assignment operator (`+=`) (or another method of your choice) to create a comma-separated of nouns so that:
  //    - the first character of each noun is capitalized;
  noun = noun.charAt(0).toUpperCase() + noun.slice(1);

  //    - each noun is separated by a comma;
  //    - the last noun is separated by the word `and`.
  if (noun.toLowerCase() === nouns[0]) {
    // First noun, don't add anything but the noun
    output += noun;
  } else if (noun.toLowerCase() === nouns[nouns.length - 1]) {
    // Last noun, add ' and '
    output += ` and ${noun}.`;
  } else {
    // All the other nouns, add ', '
    output += `, ${noun}`;
  }

});

// 4. Use .innerHTML to output the noun list to the page
document.querySelector('.nouns').innerHTML = `Our favourite nouns: ${output}`;
