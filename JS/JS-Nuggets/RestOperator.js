// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear'];
const [first, second, ...restOfTheFruits] = fruits;

console.log(first, restOfTheFruits);

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'lemon');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer' };
const { job, ...rest } = person;
console.log(job, rest);

// functions
// !! we use rest when we declare the function
// !! we use spread when we invoke the function

const getAverage = (name, ...scores) => {
  console.log(name);
  console.log(scores);
  const average =
    scores.reduce((total, item) => {
      return (total += item);
    }, 0) / scores.length;
  console.log(average);
};

const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores); // we did use spread operator to react nested array
