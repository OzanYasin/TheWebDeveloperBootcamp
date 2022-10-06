const button = document.querySelector("#changeColor");
const container = document.querySelector("#container");

button.addEventListener("click", function (e) {
  container.style.backgroundColor = randomColor();
  e.stopPropagation(); // !!! to stop event bubbling. !!!
});

container.addEventListener("click", function () {
  container.classList.add("hide"); // event is bubbled. it will add "hide" class even if you clicked to the button.
});

// The order is what matters. The event bubbles up to the top and we can stop that by using event.stopPropagation().
// En icteki event'e stopPropogation() methodu eklenir.

const randomColor = () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
};

// END
