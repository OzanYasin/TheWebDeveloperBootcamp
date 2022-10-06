// FUNCTIONS
// Reusable procedures
// We define a "chunk" of code that we can then execute at a later point.

// ARGUMENTS
// We can also write functions that accept inputs, called arguments.
// avg(20, 25) -> "20, 25" is Argument|| 22.5; greet("Tim") && greet ("Anya") -> Tim and Anya are Arguments.
// "hello".toUpperCase(); //No input
// "hello".indexOf("h"); //"h" is input and it means an Argument is exist.

// !! EVERY METHOD IS ALSO A FUNCTION !!
// THEREFORE, ARGUMENTs ALSO EXIST IN METHODs.

function greet(firstName) {
  console.log(firstName.toUpperCase());
}

function repeat(str, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += str;
  }
  console.log(result);
}
repeat("I LOVE MY CHICKENS! ", 3); // I LOVE MY CHICKENS! I LOVE MY CHICKENS! I LOVE MY CHICKENS!

// !! ORDER IS CRUCIAL !!

// ----------------------------------

// ** THE RETURN KEYWORD **
// Now we can capture a return value in a variable!
// * Return executes the function.

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
  // RULES ABOUT return:
  // * ONLY ONE RETURN OF THESE RUNS.
  // * WE CAN ONLY RETURN A SINGLE VALUE.
  // * VALUE COULD BE AN ARRAY OR AN OBJECT.
  // * IF WE USE ARRAY, IT HAS TO BE SINGLE ARRAY.
  // * WE CAN USE add((x,y), z) TO GET VALUE OF (x + y + z).
}

function isShortsWeather(temperature) {
  if (temperature.parseInt >= 75) {
    return true;
  } else {
    return false;
  }
}

function capitalize(str) {
  let strCap = str[0].toUpperCase + str.slice(1);
  return strCap;
}
