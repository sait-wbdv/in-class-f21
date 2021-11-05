const express = require('express')
const router = express.Router()

/****************************/
/* Include API dependencies */
/****************************/

const guild = require('./guild')
const randomItem = require('./random-item')

/*********************/
/* Define API routes */
/*********************/

// List entry route
router.get('/guild', (req, res) => {
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
    
    console.log(guild)

    res.status(404)
    res.send({error: 'File Not Found'})
    
  }

})

// Item route
router.get('/guild/:name', (req, res) => {
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

module.exports = router