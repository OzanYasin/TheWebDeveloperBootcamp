// Object Oriented Program (OOP)

// Every object in JavaScript has a built-in property, which is called its prototype. The prototype is itself an object.
// https://www.udemy.com/course/the-web-developer-bootcamp/learn/lecture/23344412#overview
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#the_prototype_chain

String.prototype.yell = function () {
  // its a custom prototype that called "yell"
  console.log(this);
};

// Object Oriented Programming

// It means organizing our code, designing and structuring our applications by breaking things up into distinct patterns of objects.

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming

// ----------------------

// Factory Functions

function makeColor(r, g, b) {
  const color = {};
  color.r = r;
  color.g = g;
  color.b = b;
  color.rgb = function () {
    // console.log(this);
    const { r, g, b } = this;
    return `rgb(${r}, ${g}, ${b})`;
  };
  return color;
}

const firstColor = makeColor(35, 255, 150);
// firstColor.rgb();

// This function makes us an object (color). It starts empty, but then we add some properties based off of arguments that we were provided.
// Then we add some methods and then we return that object (color).
// This is called a factory function.
// This is one way of making objects based off of a pattern or a recipe.

// This not the way people use. It's just not as ideal as it could be.

// ----------------------------

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
//   console.log(this); // it refers to the window due to its not in an object. It's just in the scope of a function. So, the nearest scope is window.
// }

// new Color(255, 40, 100);
// new will be used to create a new object for you based off of this pattern. (instead of refers to window)

// Any time we call it with a *new* keyword, it makes us a new object that sets the constructor to color of that object, and then it sets the value of this to that new empty object.

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r},${g},${b})`;
// };

// const color1 = new Color(50, 100, 150); // if we have a look at color1 variable, it does not have that method rgb defined on itself.
// It's defined on the prototype (__proto__)

// **But we can still call color1.rgb(), which is the very important part.
// We can still access it from the prototype object, just like with an array or a string.
// So, this more efficient than our factory approach, where we return a new object every time it's called.

// ---------------------------------

// JavaScript Classes

class Color {
  constructor(r, g, b, name) {
    // lets make an equality between arguments by using this.
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    // those are the properties we are adding to the object.
  }
  // We do not have to type Color.prototype.greet
  // We just put it inside this class, so we can group everything together.
  greet() {
    return `Hello From ${this.name}!`;
  }
  rgb() {
    const { r, g, b } = this;
    return `rgb(${r},${g},${b})`;
  }
}

const c1 = new Color(255, 67, 89);
const white = new Color(255, 255, 255, 'white');
