/***********************/
/* Connect to Database */
/***********************/
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(
  process.env.MONGODB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true },
  )
  .then(function(){
    console.log('Connected to DB...')
  })
  .catch(function(err){
    console.log(err)
  });

/******************/
/* Import Modules */
/******************/
const express = require('express')
const app = express()

const randomItem = require('./random-item')

/**********************************/
/* Read Guild array from database */
/**********************************/

// TODO: Replace local module of `guild` with Mongoose model 
// const guild = require('./guild')

// 1. Define a schema for Guild Member
const playerSchema = new mongoose.Schema({
  id: Number,
  name: String,
  class: String,
  race: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  poisoned: Boolean
});

// 2. Compile our schema into a model
const Player = mongoose.model('Player', playerSchema);



/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/guild', (req, res) => {
  // 3. Define `guild` array of objects using our model
  let guild = null
  Player.find((err, data) => {
    if (err) {
      console.log(err)
      res.sendStatus(404);
    }
    else {
      guild = data

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
    }
  });

})

// Item route
app.get('/api/guild/:name', (req, res) => {
  let character
  Player.findOne({name: req.params.name}, function(err, data) {
    if(err) {
      console.log(err)
      res.sendStatus(404);
    } else {
      character = data
      console.log(character)
      if (typeof character === 'object' && character !== null) {
        res.send(character)
      } else {
        res.status(404)
        res.send({error: 'File Not Found'})
      }
    }
  });
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