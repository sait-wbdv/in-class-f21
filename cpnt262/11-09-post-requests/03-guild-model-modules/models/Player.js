const mongoose = require('./db')

/*****************/
/* Define Schema */
/*****************/

const playerSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    unique: true
  },
  class: String,
  race: String,
  strength: Number,
  dexterity: Number,
  constitution: Number,
  intelligence: Number,
  wisdom: Number,
  charisma: Number,
  poisoned: {
    type: Boolean,
    default: false
  }
})

/*****************/
/* Compile Model */
/*****************/

module.exports = mongoose.model('Player', playerSchema)
  