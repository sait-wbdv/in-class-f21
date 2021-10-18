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

console.log('First item', games[0]);

console.log('Last item', games[7]);
console.log('Last item', games[games.length - 1])

games[8] = 'Watchdogs';
console.log('Last item', games[7]);
console.log('Last item', games[games.length - 1])

games[games.length] = 'Goat Simulator';
console.log('Last item', games[7]);
console.log('Last item', games[games.length - 1]);

console.log('Empty item?', games[10]);

const paragraph = document.querySelector('p');

paragraph.textContent = `Our favourite games: ${games.join(', ')}.`;