const figlet = require('figlet');
const colors = require('colors');

// We used <npm init> to create default node_modules folder to eliminate problems while using npm.

figlet('Hello World!', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data.green);
});
