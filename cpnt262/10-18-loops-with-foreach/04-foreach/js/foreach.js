let output = '';
const games = [
  'Ark',
  'Apex Legends',
  'Squid',
  'Sims 4',
  'Desert Bus',
  'Fallout',
  'Counter Strike',
  'FIFA 2021'
];

games.forEach(function(game) {
  if (game === games[games.length - 1]) {
    // last item
    output = output + game + '.';
  } else if (game === games[games.length - 2]) {
    // second last item
    output = output + game + ' and ';
  } else {
    // all the others
    output = output + game + ', ';
  }
  console.log(output);
});

const paragraph = document.querySelector('p');

paragraph.textContent = `Our favourite games: ${output}`;