// Templating allows us to define a preset "pattern" for a webpage, that we can dynamically modify.

// For example, we could define a single "Search" template that displays all the results for a given search term. We don't know what the term is or how many results there are ahead of time. The webpage is created on the fly.

// So, the end goal is combine some form of logic with creating HTML responses.

// EJS stands for embedded JavaScript.
// https://ejs.co/

const express = require('express');
const app = express();
const path = require('path'); // The path module provides utilities for working with file and directory paths.

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
// !! It takes current directory name (process.cwd) and we joining that path, the full path to get there with /views
// Thats a solution to res.render('home.ejs) work correctly while we start the server from another directory.

//Renders a view and sends the rendered HTML string to the client.
app.get('/', (req, res) => {
  res.render('home.ejs'); // no need to explain /view directory. It checks it on default.
});

app.get('/r/:subreddit', (req, res) => {
  const { subreddit } = req.params;
  res.render('subreddit', { subreddit });
});

app.get('/rand', (req, res) => {
  const rand = Math.floor(Math.random() * 10) + 1;
  res.render('random', { rand });
});

//--------------------

app.listen(3000, () => {
  console.log('LISTENING ON PORT 3000');
});
