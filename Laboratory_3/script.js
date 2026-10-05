function calculateSum(a, b) {
  return a + b;
}

console.log("Suma 5 + 3 =", calculateSum(5, 3));
console.log("Suma 10 + 25 =", calculateSum(10, 25));
console.log("Suma -4 + 12 =", calculateSum(-4, 12));

const student = {
  name: "Alexandru",
  age: 67,
  grade: 166,
  introduce: function () {
    console.log("Sunt " + this.name + " și am " + this.age + " ani.");
  }
};

student.introduce();
student.grade = 167;
console.log("Noua valoare a proprietății grade:", student.grade);

const choices = ["piatra", "hartia", "foarfeca"];

const gameScore = {
  player: 0,
  computer: 0,
  draws: 0,

  displayScore: function () {
    alert(
      "Scor actual:\n" +
      "Tu: " + this.player + "\n" +
      "Calculator: " + this.computer + "\n" +
      "Egalități: " + this.draws
    );
  },

  reset: function () {
    this.player = 0;
    this.computer = 0;
    this.draws = 0;
  }
};

const playerChoiceEl = document.getElementById("player-choice");
const computerChoiceEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");
const roundsEl = document.getElementById("rounds");
const leaderEl = document.getElementById("leader");

function getComputerChoice() {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

function getWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    gameScore.draws++;
    return "draw";
  }

  if (
    (playerChoice === "piatra" && computerChoice === "foarfeca") ||
    (playerChoice === "foarfeca" && computerChoice === "hartia") ||
    (playerChoice === "hartia" && computerChoice === "piatra")
  ) {
    gameScore.player++;
    return "player";
  }

  gameScore.computer++;
  return "computer";
}

function updateScoreOnPage() {
  scoreEl.textContent =
    "Scor: Tu " + gameScore.player +
    " | Calculator " + gameScore.computer +
    " | Egalități " + gameScore.draws;

  const totalRounds = gameScore.player + gameScore.computer + gameScore.draws;
  roundsEl.textContent = "Runde jucate: " + totalRounds;

  if (gameScore.player > gameScore.computer) {
    leaderEl.textContent = "Tu conduci!";
  } else if (gameScore.computer > gameScore.player) {
    leaderEl.textContent = "Calculatorul conduce!";
  } else {
    leaderEl.textContent = "Scorul este egal.";
  }
}

function checkFinalWinner() {
  if (gameScore.player === 5) {
    alert("Felicitări! Ai câștigat jocul cu 5 victorii!");
    resetGame();
  } else if (gameScore.computer === 5) {
    alert("Calculatorul a câștigat jocul cu 5 victorii!");
    resetGame();
  }
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);

  playerChoiceEl.textContent = playerChoice;
  computerChoiceEl.textContent = computerChoice;

  if (winner === "player") {
    resultEl.textContent = "Ai câștigat!";
  } else if (winner === "computer") {
    resultEl.textContent = "Calculatorul a câștigat!";
  } else {
    resultEl.textContent = "Egalitate!";
  }

  updateScoreOnPage();

  setTimeout(function () {
    gameScore.displayScore();
    checkFinalWinner();
  }, 50);
}

function resetGame() {
  gameScore.reset();
  playerChoiceEl.textContent = "-";
  computerChoiceEl.textContent = "-";
  resultEl.textContent = "Alege o variantă pentru a începe!";
  leaderEl.textContent = "";
  updateScoreOnPage();
}

document.getElementById("btn-piatra").addEventListener("click", function () {
  playRound("piatra");
});
document.getElementById("btn-hartia").addEventListener("click", function () {
  playRound("hartia");
});
document.getElementById("btn-foarfeca").addEventListener("click", function () {
  playRound("foarfeca");
});
document.getElementById("btn-reset").addEventListener("click", resetGame);
