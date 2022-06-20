// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form"); // selected from element.
const list = document.querySelector("#list"); // selected ul element that has list id.

form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevented default behaviour of from element.

  const productInput = form.elements.product; // reached form element's "product" named tag.
  const quantityInput = form.elements.qty; // reached form element's "qty" named tag.

  newList(productInput.value, quantityInput.value); // called function "newList".
  productInput.value = ""; // reset input value
  quantityInput.value = ""; // reset input value
});

const newList = (product, quantity) => {
  // a new function to call in eventListener to make cleaner look and understandable.
  const newLi = document.createElement("li"); // created new "li" element and saved in a variable that called "newLi"
  newLi.innerText = `${quantity} ${product}`; // changed new list's content.
  list.appendChild(newLi); // appended new li element into variable called list which is reached out to the "list" id.
};
