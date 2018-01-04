// buttons mapped
let instructBtn = document.querySelector("#instructions");
let resetBtn = document.querySelector("#reset");
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let playerScore = document.querySelector("#playerScore");
let compScore = document.querySelector("#compScore");
let roundCounter = document.querySelector("#roundCounter");
let tiedCounter = document.querySelector("#tieScore");

// global variables
let compChoice;
let playerChoice;
let playerVictories = 0;
let compVictories = 0;
let numberOfRounds = 0;
let numberOfTies = 0;

instructBtn.addEventListener("click", (e) => {
	alert("Welcome to Rock-Paper-Scissors! This game is a best of 5 and ties DO NOT count torward anyone's score. Can you take down the RNG God that is the Computer?");
	alert("Please press the Rock, Paper, or Scissors button to begin.");
});

resetBtn.addEventListener("click", (e) => {
	numberOfRounds = 0;
	playerVictories = 0;
	compVictories = 0;
	numberOfTies = 0;

	playerScore.textContent = `Player Score: ${playerVictories}`;
	compScore.textContent = `Computer Score: ${compVictories}`;
	roundCounter.textContent = `Round ${numberOfRounds}`;
	tiedCounter.textContent = `Tied Score: ${numberOfTies}`;
});

rockBtn.addEventListener("click", (e) => {
	playerChoice = "rock";
	gameRock();
});

paperBtn.addEventListener("click", (e) => {
	playerChoice = "paper";
	gamePaper();
});

scissorsBtn.addEventListener("click", (e) => {
	playerChoice = "scissors";
	gameScissors();
});

function gameRock() {

	if (numberOfRounds < 4) {
		computerPlay();
		roundProcessesRock();	
	} else if (numberOfRounds == 4) {
		computerPlay();
		roundProcessesRock();
		finalResults();
	} else if (numberOfRounds == 5) {
		alert("You have completed 1 round of 5 games. Please reset if you wish to play another round.");
	}
}

function gamePaper() {

	if (numberOfRounds < 4) {
		computerPlay();
		roundProcessesPaper();
	} else if (numberOfRounds == 4) {
		computerPlay();
		roundProcessesPaper();
		finalResults();
	} else if (numberOfRounds == 5) {
		alert("You have completed 1 round of 5 games. Please reset if you wish to play another round.");
	}
}

function gameScissors() {

	if (numberOfRounds < 4) {
		computerPlay();
		roundProcessesScissors();
	} else if (numberOfRounds == 4) {
		computerPlay();
		roundProcessesScissors();
		finalResults();
	} else if (numberOfRounds == 5) {
		alert("You have completed 1 round of 5 games. Please reset if you wish to play another round.");
	}
}

function roundProcessesRock() {
	if (playerChoice == "rock" && compChoice == "paper") {
		compVictories = ++compVictories;
		numberOfRounds = ++numberOfRounds;
		compScore.textContent = `Computer Score: ${compVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You lose! You chose 'Rock' and the computer chose 'Paper'!");
	} else if (playerChoice == "rock" && compChoice == "rock") {
		numberOfTies = ++numberOfTies;
		numberOfRounds = ++numberOfRounds;
		tiedCounter.textContent = `Tied Score: ${numberOfTies}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You tie! You chose 'Rock' and the computer chose 'Rock'!");
	} else if (playerChoice == "rock" && compChoice == "scissors") {
		playerVictories = ++playerVictories;
		numberOfRounds = ++numberOfRounds;
		playerScore.textContent = `Player Score: ${playerVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You win! You chose 'Rock' and the computer chose 'Scissors'!");
	}
}

function roundProcessesPaper() {
	if (playerChoice == "paper" && compChoice == "paper") {
		numberOfTies = ++numberOfTies;
		numberOfRounds = ++numberOfRounds;
		tiedCounter.textContent = `Tied Score: ${numberOfTies}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You tie! You chose 'Paper' and the computer chose 'Paper'!");
	} else if (playerChoice == "paper" && compChoice == "rock") {
		playerVictories = ++playerVictories;
		numberOfRounds = ++numberOfRounds;
		playerScore.textContent = `Player Score: ${playerVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You win! You chose 'Paper' and the computer chose 'Rock'!");
	} else if (playerChoice == "paper" && compChoice == "scissors") {
		compVictories = ++compVictories;
		numberOfRounds = ++numberOfRounds;
		compScore.textContent = `Computer Score: ${compVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You lose! You chose 'Paper' and the computer chose 'Scissors'!");
	}
}

function roundProcessesScissors() {
	if (playerChoice == "scissors" && compChoice == "scissors") {
		numberOfTies = ++numberOfTies;
		numberOfRounds = ++numberOfRounds;
		tiedCounter.textContent = `Tied Score: ${numberOfTies}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You tie! You chose 'Scissors' and the computer chose 'Scissors'!");
	} else if (playerChoice == "scissors" && compChoice == "rock") {
		compVictories = ++compVictories;
		numberOfRounds = ++numberOfRounds;
		compScore.textContent = `Computer Score: ${compVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You lose! You chose 'Scissors' and the computer chose 'Rock'!");
	} else if (playerChoice == "scissors" && compChoice == "paper") {
		playerVictories = ++playerVictories;
		numberOfRounds = ++numberOfRounds;
		playerScore.textContent = `Player Score: ${playerVictories}`;
		roundCounter.textContent = `Round ${numberOfRounds}`;
		alert("You win! You chose 'Scissors' and the computer chose 'Paper'!");
	}
}

function finalResults() {
	if (playerVictories > compVictories) {
		alert("You win! You have " + playerVictories + " win(s) compared to the computer's " + compVictories + " win(s).");
	} else if (compVictories > playerVictories) {
		alert("You lose! You have " + playerVictories + " win(s) compared to the computer's " + compVictories + " win(s).");
	} else if (playerVictories == compVictories) {
		alert("Tie! You have " + playerVictories + " win(s) compared to the computer's " + compVictories + " win(s).");
	}
}

function computerPlay() { // gives choice for comp by random number generator between values 1 to 3

	let min = Math.ceil(1);
	let max = Math.floor(4);
	let compResult = Math.floor(Math.random() * (max - min)) + min;

	if (compResult == 1) {
		compChoice = "rock";
	} else if (compResult == 2) {
		compChoice = "paper";
	} else if (compResult == 3) {
		compChoice = "scissors";
	}

	return compChoice;
}