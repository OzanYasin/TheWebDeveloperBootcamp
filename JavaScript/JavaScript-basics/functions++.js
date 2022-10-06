// ** FUNCTIONS IN DETAIL **
// Important things you should know about functions.

// ------------------------------------

// FUNCTION SCOPE

function collectEggs() {
  let totalEggs = 6;
}
// console.log(totalEggs); // Function has not executed yet. So, there will be error. "totalEggs does not defined"
// totalEggs scoped to function and we do not have access to it. Function act like a bubble that you have no access to variables in it.

let bird = "Scarlet Macaw";
function birdWatch() {
  let bird = "Great Blue Heron";
  console.log(bird); // return: Great Blue Heron. What if there is no variable called "bird" in the function? console.log(bird) return as Scarlet Macaw. It scopes to closer version always if its in the "bubble". If not, it could not scope through bubble.
}

// ------------------------------------

// BLOCK SCOPE

// let radius = 8;
// if (radius > 0) {
//   const PI = 3.14159;
//   let msg = "HIII!";
// }
// console.log(radius); // We have access to radius, however not to PI or msg.
// Same scope logic is valid for loops. Bubble effect.

// !!! if you use "var" you can scope in the bubble without going into it. !!!

// -------------------------------------

// LECICAL SCOPE

function bankRobbery() {
  const heroes = ["Spiderman", "Wolverine", "Black Panther"];
  function cryForHelp() {
    function inner() {
      for (let hero of heroes) {
        console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
      }
    }
    inner();
  }
  cryForHelp(); // It works.
  // *** In inner function nested inside of some parrent function has access to scope or to variables to defined in the scope of outer function. ***
  // In other words, in nested or inner function has acces to same stuff as the parent function or granparent function.
  // If we define a new variable in the function, IT DOES NOT WORK. BE AWARE! :-)
}

// -----------------------------------------

// FUNCTION EXPRESSIONS

function add(x, y) {
  return x + y;
}
// Another typing a function  methods is:
// const add = function (x, y) {
//   return x + y;
// }; // Functions are values in JS. JS basicly consider functions as any other value, like an array.

const square = function (num) {
  return Math.pow(num);
};

// -------------------------------------------

// HIGHER ORDER FUNCTOINS
// Fancy way of saying functions work with other functions.
// Functions that operate on/with other functions.
// They can:
//      * Accept other functions as arguments
//      * Return a function

function callTwice(func) {
  func();
  func();
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

// --------------------------------------------

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      // function expression. Its a value. We can capture that and put it into a variable. Or, return it. As we do it in here.
      console.log("CONGRATS, I AM A GOOD FUNCTION!");
      console.log("YOU WIN A MILLION DOLLARS!!");
    };
  } else {
    return function () {
      alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
      alert("STOP TRYING TO CLOSE THIS WINDOW!");
    };
  }
}

// --------------------------------------------

// FUNCTION THAT GENERATES A FUNCTION BASED UPON SOME INPUT
// ** Factory Function: A function that will make a function for user. **

function makeBetweenFunc(min, max) {
  return function (num) {
    return num > min && num < max;
  };
}

// --------------------------------------------

// DEFINING METHODS

const myMath = {
  PI: 3.14159,
  square(num) {
    // Dont need to call a function. On the other hand, you could use a function to execute.
    return num * num;
  },
  cube(num) {
    return num ** 3;
  },
};

// -----------------------------------------

// "THIS" IN METHODS
// Use the keyword this to access other properties on the same object.

const cat = {
  name: "Blue Steele",
  color: "grey",
  breed: "scottish fold",
  meow() {
    console.log("this.name"); // meow() -> Blue Steele
  },
};

// The value of this depends on the invacation context of the function it is used in.
// It depends on how we call the function.

const meow2 = cat.meow; // We do not execute it.

// Egg Laying Exercise

// Define an object called hen. It should have three properties:
//  * name should be set to "Helen"
//  * eggCount should be set to 0
//  * layAnEgg should be a method which increments the value of eggCount by 1 and returns the string "EGG". You'll need to use this.

const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount += 1;
    return "EGG";
  },
};

// ----------------------------------------

// USING TRY / CATCH

function yell(msg) {
  console.log(msg.toUpperCase().repeat(3)); // if you type number in (msg) there will be "uncatch" error, due to there is no upper case of a number.
}

function yell(msg) {
  try {
    console.log(msg.toUpperCase.repeat(3));
  } catch (e) {
    console.log(e);
    console.log("Please pass a string next time!");
  }
}

// END
