/******************/
/* Import Modules */
/******************/

const express = require('express')
const app = express()

/*********************/
/* Define data array */
/*********************/

const guild = [
  // Item 1
  {
    // general
    id: 1,
    name: 'harry',
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
    name: 'ryan',
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
    name: 'spry',
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

/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/guild', function(request, response) {
  response.send(guild)
})

// Item route
app.get('/api/guild/:name', function(request, response) {

  const character = guild.find(function(item){
    if (request.params.name === item.name) {
      return true
    } else {
      return false
    }
  }); // Use Array.find() here
  response.send(character)
})

/****************************/
/* Handle 404, start server */
/****************************/


// Handle 404 errors with middleware
app.use(function(request, response) {
  response.status(404)
  response.send('<h1>404: File Not Found</h2>')
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});