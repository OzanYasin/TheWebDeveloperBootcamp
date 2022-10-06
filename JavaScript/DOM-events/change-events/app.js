// Input & Change Events

const input = document.querySelector("input");
const h1 = document.querySelector("h1");

// input.addEventListener("change", function(e) {
//   console.log("changed") // input'a bir sey yazdildiktan sonra baska yere tiklandigi zaman log atar.
// })

input.addEventListener("input", (e) => {
  // console.log("INPUT EVENT"); // if you type anything it will be triggered.
  h1.innerHTML = input.value; // That will change the value of h1
});
