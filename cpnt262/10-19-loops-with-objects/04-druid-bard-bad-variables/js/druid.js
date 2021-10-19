// TODO: Move each variable into a single `druid` object to prevent variable collision
// See: /05-druid-bard-better-objects

// general
const name = 'Gyda';
const race = 'Goliath';

// stats
const strength = 16;
const dexterity = 14;
const constitution = 12;
const intelligence = 14;
const wisdom = 16;
const charisma = 10;

// Modifiers
const poisoned = false;

// Equipment
// const weapons = [
//   'shortBow',
//   'quarterStaff'
// ];

const weapons = [
  {
    type: 'Short Bow',
    class: 'ranged',
    damage: '1d6',
    name: 'Fenrir',
    range: 60
  },
  {
    type: 'Quarter Staff',
    class: 'melee',
    damage: '1d10',
    name: 'Freya',
    range: 5    
  }
];

backpack = [
  'rations',
  'rope'
];

let druidWeapons = `
<ul>
  <li>Fenrir (Short Bow)</li>
  <li>Freya (Quarter Staff)</li>
</ul>
`;

document.querySelector('.druid').innerHTML = druidWeapons;