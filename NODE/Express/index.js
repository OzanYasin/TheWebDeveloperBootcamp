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

app.use((req, res) => {
  // .use means anytime we have an incoming request, this callback will run.

  // req and res parameters are objects that made by express (built-in).

  // !! It passes in two objects a request object based upon the incoming request, the HTTP request.
  // And response object, that is going to be used to generate a response that will be eventually sent back to whoever requested it.

  console.log('We got a new request!');
  // res.send('We got your Request. This is a response!'); // content-type: text/html
  res.send({ color: 'red' }); // content-type: application/json
  // res.send is going to actually send and generate a HTTP response and this is all express is doing for us.
});

// ** HTTP Request is not a JavaScript object, its text information.
// Express take that data, it parses it and it turns it into a object that it passes in.

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});

//https://expressjs.com/en/starter/hello-world.html
