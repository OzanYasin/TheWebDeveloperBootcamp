// AJAX & API's

// ------ Intro to AJAX ------

// Asynchronous JavaScipt And XML

// The whole concept is creating applications where using JavaScript we can load data or we can fetch information or we can send data somewhere to save your progress, or save something to a database, do all sorts of things. Behind the scenes where in the past you would have had to refresh a page to send a new request.

// ------ Intro to APIs ------

// The term API stands for application programming interface and technically API is just a very broad term that refers to really any interface for one computer to interact or communicate with another piece of software.

// It does not have to do with the Web in general.
// But most people are referring to WEB APIs.

// Web APIs are interfaces that are Web based, HTTP based.

// Web sites expose certain endpoints and these endpoints that are exposed are going to respond with information for code to consume or for other pieces of software to consume.

// As we talked, when we say Web API, we're referring to web site's interface that occurs over HTTP. We make request to particular URLs, which we usually call endpoints.

// ------ WTF is JSON ------

// Most people say AJAX, but it's almost guaranteed that they're referring to using JSON, not XML.

// JSON stands for JavaScript Object Notation. It has JavaScript in the title, but it's not the same thing with JS at all.

// !! JSON is just a format for sending data for serializing or for sending information from me to you, or from an API to browser or whatever it is.

// JSON is a way of formatting data that is consistent and predictable and it's very similar to JS. It's based upon JS objects in the syntax, where we have key value pairs and curly braces etc. But they are important differences.

// https://jsonformatter.curiousconcept.com/

// Also other languages that work with APIs that are JSON APIs. So, they all have their own way of parsing JSON and turning it into actual that technologies's code.

// We have a method for changing JSON's string format data into JavaScript object.

const data = `{"ticker":{"base":"BTC","target":"USD","price":"443.7807865468","volume":"31720.1493969300","change":"0.3766203596"},"timestamp":1399490941,"success":true,"error":""}
`; // JSON format

const parsedData = JSON.parse(data);
console.log(parsedData.ticker.price); // 443.7807865468

// Another method is JSON.stringify
// This is useful if we need to send information to an API and API wants us to send data as JSON.

const dog = { breed: 'lab', color: 'black', isAlive: true, owner: undefined };

console.log(JSON.stringify(dog)); // {"breed":"lab","color":"black","isAlive":true}
// There is no 'undefined' in JSON's format.

// ------- Using Hoppscotch -------
// https://hoppscotch.io/

// It's a free, fast and beautiful API request builder. It helps you create requests faster.

// Almost all of these free APIs you don't have to register for, you don't have to pay for pretty much all going to be GET requests based. (GET is type of a request)

// hoppscoth.io makes JSON more readable and easy to get API's data.

// There is another type of request, which is POST request. It's just a way of getting stuff from an API, whereas something like a post request is typically used when we're trying to send data, somewhere trying to post data.

// !! POST request --> It means data that we're sending is going to be saved somewhere or stored in a database or have some sort of impact on the server somewhere.

// In other word, GET & POST request's completely different.

// ------ HTTP Verbs ------

// Status Code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
