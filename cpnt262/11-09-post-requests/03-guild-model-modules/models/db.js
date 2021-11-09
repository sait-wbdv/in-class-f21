// 1. Require mongoose
const mongoose = require('mongoose');

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

module.exports = mongoose