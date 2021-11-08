
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

const Player = mongoose.model('Player', playerSchema)

const myFind = async () => {
  const players = await Player.find()
  // console.log(players)
}

myFind()

const myFindOne = async (name) => {
  const player = await Player.findOne({name: name})
  console.log(player)
}

myFindOne('gyda')