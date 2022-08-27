// Reduce
// iterates, callback function
// reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations
// 2nd parameter ('curr') - current iteration/value

// ------------ Reduce Basics ------------

const staff = [
  { name: 'bob', age: 20, position: 'developer', salary: 100 },
  { name: 'peter', age: 25, position: 'designer', salary: 300 },
  { name: 'angelica', age: 30, position: 'the boss', salary: 400 },
  { name: 'anna', age: 35, position: 'intern', salary: 10 },
];

const dailyTotal = staff.reduce((total, person) => {
  console.log(total); // 0 100 400 800
  console.log(person.salary); // 100, 300, 400, 10;
  total += person.salary;
  return total;
}, 0);

console.log(dailyTotal); // 810

// ------------ Reduce (object example) ------------
