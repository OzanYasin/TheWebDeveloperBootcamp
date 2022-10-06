// Loops allow us to repeat code
// There are multiple types:
// -for loop,
// -while loop,
// -for..of loop,
// -for..in loop

// --------------------------
// for loop sytntax
// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression]
// )

// for (let i = 1; i <= 10; i += 1) {
// i++ equals to "i += 1
//  console.log(i);
// }

// for (let i = 0; i <= 20; i += 2) {
//  console.log(i);
// Even numbers from 0 to 20
// }

// for (let i = 1; i <= 20; i += 2) {
//  console.log(i);
// Odd numbers from 0 to 20
// }

// for (let i = 100; i >= 0; i -= 10) {
//  console.log(i);
//   // Going down from 100 to 0, 10 by 10
// }

// for (let i = 10; i <= 1000; i *= 10) {
//  console.log(i);
//   //   10 times i until reach 1000
// }

// --------------------------------

// Infinite Loops

// DO NOT RUN THIS CODE! lol
// for (let i = 20; i >= 0; i++) {
//  console.log(i);
// }

// ----------------------------------

// Looping Over Arrays

// const animals = ["lions", "tigers", "bears"];
// for (let i = 0; i < animals.length; i++) {
//   console.log(i, animals[i]);
// }
// 0 'lions'
// 1 'tigers'
// 2 'bears'

// const animals = ["lions", "tigers", "bears"];

// for (let i = animals.length - 1; i >= 0; i--) {
//   console.log(animals[i]);
// }

// -------------------------------

// Nested Loops:

// Array içinde birden fazla array varsa tek bir for döngüsü ile sadece arrayleri gösterebilirsin. Iki for dongusu array icinde array varken onları kolonlar halinde ayrı ayrı göstermene yarar.

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   console.log(`ROW #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(`   ${row[j]}`);
//   }
// }

// ---------------------------------

// While Loops:

// let count = 0; // 1 to 10
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("enter the secret code pls");
// while (guess !== SECRET) {
//   guess = prompt("enter the secret code pls");
// }
// console.log("YOU ARE IN");

// let input = prompt("Hey, say something");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop") break;
// }
// console.log("OK, YOU ARE IN");

// ---------------------------------

// Guessing Game!

// let maximum = parseInt(prompt("Enter the maximum number"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number pls"));
// }

// const targetNum = Math.floor(Math.random() * maximum + 1);
// console.log(targetNum);

// let guess = parseInt(prompt("Enter your first guess!"));
// let attemps = 1;

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   attemps++;
//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess");
//   } else {
//     guess = prompt("Too low! Enter a new guess");
//   }
// }
// if (guess === "q") {
//   console.log("OK, YOU QUIT.");
// } else {
//   console.log(`CONGRATS! YOU WIN. IT TOOK ${attemps} guesses.`);
// }

// --------------------------------

// For...Of
// A nice and easy way of iterating over arrays (or other iterable objects)
// ! No Internet Explorer Support !
// for (variable of iterable) {statement}

// const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer"];
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// for (let sub of subreddits) {
//   console.log(`Visit reddit.com/r/${sub}`);
// } // Same thing with above. Nicer and easier.

// ----------------------------------

// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// for (let row of seatingChart) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// --------------------------------------

// Power 2 of every numbers by using for...Of

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let square of numbers) {
//   console.log(Math.pow(square, 2));
// }

// ---------------------------------------

// Intering Over Objects

// Arithmetic Mean Calc:

// const testScores = {
//   keenan: 80,
//   damon: 67,
//   kim: 89,
//   shawn: 91,
//   marlon: 72,
//   dwayne: 77,
//   nadia: 83,
//   elvira: 97,
//   diedre: 81,
//   vonnie: 60,
// };

// let total = 0;
// let scores = Object.values(testScores);
// for (score of scores) {
//   total += score;
// }
// console.log(total / scores.length);
