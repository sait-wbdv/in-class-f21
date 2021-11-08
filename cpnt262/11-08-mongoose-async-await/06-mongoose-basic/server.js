
/***********************/
/* Require our modules */
/***********************/

const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

/********************/
/* Connect to Atlas */
/********************/

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

/*****************/
/* Define Schema */
/*****************/

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

/*****************/
/* Compile Model */
/*****************/

const Player = mongoose.model('Player', playerSchema)

/****************/
/* Request Data */
/****************/

const myFind = async () => {
  const players = await Player.find()
  console.log(players)
}

myFind()

const myFindOne = async (name) => {
  const player = await Player.findOne({name: name})
  console.log(player)
}

myFindOne('spry')