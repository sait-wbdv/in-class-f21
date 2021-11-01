const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/some/dynamic/path', function(request, response) {
  response.send([`one`, `two`, `three`])
})

app.use(function(request, response) {
  response.status(404)
  response.send('404: File Not Found')
});

app.listen(3000, function() {
  console.log("Listening on port 3000!")
})