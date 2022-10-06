const form = document.querySelector('#searchForm');

// Axios function:
form.addEventListener('submit', async function (e) {
  // Prevent Default Form action (GET)
  e.preventDefault();
  // console.dir();
  const searchTerm = form.elements.query.value;
  // We are looking for params. q: is searching term for api.tvmaze.com
  const config = { params: { q: searchTerm } }; // we pass config object to add as query string (params)
  // Must have 'await' to call axios.get
  const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
  getImages(res.data);
  form.elements.query.value = ''; // Emptying search input after click on button
});

// Let's extract whatever the user has in input, whatever they typed in.
const getImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
};
