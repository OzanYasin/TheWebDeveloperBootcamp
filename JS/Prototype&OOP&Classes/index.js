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
  innerRGB() {
    const { r, g, b } = this;
    return `${r},${g},${b}`;
  }
  rgb() {
    this;
    // const { r, g, b } = this;
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()},${a})`;
  }
}

const c1 = new Color(255, 67, 89);
const white = new Color(255, 255, 255, 'white');

// -----------------------------------------------

// !! Classes Practice !!

// This function converts a RGB color into a HSL color.
class ClassPracticeColorFunction {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
    this.calcHSL();
  }
  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }
  rgb() {
    return `rgb(${this.innerRGB()})`;
  }
  rgba(a = 1.0) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }
  hex() {
    const { r, g, b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  hsl() {
    const { h, s, l } = this;
    return `hsl(${h},${s}%, ${l}%)`;
  }
  fulllySaturated() {
    const { h, l } = this;
    return `hsl(${h},100%, ${l}%)`;
  }
  opposite() {
    const { h, s, l } = this;
    const newHue = (h + 180) % 360;
    return `hsl(${newHue},${s}%, ${l}%)`;
  }
  calcHSL() {
    let { r, g, b } = this;
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
      cmax = Math.max(r, g, b),
      delta = cmax - cmin,
      h = 0,
      s = 0,
      l = 0;
    if (delta == 0) h = 0;
    else if (cmax == r)
      // Red is max
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      // Green is max
      h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;
    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    this.h = h;
    this.s = s;
    this.l = l;
  }
}

// ---------------------------------------------

// Extends & Super Keywords

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

const monty = new Cat('monty', 8);
