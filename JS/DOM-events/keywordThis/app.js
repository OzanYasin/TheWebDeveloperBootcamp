// The Goal is give each button to random background color.

const button = document.querySelectorAll("button");
const h2s = document.querySelectorAll("h2");

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

for (let btn of button) {
  btn.addEventListener("click", colorize);
}

// for (let btn of button) {
//   btn.addEventListener("click", function () {
//     btn.style.backgroundColor = randomColor();
//     btn.style.color = randomColor();
//   });
// }

for (let h2 of h2s) {
  h2.addEventListener("click", colorize);
}

function colorize() {
  this.style.backgroundColor = randomColor();
  this.style.color = randomColor();
}
// "this" with refer to that something that was acted upon interacted whatever the event was triggered on.

// END
