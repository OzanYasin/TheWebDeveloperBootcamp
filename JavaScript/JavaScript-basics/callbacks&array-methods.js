// GOALS
// * Use the new arrow function styntax.
// * Understand and use these methods:
//      -forEach
//      -map
//      -filter
//      -reduce
//      -some
//      -every

// -----------------------------------

// ** forEach  METHOD **
// Accepts a callback function.
// Calls the function once per element in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// for (let el of numbers) {
//   console.log(el);
// }

const movies = [
  {
    title: "Amadeus",
    score: 99,
  },
  {
    title: "Stand By Me",
    score: 85,
  },
  {
    title: "Parasite",
    score: 95,
  },
  {
    title: "Alien",
    score: 90,
  },
];

movies.forEach(function (movie) {
  // most commonly, we use an anonymous function express that express just for this purpose.
  console.log(`${movie.title} - ${movie.score}/100`);
}); // !! forEach does not used very often, because we do have access to use forOf.
// return:
// Amadeus - 99/100
// Stand By Me - 85/100
// Parasite - 95/100
// Alien - 90/100

// ---------------------------------------------

// ** map METHOD **
// Creates a new array with the results of calling a callback on every element in the array.

const numbers2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const doubles = numbers2.map(function (num) {
  return num * 2;
});

console.log(doubles);

// for movie function:

const titles = movies.map(function (movie) {
  return movie.title.toUpperCase();
});

// ----------------------------------------------

// ARROW FUNCTIONS
// "syntactically compact alternative to a regular function expression"
// Used in a variable to execute. Can not be used on its own.
const square = (num) => {
  return num * num;
};

const add = (x, y) => {
  return x + y;
};

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};

// ---------------------------------------------

// ARROW FUNCTIONS ** Implicit Returns **

const rollDie6 = () => Math.floor(Math.random() * 6) + 1;

// 1)
// const isEven = function (num) {
//   return num % 2 === 0;
// }

// 2)
// const isEven = (num) => {
//   return num % 2 === 0;
// }

// 3)
// const isEven = num => {
//   return num % 2 === 0;
// }

// 4)
// const isEven = num => num % 2 === 0;

//  All 4 of them, has the same output

// -------------------------------------------

// ARROW FUNCTIONS ** Wrapup **

// const newMovies = movies.map(function (movie) {
//   return `${movie.title} - ${movie.score / 10}`;
// });

const newMovies = movies.map((movie) => `${movie.title} - ${movie.score / 10}`);

// *** setTimeout & setInterval ***

// setTimeout(() => {
//   console.log("HELLO!!!");
// }, 3000);

// const id = setInterval(() => {
//   console.log(Math.random());
// }, 2000); // id = 1; clearInterval(id) // Stops interval.

// -------------------------------------------

// *** FILTER ***
// Creates a new array with all elements that pass the test implemented by the provided function.

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers3.filter((n) => {
  return n < 10;
});

const movies2 = [
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

const goodMovies = movies2.filter((movie) => {
  return movie.score > 80;
});

// Or..

const goodMovies2 = movies2.filter((m) => m.score > 80);

const badMovies = movies2.filter((m) => m.score < 70);

const recentMovies = movies2.filter((m) => m.year > 2000);

// We offenly combine methods like map and filter.

// Lets say we want to get goodMovies but only with titles..

const goodTitles = movies.filter((m) => m.score > 80).map((m) => m.title);

// --------------------------------------------

// Filter Exercise
// Let's get some practice using the filter method. Write a function called validUserNames that accepts an array of usernames (strings). It should return a new array, containing only the usernames that are less than 10 characters.

const validUserNames = (arr) => {
  return arr.filter((name) => name.length < 10);
};

// --------------------------------------------

// ** SOME & EVERY **
// Some is similar to every, but returns true if ANY of the array elements pass the test function.

// Every tests whether all elements in the array pass the provided function. It returns a Boolean value like "some".

const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77];

exams.every((score) => score >= 75); // true
exams.every((score) => score <= 60); // false

movies2.some((movie) => movie.year > 2015); // true

// -------------------------------------------

// Some/Every Exercise
// Define a function called allEvens that accepts a single array of numbers. If the array contains all even numbers, return true. Otherwise, return false. Use some or every to help you do this!

const allEvens = (arr) => {
  return arr.every((num) => num % 2 === 0);
};

// -------------------------------------------

//  ** REDUCE **
// Executes a reduccer function on each element of the array, resulting in a single value.
// It's usefull but needs to take a little bit time to get used to.

const prices = [9.99, 1.5, 19.99, 49.99, 30.5];

// let total = 0;
// for (let price of prices) {
//   total += price;
// }
// console.log(total);

// const total = prices.reduce((total, price) => {
//   return total + price;
// }); // 111.97

const total = prices.reduce((total, price) => total + price); // 111.97

// We can write things that we can find max or min element of the array;

const minPrice = prices.reduce((min, price) => {
  if (price < min) {
    return price;
  }
  return min;
});

// for movies2..

const highestRatedMovie = movies2.reduce((bestMovie, currMovie) => {
  if (currMovie.score < bestMovie) {
    return currMovie;
  }
  return bestMovie;
});

// *** Arrow Functions & "This" ***

const person = {
  firstName: "Viggo",
  lastName: "Mortensen",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
}; // person.fullName() returns as: "Viggo Mortensen"
// !! The keyword "this" nothing to do with the scope where the function is created it has to do how the function is executed.
// There is not arrow function is work.
// !!! Keyword "this" is behaves differnt in an arrow function compared to regular function. Thats the only thing to remember.

// END
