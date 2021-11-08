/******************/
/* Import Modules */
/******************/
// 1. Require mongoose and dotenv
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const express = require('express')
const app = express()

// 2. Connect to Atlas
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
  
// 3a. Replace the local module with mongoose model
// const guild = require('./guild')

// 3b. Define our schema 
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
})

// 3c. compile our model
const Player = mongoose.model('Player', playerSchema)

/*****************/
/* Define routes */
/*****************/

// List entry route
// 4a. Convert the app.get() callback with async
app.get('/api/guild', async (request, response) => {

  // 4b. Request and send Atlas `players` data with model.find()
  const players = await Player.find()

  response.send(players)

})

// Item route
// 5a. Convert the app.get() callback with async
app.get('/api/guild/:name', async (request, response) => {

  // 5b. Request and send Atlas `player` data with model.findOne()
  const player = await Player.findOne({name: request.params.name})

  response.send(player)
  
})

/****************************/
/* Handle 404, start server */
/****************************/

// Handle 404 errors with middleware
app.use(function(request, response) {

  // If path starts with `/api`, send JSON 404
  if (request.url.startsWith('/api')) {

    response.status(404)
    response.send({error: 'File Not Found'})

  } else {
  
    // else send HTML 404
    response.status(404)
    response.send('<h1>404: File Not Found</h1>')

  }
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});