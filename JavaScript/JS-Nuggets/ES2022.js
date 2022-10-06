//  Javascript Nuggets
//  ECMAScript 2022
// at() - takes integer and returns the item at that index - string,array

// Top Level Await - Basic Example

const scores = [99, 90, 100];

const oldLast = scores[scores.length - 1];
console.log(oldLast); // 100

const newLast = scores.at(-1);
console.log(newLast); // 100

const channel = 'Codding Addict';
console.log(channel.at(0)); // C

// no need to write our fetch code in a function
const resp = await fetch('https://course-api.com/react-tabs-project');
const data = await resp.json();
console.log(data);
