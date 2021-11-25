require('dotenv').config()
const { Octokit } = require("@octokit/core")
const express = require('express')
const app = express()

// Authenticate with GH API
const octokit = new Octokit({ auth: process.env.TOKEN });

app.get('/api/gists', async (req, res) => {
  const response = await octokit.request('GET /gists?per_page=100', {
    org: "octokit",
    type: "private",
  });
  res.send(response);
})

// Start server
const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`)
})