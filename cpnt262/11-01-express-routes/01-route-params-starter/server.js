// Install modules
const express = require('express')
const app = express()

// Serve static files using middleware
app.use(express.static('public'))

// Define seed data
// Your data here
const guild = [];

// Dynamic JSON Endpoint
app.get('/api/guild', function(request, response) {
  response.send(guild)
})

app.get('/api/guild/:name', function(request, response) {
  const character = '[name here]'; // Use Array.find() here
  response.send(character)
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