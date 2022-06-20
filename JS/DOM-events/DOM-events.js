// EVENTS
// Responding to user inputs and actions!

// * inline events *
// Used in HTML. Do not recomended.

// ** The Onclick Property **
// Second way of adding events

const btn2 = document.querySelector("#btn2");

btn2.onclick = function () {
  console.log("YOU CLICKED ME!");
};

function scream() {
  console.log("STOP!");
}

btn2.onmouseenter = scream;

// *** addEventListener ***
// Third and the best way of adding events. :-)
// https://developer.mozilla.org/en-US/docs/Web/Events

const btn3 = document.querySelector("#btn3");

btn3.addEventListener("dblclick", function () {
  alert("CLICKED"); // first argument must be the type of the event; second one is the call back.
});

// There are bunch of other arguments to pass in. For ex:

btn3.addEventListener("click", scream, { once: true }); // button click works for only once.
