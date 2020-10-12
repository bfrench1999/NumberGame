var randomNumber = Math.round(Math.random() * 100);
var maxNumberGuess = 5;
var totalGuess = 0;
var playerNumberInput = document.getElementById("number-field");
var submitAnswer = document.getElementById("number-button");
var easybtn = document.getElementById("easy-btn");
var medbtn = document.getElementById("med-btn");
var hardbtn = document.getElementById("hard-btn");
var difficultyMsg = document.getElementById("difficulty");
var guesRemainingMsg = document.getElementById("guess-remaining");
var coldHotMsg = document.getElementById("cold-hot");
var body = document.getElementsByTagName("body")[0];

playerNumberInput.style.visibility = "hidden";
submitAnswer.style.visibility = "hidden";
var selectedDifficulty = null;
easybtn.onclick = function () {
  if (selectedDifficulty === null) {
    selectedDifficulty = "easymode";
    console.log(selectedDifficulty);
    easybtn.style.visibility = "hidden";
    medbtn.style.visibility = "hidden";
    hardbtn.style.visibility = "hidden";
    playerNumberInput.style.visibility = "visible";
    submitAnswer.style.visibility = "visible";
    randomNumber = Math.round(Math.random() * 20);
    difficultyMsg.innerHTML = selectedDifficulty;
    console.log(body);
    body.style.backgroundColor = "#7ea04d";
  }
};
medbtn.onclick = function () {
  if (selectedDifficulty === null) {
    selectedDifficulty = "mediummode";
    console.log(selectedDifficulty);
    easybtn.style.visibility = "hidden";
    medbtn.style.visibility = "hidden";
    hardbtn.style.visibility = "hidden";
    playerNumberInput.style.visibility = "visible";
    submitAnswer.style.visibility = "visible";
    randomNumber = Math.round(Math.random() * 100);
    difficultyMsg.innerHTML = selectedDifficulty;
    body.style.backgroundColor = "#f0a500";
  }
};
hardbtn.onclick = function () {
  if (selectedDifficulty === null) {
    selectedDifficulty = "hardmode";
    console.log(selectedDifficulty);
    easybtn.style.visibility = "hidden";
    medbtn.style.visibility = "hidden";
    hardbtn.style.visibility = "hidden";
    playerNumberInput.style.visibility = "visible";
    submitAnswer.style.visibility = "visible";
    randomNumber = Math.round(Math.random() * 1000);
    difficultyMsg.innerHTML = selectedDifficulty;
    body.style.backgroundColor = "#ff414d";
  }
};
submitAnswer.onclick = function () {
  var playerNumber = playerNumberInput.value;
  console.log(playerNumber);
  if (playerNumber < randomNumber) {
    totalGuess++;
    console.log(
      "colder. " + (maxNumberGuess - totalGuess) + " guesses remaining"
    );
    guesRemainingMsg.innerHTML =
      "Guesses:" + (maxNumberGuess - totalGuess).toString();
    console.log(guesRemainingMsg);
    coldHotMsg.innerHTML = "cold";
  } else if (playerNumber > randomNumber) {
    totalGuess++;
    console.log(
      "hotter. " + (maxNumberGuess - totalGuess) + " guesses remaining"
    );
    coldHotMsg.innerHTML = "hot";
    guesRemainingMsg.innerHTML =
      "Guesses:" + (maxNumberGuess - totalGuess).toString();
  } else {
    totalGuess = 0;
    console.log("congrats i win...mortal");
    console.log("play again!");
    selectedDifficulty = null;
    playerNumberInput.style.visibility = "hidden";
    submitAnswer.style.visibility = "hidden";
    easybtn.style.visibility = "visible";
    medbtn.style.visibility = "visible";
    hardbtn.style.visibility = "visible";
  }
  if (totalGuess === maxNumberGuess) {
    console.log(
      " you lose...rough stuff play again maybe? " +
        randomNumber +
        " was the number you needed."
    );

    selectedDifficulty = null;
    playerNumberInput.style.visibility = "hidden";
    submitAnswer.style.visibility = "hidden";
    easybtn.style.visibility = "visible";
    medbtn.style.visibility = "visible";
    hardbtn.style.visibility = "visible";
    totalGuess = 0;
    console.log("you have 5 guess's to get it right!");
  }
};
