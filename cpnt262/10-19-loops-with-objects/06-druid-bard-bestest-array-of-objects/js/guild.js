// Creat empty variable for HTML output
let output = '';

const guild = [
  // Item 1
  {
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
  },
  // Item 2
  {
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
        type: 'Sarcasm',
        class: 'conversational',
        damage: '1d4',
        name: 'Wit',
        range: 10
      }
    ],
    backpack: [
      'rations',
      'rope'
    ]
  }
]

// Loop through each character in the guild (druid and bard)
guild.forEach(function(character){
  // Loop through each weapon the character has
  let weapons = '';

  character.weapons.forEach(function(weapon){
    weapons += `<li>${weapon.name} (${weapon.type})</li>`;
  });

  // Use lot notation to access character stats
  output += `
  <article>
    <h2>${character.name}</h2>
    <p>Class: ${character.class}</p>
    <p>Race: ${character.race}</p>
    <h3>Weapons</h3>
    <ul>
      ${weapons}
    </ul>
  </article>
  `;

});

// Output to web page
document.querySelector('.guild').innerHTML = output;
