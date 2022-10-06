// EVENT DELEGATION
// It's more like a strategy to write our code.

// Our goal is removing the tweets that we add to list previously.

const tweetForm = document.querySelector("#tweetForm");
const list = document.querySelector("#tweets");

tweetForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const usernameInput = tweetForm.elements.username;
  const tweetInput = tweetForm.elements.tweet;
  addTweet(usernameInput.value, tweetInput.value);
  usernameInput.value = "";
  tweetInput.value = "";
});

const addTweet = (username, tweet) => {
  const newTweet = document.createElement("li");
  const bTag = document.createElement("b");
  bTag.append(username);
  newTweet.append(bTag);
  newTweet.append(` - ${tweet}`);
  list.append(newTweet);
};

list.addEventListener("click", function (e) {
  // console.dir(e.target) to find out what is the name of the target that has the "li" return. (nodeName: LI)
  e.target.nodeName === "LI" && e.target.remove(); // if it is nodeName equals to LI than to e.target.remove(). If the left side is false, right side of && does not run.
  // we did that to remove only li element. Not to remove something like <p> if its there.
});

// END
