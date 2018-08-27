const express = require('express');
const request = require('request');
const path = require('path');

// Create an instance of the express server
const app = express();
// Tell express where to find our static files, like js files
app.use(express.static('public'));

// This is our root path, so a request to localhost:3000 will return index.html
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// This is our proxy route. When the code in 'index.js' calls /api this method then makes a request
// to the linkedin API and then returns it to index.js so it can be used in the code.
app.get('/api', (req, res) => {
  res.type('Content-Type', 'text/plain');
  return request(
    'http://app.linkedin-reach.io/words',
    (error, response, body) => {
      return res.send(body);
    }
  );
});

// This actually starts the express server and tells it what port to listen too
app.listen(3000);
