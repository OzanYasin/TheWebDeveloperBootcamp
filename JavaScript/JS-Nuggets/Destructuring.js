// Destructuring **Array**

// faster/easier way to access/unpack variables from arrays

const fruits = ['orange', 'banana', 'lemon'];
const friends = ['john', 'peter', 'bob', 'anna', 'kelly'];

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3);

const [john, peter, , , kelly, susan] = friends;

console.log(john, peter, kelly, susan); // john bob kelly undefined

// Destructuring **Object**

// faster/easier way to access/unpack values from objects

const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};

// Order does not matter unlike array deconstruction.
const {
  last: ShakeAndBake,
  first,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;

console.log(first, city, ShakeAndBake, favoriteSibling);
// bob chicago sanders jane

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;

function printPerson({ first, last, city, siblings: { sister } }) {
  // const { first, last } = person;
  console.log(first, last, sister); // bob sanders jane
}

printPerson(bob);
