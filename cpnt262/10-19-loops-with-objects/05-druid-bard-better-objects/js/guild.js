// TODO: Place each character into an single `guild` array so we can loop through them
// See: /06-druid-bard-bestest-array-of-objects
const druid = {
  // general
  name: 'Gyda',
  class: 'Druid',
  race: 'Goliath',
  // stats
  strength: 16,
  dexterity: 14,
  constitution: 12,
  intelligence: 14,
  wisdom: 16,
  charisma: 10,
  // Modifiers
  poisoned: false,
  // Equipment
  weapons: [
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
  ],
  backpack: [
    'rations',
    'rope'
  ]
}




// const weapons = [
//   'shortBow',
//   'quarterStaff'
// ];

let druidWeapons = `
<h2>${druid.name}</h2>
<p>Class: ${druid.class}</p>
<p>Race: ${druid.race}</p>
<h3>Weapons</h3>
<ul>
  <li>${druid.weapons[0].name} (${druid.weapons[0].type})</li>
  <li>${druid.weapons[1].name} (${druid.weapons[1].type})</li>
</ul>
`;

document.querySelector('.druid').innerHTML = druidWeapons;

const bard = {
  // general
  name: 'Ryan Reynolds',
  class: 'Bard',
  race: 'Hottie',
  // stats
  strength: 12,
  dexterity: 16,
  constitution: 100,
  intelligence: 6,
  wisdom: 20,
  charisma: 100,
  // Modifiers
  pretty: true,
  // Equipment
  weapons: [
    {
      type: 'Wit',
      class: 'conversational',
      damage: '1d4',
      name: null,
      range: 10
    }
  ],
  backpack: [
    'rations',
    'rope'
  ]
}



let bardWeapons = `
<h2>${bard.name}</h2>
<p>Class: ${bard.class}</p>
<p>Race: ${bard.race}</p>
<h3>Weapons</h3>
<ul>
  <li>${bard.weapons[0].type}</li>
</ul>
`;

document.querySelector('.bard').innerHTML = bardWeapons;