// Routing refers to how an application’s endpoints (URIs) respond to client requests.
//https://expressjs.com/en/guide/routing.html#route-methods

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('This is the home page.');
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.send(`<h1>This is a ${subreddit} subreddit.</h1>`);
});

app.get('/r/:subreddit/:postId', (req, res) => {
  const { subreddit, postId } = req.params;
  res.send(`Post ID: ${postId} on the ${subreddit} subreddit.`);
});

app.get('/cats', (req, res) => {
  // console.log('Cat request!');
  res.send('MEOW!');
});

app.post('/cats', (req, res) => {
  // console.log('Cat request!');
  res.send('THIS IS A POST!');
});

app.get('/dogs', (req, res) => {
  res.send('WOOF!');
});

// !! Remember,
// Request is an object, created by express based upon the incoming HTTP request.
// Response is an object made by express, both of which are passed into this callback and response has.

// --------------------------------------------

// ** Working with Query Strings **

app.get('/search', (req, res) => {
  // console.log(req.query);
  const { q } = req.query;
  if (!q) {
    res.send('Nothing found if nothing searched.');
  }
  res.send(`Search results for ${q}.`);
});

app.get('*', (req, res) => {
  // '*' means everything
  // Routes are matched in order. So, if * goes t o first on the line, it will cover every path. This is what we do not want it.
  res.send('I do not know that path.');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
