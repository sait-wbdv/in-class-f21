/******************/
/* Import Modules */
/******************/
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()

const guild = require('./guild')
const randomItem = require('./random-item')

/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/guild', (req, res) => {
  let randomCharacter = null; // for Random member filter
  let poisonedCharacter = null; // for Poisoned member filter

  if (req.query.filter === 'random') {   

    randomCharacter = randomItem(guild)
    res.send(randomCharacter)

  } else if (req.query.filter === 'poisoned') {

    poisonedCharacter = guild.filter(item => item.poisoned)
    res.send(poisonedCharacter)

  } else if (typeof guild !== 'undefined' && Array.isArray(guild)) {

    // Variable is an array!
    res.send(guild)

  } else {

    res.status(404)
    res.send({error: 'File Not Found'})
    
  }

})

// Item route
app.get('/api/guild/:name', (req, res) => {
  let character

  if (typeof guild !== 'undefined' && Array.isArray(guild)) {
    character = guild.find(item => req.params.name === item.name) // Use Array.find() here
  } else {
    character = null;
  }
  
  if (typeof character === 'object' && character !== null) {
    res.send(character)
  } else {
    res.status(404)
    res.send({error: 'File Not Found'})
  }
})

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use((req, res) => {

  // If path starts with `/api`, send JSON 404
  if (req.url.startsWith('/api')) {

    res.status(404)
    res.send({error: 'File Not Found'})

  } else {
  
    // else send HTML 404
    res.status(404)
    res.send('<h1>404: File Not Found</h1>')

  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});