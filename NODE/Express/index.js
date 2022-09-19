// What is Express?
//Fast, unopinionated, minimalist web framework for Node.js

// It helps to build web apps.

// It's just an NPM package which comes with a bunch of methods and optional plugins that we can use to build web applications and API's.

// What Does Express

// - Start up a server to listen for requests.
// - Parse incoming requests
// - Match those requests to particular routes
// - Craft our http response and associated content

const express = require('express');
const app = express();
// console.dir(app);

app.use(() => {
  // .use means anytime we have an incoming request, this callback will run.
  console.log('We Got A New Request!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
