let output = '';

const guild = [
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

guild.forEach(function(character){

  output += `
  <article>
    <h2>${character.name}</h2>
    <p>Class: ${character.class}</p>
    <p>Race: ${character.race}</p>
  </article>
  `;

});

document.querySelector('.guild').innerHTML = output;
