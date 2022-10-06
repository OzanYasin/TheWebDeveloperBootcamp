// We are going to use DOM Manipulation, working with events, HTML + some basic CSS.
// Score Keeping Widget
// There is 2 Player
// Each Player Has a Button
// You Can Select What You Want to Play Up to.
// Winner's Score Has Green Color, While has-text-danger's Score is Red.
// Reset Button.
const p1 = {
  score: 0,
  button: document.querySelector("#p1Button"),
  display: document.querySelector("#p1Display"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#p2Button"),
  display: document.querySelector("#p2Display"),
};

const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    // it will stop if isGameOver is true
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success"); // https://bulma.io/documentation/helpers/color-helpers/
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

// For player1
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

// For player2
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value); // "this" refers to that specific object that we are listening event on.
  reset(); // We prefer to reset score after choosing a new winningScore.
});

resetButton.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
