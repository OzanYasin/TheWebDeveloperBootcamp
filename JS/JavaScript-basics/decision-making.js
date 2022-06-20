// -----------------------------------

const word = "skateboard"; // conts / let / var => variable

console.log(word); // konsola yazdırır

let facialHair = word.slice(5).replace("o", "e");

console.log(facialHair); // "beard"

parseInt(); // string > number

// -----------------------------------

// if statement:

let random = Math.random();
if (random < 0.5) {
  console.log("your number is less than 0.5");
  console.log(random);
} else {
  console.log("your number is greater than 0.5");
  console.log(random);
}

// -----------------------------------

// even or odd

let num = 20;
if (num % 2 === 0) {
  console.log(`${num} is even`);
} else {
  console.log(`${num} is odd`);
}

// -----------------------------------

// 0-5 Free
// 5-18 Child $10
// 18-65 Adult $20
// 65+ Senior $10

// const age = prompt("Enter your age pls"); // using const beacuse age never change

// if (age < 5) {
//   console.log("You are a baby. You get in for free!");
// } else if (age < 18) {
//   console.log("You are a child. You pay $10");
// } else if (age < 65) {
//   console.log("You are an adul. You pay $20");
// } else if (age >= 65) {
//   console.log("Hello Senior. You pay $10");
// }

// -----------------------------------

// const password = prompt("PLS ENTER A NEW PASSWORD");
// // password must be 6+ characters
// // password cannot include space
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) { // nested conditions
//     console.log("Valid password. Good job!");
//   } else { // means anything else
//     console.log("Invalid password. Your password contains spaces.");
//   }
// } else { // else for 1st condition
//   console.log("Invalid password. Password must be 6+ characters.");
// }

// -----------------------------------

// "LOGICAL AND" --- && --- both sides must be true
// 1 <= 4 && "a" === "a"; // true
// 9 > 10 && 9 >= 9; // false

// const password = prompt("Enter your password");

// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("Valid password");
// } else {
//   console.log("Invalid password");
// }

// -----------------------------------

// "LOGICAL OR" --- || --- if one side is true, the entire thing is true
// 1 !== 1 || 10 === 10 // true
// 10/2 === 5 || null // true
// 0 || undefined // false

// 0-5 FREE**
// 5-18 $10
// 18-65 $20
// 65+ FREE**

// const age = prompt("What is your age?");

// if ((age > 0 && age <= 5) || (age >= 65 && age <= 120)) {
//   console.log("FREE");
// } else if (age > 5 && age <= 18) {
//   console.log("$10");
// } else if (age > 18 && age <= 65) {
//   console.log("$20");
// } else {
//   console.log("Invalid Age!");
// }

// -----------------------------------

// "LOGICAL NOT" --- ! --- !expression return true if expression is false
// !null // true
// !(0 === 0) // false
// !(3 <= 4) // false

// -----------------------------------

// END
