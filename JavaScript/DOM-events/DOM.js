// Document Object Model
//  * The DOM is a JS representation of a webpage.
//  * It's your JS "window" into the contents of a webpage.
//  * It's just a bunch of objects that you can interact with via JS.

// HTML + CSS Go In... --- JS Objects Come Out

// Document
// console.dir(document)
// The document object is our entry point into the world of the DOM.
// It contains representations of all the content on a page, plus tons of useful methods and properties.

// ------------------------------

// 1 SELECT
// 2 MANIPULATE

// *** SELECTING ***

//  * getElementById
//  * getElementsByTagName
//  * getElementsByClassName

// --------------------------------

// ** document.getElementById() **

// ** document.getElementsByTagName() **
// ** document.getElementsByClassName() **

// const allImages = document.getElementsByTagName("img");

// for (let img of allImages) {
//   console.log(img.src);
// }

// ----------------------

// document.getElementsByTagName("p");
// document.getElementsByTagName("div");

// ----------------------

// !! Element in JS is that object that we are getting back that has all these properties that represents a single HTML element.

// document.getElementsByClassName("square");

// const squareImages = document.getElementsByClassName("square");

// for (let img of squareImages) {
//   img.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg";
// } // sadece "square" class'ina sahip olan img sourcelari degisti.

// -----------------------------------------

// querySelector & querySelectorAll
// A newer, all-in-one method to select a single element.

// Finds first h1 element:
document.querySelector("h1");

// Finds first element with ID of red:
document.querySelector("#red");

// Finds first element with class of big:
document.querySelector(".big");

// Finds first anchor tag with title "Java":
document.querySelector('a[title="Java"]');

// ------------

// *** querySelectorAll ***
// Same idea, but returns a collection of matching elements

// const links = document.querySelectorAll("p a");

// for (let link of links) {
//   console.log(link.href);
// }

// ----------------------------

// *** innerHTML, textContent, & innerText ***

const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.innerText = "I am a link.";
}

// innerContent & innerText works like same, but innerContent gives everything inside of text unlike innerText. (exp: hidden msg)

// -------------------

// To overwrite HTML need to use innerHTML

document.querySelector("h1").innerHTML = "<i>loololloolol</i>"; // gives bold h1

// All 3 of them update content of the text, but not use HTML elements like innerHTML.

document.querySelector("h1").innerHTML += "<sup>asfsdg</sup>";

// -------------------------------------

// *** Attributes ***

// document.querySelector("#banner").id = "whoops"; // changes "banner" id to "whoops".

// We can access directly by using .attribute

// *** Another way of accessing attributes: getAttribute() & setAttribute() ***

const firstLink = document.querySelector("a");

// firstLink.getAttribute("title"); // List of chicken breeds

firstLink.setAttribute("href", "http://www.google.com"); // first link is changed to www.google.com

// -----------------------------------------

// *** Changing Styles ***

const h1 = document.querySelector("h1");

// h1.style; // return all css attributes

// const allLinks = document.querySelectorAll("a");

for (let link of allLinks) {
  link.style.color = "rgb(0, 108, 134";
  link.style.textDecorationColor = "magenta";
  link.style.textDecorationStyle = "wavy";
} // That is not a great idea to change style from JS but it's possible to do. :-)

// ------------------------------------------

// ClassList
// !! Pretty common to manipulate classes.

const h2 = document.querySelector("h2");

h2.setAttribute("class", "purple"); // add first h2 to purple class
h2.setAttribute("class", "border"); // it will add border class to first h2 instead of purple.

// instead of this we use classList.add("class");

h2.classList.add("purple"); // add purple class
h2.classList.remove("border"); // remove border class
h2.classList.contains("border"); // false
h2.classList.contains("purple"); // true
h2.classList.toggle("purple"); // toggle (close) purple class
h2.classList.toggle("purple"); // toggle (open) purple class

h2.getAttribute("class"); // "purple"

// ----------------------------------

// *** Traversing Parent/Child/Sibling ***

const firstBold = document.querySelector("b");

// console.log(firstBold.parentElement); // <p>...</p>
// console.log(firstBold.parentElement.parentElement); // <body>...</body>

const paragraph = firstBold.parentElement;

// console.log(paragraph.children); // [b, b, a, a, a, a, a, a]
// console.log(paragraph.children[0]); // <b>Silkie</b>

// ** nextElementSibling & previousElementSibling **

const squareImg = document.querySelector(".square");

// console.log(squareImg.nextElementSibling); // return next img
// console.log(squareImg.previousElementSibling); // return previous p

// ------------------------------------

// append & appendChild
// Document.createElement()

// document.createElement("img")

const newImg = document.createElement("img");

console.dir(newImg); // img

newImg.src =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";

document.body.appendChild(newImg); // add newImg variable to body as last element.
newImg.classList.add("square"); // added square class to newImg

const newH3 = document.createElement("h3"); // <h3></h3> created as newH3
newH3.innerText = "I am new!"; // content of newH3 changed

document.body.appendChild(newH3); // newH3 (<h3>I am new!</h3>) appended to body.

// ** append => different from appendChild

const p = document.querySelector("p");
p.append("I am new text!!!"); // appended to end of the first p tag. Can not done with appendChild. It gives error.
// We can append more than one element. p.append("blablabla, blablablabla")

// prepend => works like append but goes to beginning.

// const h1 = document.querySelector("h1");

const H2 = document.createElement("h2");

H2.append("Are adorable chickens");
h1.insertAdjacentElement("afterend", H2); // insert H2 variable's content (<h2>Are adorable chickens</h2>) after end of the h1.

// ----------------------------------

// removeChild & remove

const firstLi = document.querySelector("li");

// firstLi.removeChild() // can not used in that way.
// Instead of that, we should reach through ul > li
// Which means:
const ul = firstLi.parentElement;

ul.removeChild(firstLi); // removed '"add" - Add A Todo'

//Another way of doing that:
const b = document.querySelector("b");

b.parentElement.removeChild(b); // removes <b>Silkie</b>

// ----------------

// remove() => No need to parent. Remove what you want :-)
// Better than removeChild() but not supported on Internet Explorer unlike removeChild().

const img = document.querySelector("img");

img.remove();

// END
