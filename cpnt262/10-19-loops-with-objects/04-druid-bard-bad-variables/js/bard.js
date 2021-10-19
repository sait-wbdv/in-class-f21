// TODO: Move each variable into a single `bard` object to prevent variable collision
// See: /05-druid-bard-better-objects

// general
const name = 'Ryan Reynolds';
const race = 'Hottie';

// stats
const strength = 12;
const dexterity = 16;
const constitution = 100;
const intelligence = 6;
const wisdom = 20;
const charisma = 100;

// Modifiers
const pretty = true;

// Equipment

const weapons = [
  {
    type: 'Wit',
    class: 'conversational',
    damage: '1d4',
    name: null,
    range: 10
  }
];

backpack = [
  'rations',
  'rope'
];


let bardWeapons = `
<ul>
  <li>Wit (range: 10ft)</li>
</ul>
`;

document.querySelector('.bard').innerHTML = bardWeapons;