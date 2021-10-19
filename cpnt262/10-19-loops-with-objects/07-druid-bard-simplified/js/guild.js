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
    poisoned: false
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
    pretty: true
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
