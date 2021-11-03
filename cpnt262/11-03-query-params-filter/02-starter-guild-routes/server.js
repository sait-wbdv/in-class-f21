/******************/
/* Import Modules */
/******************/
const express = require('express')
const app = express()

const guild = require('./guild')

/*****************/
/* Define routes */
/*****************/

// List entry route
app.get('/api/guild', function(request, response) {

  if (typeof guild !== 'undefined' && Array.isArray(guild)) {
    // Variable is an array!
    response.send(guild)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }

})

// Item route
app.get('/api/guild/:name', function(request, response) {
  let character

  if (typeof guild !== 'undefined' && Array.isArray(guild)) {
    character = guild.find(item => request.params.name === item.name) // Use Array.find() here
  } else {
    character = null;
  }
  
  if (typeof character === 'object' && character !== null) {
    response.send(character)
  } else {
    response.status(404)
    response.send({error: 'File Not Found'})
  }
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