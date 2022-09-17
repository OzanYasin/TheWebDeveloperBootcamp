// ---------- Async JavaScript ----------
// https://www.canva.com/design/DAEDg1njPt0/TDOoq58UG-FfO7WwpCNJWA/view?utm_content=DAEDg1njPt0&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

// ----- Call Stack -----
// The mechanism the JS interpreter uses to keep track of it's place in a  script that calls multiple functions

// HOW IT WORKS

// * When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
// * Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
// * When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.

const multiply = (x, y) => x * y;

const square = (x) => multiply(x, x);

const isRightTriangle = (a, b, c) => square(a) + square(b) === square(c);

isRightTriangle(3, 4, 5); // true

// ------ WebAPIs & Single Threaded ------

// JS is Single Threaded
// Which means, at any given point in time, that single JS thread is running at most one line of JS code.
// In other word, it cannot be multitasking in the sense that it's actually doing two thing simultaneously.

console.log('I print first');
setTimeout(() => {
  console.log('I print after 3 seconds');
});
console.log('I print second');

// How Browsers Works?

// * Browsers come with Web APIs that are able to handle certain tasks in the background (like making requests or setTimeout).
// * The JS call stack recognizes these Web API functions and passes them off to the browser to take care of.
// * Once the browser finishes those tasks, they return and are pushed onto the stack as a callback.

// So, the whole mechanism by which this works well, there is really two things.

// 1- The fact that browsers come with these functions, these things that browsers can do for us, for JS.
// 2- The concept of the callback of passing a function in that is not executed right away, but is instead executed later.

// --------- Callback Hell ---------

let searchMoviesAPI = () => (
  'amadeus',
  () => {
    saveToMyDataBase(
      movies,
      () => {
        // if it works, run this:
      },
      () => {
        // if it does'nt work, run this:
      }
    );
  },
  () => {
    // if API is down, or request failed.
  }
);

// The whole idea of having to use callbacks, something we can't get around, or at least having to provide a mechanism for running code later. At some undetermined point of time. JS moves on, it just does one thing in a time, and keeps going.

// In conclusion, we have to use callbacks or something to delay code execution, and due to that, thing get messy :D.

// Fortunately, there are newer additions to language that makes things easier.
// !!! Promisses & Ascyn funtions !!!

// --------- Demo: fakeRequest Using Callbacks ---------

// ---- Enter Promises ----
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const makeRequest = () => (
  () => {
    // This calls makeRequest function to check does it work
  },
  () => {
    // If the first function did not work, then call this function.
  }
);

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout :(');
    } else {
      success(`Here is your fake data from ${url}`);
    }
  }, delay);
};

// fakeRequestCallback(
//   "books.com/page1",
//   function (response) {
//     console.log("IT WORKED (1st)!!!");
//     console.log(response);
//     fakeRequestCallback(
//       "books.com/page2",
//       function (response) {
//         console.log("IT WORKED AGAIN (2nd)!!!");
//         console.log(response);
//         fakeRequestCallback(
//           "books.com/page3",
//           function (response) {
//             console.log("IT WORKED AGAIN (3rd req)!!!");
//             console.log(response);
//           },
//           function (err) {
//             console.log("ERROR (3nd req)!!!", err);
//           }
//         );
//       },
//       function (err) {
//         console.log("ERROR (2nd)!!!", err);
//       }
//     );
//   },
//   function (err) {
//     console.log("ERROR (1st)!!!", err);
//   }
// );

// If the success callback does not work, fakeRequestCallback function is going to stop.

// ------- Demo: fakeRequest Using Promises -------
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// Does not support Internet Explorer (browser)
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout');
      } else {
        resolve(`Here is your fake data from ${url}`);
      }
    }, delay);
  });
};

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then(() => {
//     // method called .then
//     console.log("IT WORKED!!! (page1)");
//     fakeRequestPromise("yelp.com/api/coffee/page2")
//       .then(() => {
//         console.log("IT WORKED!!! (page2)");
//         fakeRequestPromise("yelp.com/api/coffee/page3")
//           .then(() => {
//             console.log("IT WORKED!!! (page3)");
//           })
//           .catch(() => {
//             console.log("ERROR!!! (page3)");
//           });
//       })
//       .catch(() => {
//         console.log("ERROR!!! (page2)");
//       });
//   })
//   .catch(() => {
//     // method called .catch
//     console.log("ERROR!!! (page1)");
//   }); // We pass a callback on both of them (.then & .catch), but only one will run

// How is that any better than fakeRequestCallback?

// We are not nesting as fakeRequestCallback, instead wee call .then & .catch methods on the returned Promise object.

// -------- THE MAGIC OF PROMISES --------

// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("IT WORKED!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!! (page3");
//     console.log(data);
//   })
//   .catch(() => {
//     // That .catch works for all of them
//     console.log("ERROR");
//   });

// Looks better right? :)

// ------ Creating Our Own Promises ------

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve('YOUR FAKE DATA IS HERE');
      }
      reject('Request Error!');
    }, 1000);
  });
};

fakeRequest('/dogs/1')
  .then((data) => {
    console.log('DONE WITH REQUEST!');
    console.log(`Data is : ${data}`);
  })
  .catch((err) => {
    console.log('OH NO', err);
  });

// ----------------------------

// const delayedColorChange = (newColor, delay, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     doNext && doNext(); // It means, if doNext exist (true) -> execute doNext
//   }, delay);
// };

// delayedColorChange('red', 1000, () => {
//   delayedColorChange('orange', 1000, () => {
//     delayedColorChange('yellow', 1000, () => {
//       delayedColorChange('green', 1000, () => {
//         delayedColorChange('blue', 1000, () => {
//           delayedColorChange('indigo', 1000, () => {
//             delayedColorChange('violet', 1000);
//           });
//         });
//       });
//     });
//   });
// });

// Let's make it cleaner and more readable:

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    // There is no reason to use reject()
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('red', 1000))
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000));

// There is just one level nesting. Just better =)

// !!!! 2 Pieces: !!!!

// 1- Async Keyword
// 2- Await Keyword

// ------ The Async Keyword ------

//    * Async functions always return a promise.

async function hello() {} // It returns promise automatically.

//    * If the function returns a value, the promise will be resolved with that value

const sing = async () => {
  return 'LA LA LA LA';
};

sing().then((data) => {
  console.log('PROMISE RESOLVED WITH:', data);
});

//    * If the function throws an exception, the promise will be rejected

const login = async (username, password) => {
  if (!username || !password) throw 'Missing Credentials';
  if (password === 'corgifeetarecute') return 'WELCOME!';
  throw 'Invalid Password';
};

login('kalsdfj', 'corgifeetarecute')
  .then((msg) => {
    console.log('LOGGED IN!');
    console.log(msg);
  })
  .catch((err) => {
    console.log('ERROR');
    console.log(err);
  });

// Promise is either resolved or rejected depending on what's going on inside of it. If we return a value, the promise will be resolved with thath value. If we throw an error, the promise will be rejected with that value or with an error value.

// ------ The Await Keyword ------

//    * We can only use the await keyword inside of functions declared with async.
//    * Await will pause the execution of the function, waiting for a promise to be resolved.

// delayedColorChange('red', 1000)
//   .then(() => delayedColorChange('red', 1000))
//   .then(() => delayedColorChange('orange', 1000))
//   .then(() => delayedColorChange('yellow', 1000))
//   .then(() => delayedColorChange('green', 1000))
//   .then(() => delayedColorChange('blue', 1000))
//   .then(() => delayedColorChange('indigo', 1000))
//   .then(() => delayedColorChange('violet', 1000));

async function rainbow() {
  await delayedColorChange('red', 1000); // It's going to wait for a promise to be resolved
  await delayedColorChange('orange', 1000);
  // It will execute orange if we don't use await keyword
  await delayedColorChange('yellow', 1000);
  // So, if you want to keep going, just keep awaiting things.
  await delayedColorChange('green', 1000);
  await delayedColorChange('indigo', 1000);
  await delayedColorChange('violet', 1000);
  return 'ALL DONE!'; // It will be resolved promise because I return a value
}

rainbow().then(() => console.log('END OF RAINBOW! '));
// OR WE CAN USE THIS:
async function printRainbow() {
  await rainbow();
  console.log('END OF RAINBOW');
}

// ------- Handling Errors In Async Functions -------

async function makeTwoRequests() {
  try {
    let data1 = await fakeRequest('/page1');
    let data2 = await fakeRequest('/page2');
  } catch (e) {
    console.log('CAUGHT AN ERROR!');
    console.log(`error is: ${e}`);
  }
} // In real world, if we're making a request, there are different things that could go wrong. So, a promise will be rejected with a reason, with some information, and we can then access that if we have a parameter for our 'catch'.

// END
