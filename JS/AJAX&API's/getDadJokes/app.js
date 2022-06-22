const jokes = document.querySelector('#jokes');
const button = document.querySelector('#button');

// NEW LI
const addNewJoke = async () => {
  const jokeText = await getDadJokes();
  const newLI = document.createElement('LI');
  newLI.append(jokeText);
  jokes.append(newLI);
};

// API
const getDadJokes = async () => {
  try {
    const config = { headers: { Accept: 'application/json' } };
    // This headers are not standart for every single API that it requires that. (Accept in our case)
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;
  } catch (e) {
    return 'NO JOKES AVAILABLE! SORRY :(';
  }
};

// BUTTON
button.addEventListener('click', addNewJoke);
