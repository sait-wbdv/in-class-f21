
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

const kittySchema = new mongoose.Schema({
  name: String,
  legs: Number
});

const Kitten = mongoose.model('Kitten', kittySchema)

const silence = new Kitten({ name: 'Silence', legs: 4 })

const fluffy = new Kitten({ name: 'fluffy', legs: 4 })

const tripod = new Kitten({ name: 'Tripod', legs: 3 })

console.log(silence, fluffy, tripod)

silence.save()
fluffy.save()
tripod.save()
