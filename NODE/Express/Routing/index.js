// Routing refers to how an application’s endpoints (URIs) respond to client requests.
//https://expressjs.com/en/guide/routing.html#route-methods

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home page.');
});

app.get('/cats', (req, res) => {
  // console.log('Cat request!');
  res.send('MEOW!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

app.get('*', (req, res) => {
  // '*' means everything
  // Routes are matched in order. So, if * goes t o first on the line, it will cover every path. This is what we do not want it.
  res.send('I dont know that path.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

// !! Remember,
// Request is an object, created by express based upon the incoming HTTP request.
// Response is an object made by express, both of which are passed into this callback and response has.
