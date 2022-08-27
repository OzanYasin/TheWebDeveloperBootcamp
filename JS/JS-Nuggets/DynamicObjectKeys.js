// Dynamic Object Keys

const person = {
  name: 'john',
};

console.log(person.name); // john
person.age = 25;
console.log(person); // { name: 'john', age: 25}

// square bracket notation

const items = {
  'featured-items': ['item1', 'item2'],
};

console.log(items['featured-items']); // [ 'item1', 'item2' ]
console.log(person['name']); // john

let appState = 'loading';
// ** Value for my variable, now is going to be key name.
const keyName = 'computer';
const app = {
  [appState]: true,
};

app[keyName] = 'apple';

console.log(app); // { loading: true, computer: 'apple' }

const state = {
  loading: true,
  name: '',
  job: '',
};

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'john');
updateState('job', 'developer');
updateState('loading', false);

updateState('products', []);
updateState('name', 'peter');
console.log(state); // {loading: false, name: 'peter', job: 'developer', products: []}
