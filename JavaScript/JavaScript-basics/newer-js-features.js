// Default Params
// --------------------
// - The Old Way -

// function rollDie(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// - The New Way -

function rollDie(numSides = 6) {
  return Math.floor(Math.random() * numSides);
}

// Another Example:

function greet(person, msg = "Hey there", punc = "!") {
  // ** Default parameters should come second. **
  console.log(`${msg}, ${person}${punc}`);
} // greet("ozan") => "Hey there, ozan!"

// ------------------------------------

// *** Spread in Function Calls ***
// Expands an iterable (array, string, etc.) into a list of arguments.

const nums = [13, 4, 2, 242, 3, 5123];

// Math.max(nums) // NaN
// Math.max(...nums) // 5123

// console.log("hello") // hello
// console.log(..."hello") // h e l l o

// *** Spread with Array Literals ***
// Create a new array osing an existing array. Spreads the elements from one array into a new array.

const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const Pets = [...cats, ...dogs]; // copied cats + dogs in array.

// *** Spread with Objects ***
// Copies properties from one object into another abject literal.

const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

const catDog = { ...feline, ...canine }; // Order matters. (Caninae overwrite Felidae)

// {...[2, 4, 6, 8]} => {0: 2, 1: 4, 2: 6, 3: 8}

// ----------------------------------------

// Rest Params
// It looks like spread, but it's not! :-)

// The Arguments Object:
// * Available inside every function.
// * It's an array-like object.
//    * Has a length property.
//    * Doest not have array methods like push / pop.
// * Contains all the arguments passed to the function.
// * Not available inside of arrow functions!

function sumWrong() {
  return arguments.reduce((total, el) => total + el);
} // does not work due to "Doest not have array methods."

function sum(...nums) {
  // All values passed in will be restored in nums
  return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everoneElse) {
  console.log(`GOLD MEDAL GOES TO: ${gold}`);
  console.log(`SILVER MEDAL GOES TO: ${silver}`);
  console.log(`AND THANKS TO EVERYONE ELSE: ${everoneElse}`);
} // collect first two (gold, silver) specificly, and then collect the rest into everyoneElse.
// *Arguments holds everything which is why it's so useful.*

// -------------------------------------

// *** Destructing Arrays ***
// A short, clena syntax to 'unpack':
//    * Values from arrays
//    * Properties from objects into distinct variables.

const scores = [942323, 823165, 724344, 645676, 534231, 434531];

// const highScore = scores[0];
// const secondHighScore = scores[1];

const [gold, silver, bronze, ...everoneElse] = scores; // Order matters.

// *** Object Destructing ***
// More commonly used, more practicle than array.

const user = {
  email: "harvey@gmail.com",
  password: "asşlkjcSDFKqşojd",
  firstName: "Harvey",
  lastName: "Milk",
  born: 1930,
  died: 1978,
  bio: "Harvey Bernard Milk was an...",
  city: "San Francisco",
  state: "California",
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

const { email, firstName, lastName, city, bio } = user; // Order does not matter. Name matters.

const { born: birthYear, died: deathYear } = user;

const user2 = {
  email: "Stacy@gmail.com",
  firstName: "Stacy",
  lastName: "Gonzalez",
  born: 1987,
  city: "Tulsa",
  state: "Oklahoma",
};

// const { city, state, died = "N/A" } = user2;

// *** Param Destructing ***

// 1
// function fullName(user) {
//   return `${user.firstName} ${lastName}`;
// }

// 2
// function fullName(user) {
//   const { firstName, lastName } = user;
//   return `${firstName} ${lastName}`;
// }

// 3 (better)
function fullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

// movies.filter((movie) => movie.score >= 90);
// movies.filter(({ score }) => score >= 90);

// movies.map((movie) => {
//   return `${movie.title} (${movie.year} is rated ${movie.score})`;
// });

movies.map(({ title, year, score }) => {
  return `${title} (${year}) is rated ${score}`;
});

// END
