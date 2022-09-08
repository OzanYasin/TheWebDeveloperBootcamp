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
