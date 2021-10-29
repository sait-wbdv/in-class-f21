// Install modules
const express = require('express')
const app = express()

// Serve static files using middleware
app.use(express.static('public'))

// Define seed data
const definitions = [
  {
    term:'Global',
    definition: 'All code that is not inside a function. ',
    slug: 'global'
  },
  {
    term:'Global Execution Context',
    definition: 'The environment that is available everywhere in your app.',
    slug: 'global-execution-context'
  },
  {
    term:'Lexical Environment',
    definition: 'Where something sits physically in the code you write. In Javascript, *where* you write your code is important',
    slug: 'lexical-environment'
  }
];

// Dynamic JSON Endpoint
app.get('/api/terminology', function(request, response) {
  response.send(definitions)
})

app.get('/api/terminology/:id', function(request, response) {
  const definition = definitions.find(function (item) {
    return request.params.id === item.slug
  })
  response.send(definition)
})

// Handle 404 errors with middleware
app.use(function(request, response) {
  response.status(404)
  response.send('404: File Not Found')
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});