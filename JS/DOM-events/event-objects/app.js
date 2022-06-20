// Event Objects & Keyboard Events

const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", function (event) {
  console.log(event);
});

// input.addEventListener("keydown", (e) => {
//   console.log(e.key);
//   console.log(e.code);
// });

// window.addEventListener("keydown", (e) => console.log(e.code));

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("up");
      break;
    case "ArrowDown":
      console.log("down");
      break;
    case "ArrowLeft":
      console.log("left");
      break;
    case "ArrowRight":
      console.log("right");
      break;
    default:
      console.log("IGNORED");
  }
});
