// Append exercise: Pokemon Sprites
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
// The point is to create all of these imgages dynamically using JS.

const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

for (let i = 1; i <= 151; i++) {
  const pokemon = document.createElement("div");
  const span = document.createElement("span");
  span.innerText = `#${i}`;
  const newImg = document.createElement("img");
  newImg.src = `${baseURL}${i}.png`;

  container.appendChild(pokemon);
  pokemon.appendChild(newImg);
  pokemon.appendChild(span);

  pokemon.classList.add("pokemon");
}

/* <div>
  <img>
    <span>#num</span>
  </img>
</div>; */
