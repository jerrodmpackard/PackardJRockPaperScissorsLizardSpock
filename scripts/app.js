let player1Choice;
let playerScore = 0;
let computerScore = 0;
let winner = "";
let roundNumber = 1;
let gameMode = localStorage.getItem("gameMode");
let computerChoice;
let numberOfWins;
let numberOfRounds;
let roundsPlayed = 0;
console.log(`Current Game Mode: ${gameMode}`);

document.addEventListener("DOMContentLoaded", function () {
  let rock = document.getElementById("rock");
  if (rock) {
    rock.addEventListener("click", function () {
      player1Choice = "rock";
      rock.classList.add("shake");
      console.log("Player chose rock");
    });
  }

  let paper = document.getElementById("paper");
  if (paper) {
    paper.addEventListener("click", function () {
      player1Choice = "paper";
      paper.classList.add("shake");
      console.log("Player chose paper");
    });
  }

  let scissors = document.getElementById("scissors");
  if (scissors) {
    scissors.addEventListener("click", function () {
      player1Choice = "scissors";
      scissors.classList.add("shake");
      console.log("Player chose scissors");
    });
  }

  let lizard = document.getElementById("lizard");
  if (lizard) {
    lizard.addEventListener("click", function () {
      player1Choice = "lizard";
      lizard.classList.add("shake");
      console.log("Player chose lizard");
    });
  }

  let spock = document.getElementById("spock");
  if (spock) {
    spock.addEventListener("click", function () {
      player1Choice = "spock";
      spock.classList.add("shake");
      console.log("Player chose spock");
    });
  }

  let shootBtn = document.getElementById("shootBtn");
  if (shootBtn) {
    shootBtn.addEventListener("click", function () {
      if (player1Choice != null) {
        OnePlayerGameplay(player1Choice);
        player1Choice = null;
        rock.classList.remove("shake");
        paper.classList.remove("shake");
        scissors.classList.remove("shake");
        lizard.classList.remove("shake");
        spock.classList.remove("shake");
      } else {
        alert("Please select an icon before clicking the shoot button.");
      }
    });
  }

  let roundNum = document.getElementById("roundNum");
  if (roundNum) {
    roundNum.textContent = `Round Number: ${roundNumber}`;
  }

  let oneRound1P = document.getElementById("oneRound1P");
  if (oneRound1P) {
    oneRound1P.addEventListener("click", function () {
      console.log("Click event triggered!");
      numberOfWins = 1;
      numberOfRounds = 1;
      console.log(`Current Game Mode: ${gameMode}`);
      localStorage.setItem("gameMode", "OneRound");
    });
  }

  let bestOf51P = document.getElementById("bestOf51P");
  if (bestOf51P) {
    bestOf51P.addEventListener("click", function () {
      numberOfWins = 3;
      numberOfRounds = 5;
      localStorage.setItem("gameMode", "BestOf5");
    });
  }

  let bestOf71P = document.getElementById("bestOf71P");
  if (bestOf71P) {
    bestOf71P.addEventListener("click", function () {
      numberOfWins = 4;
      numberOfRounds = 7;
      localStorage.setItem("gameMode", "BestOf7");
    });
  }



  async function GetCPUChoice() {
    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");

    const data = await promise.text();

    computerChoice = data.toLowerCase();

    return computerChoice;
  }



  function StartGame(numberOfWins, numberOfRounds) {


    OnePlayerGameplay(player1Choice);
  }


  function OnePlayerGameplay(player1Choice) {
    GetCPUChoice();
    console.log(`Computer chose ${computerChoice}`);

    // playerScore = 0;
    // computerScore = 0;

    if (player1Choice === computerChoice) {
      // do nothing
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "rock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "rock" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "paper" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "paper" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "scissors" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "scissors" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "lizard" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "lizard" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "spock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else if (player1Choice === "spock" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
    } else {
      computerScore++;
      roundNumber++;
      roundsPlayed++;
    }

    console.log(playerScore);
    console.log(computerScore);

    // let winnerTxt = document.getElementById("winnerTxt");
    // if (winner == "Player 1" || winner == "CPU") {
    //   winnerTxt.innerText = `${winner} Wins The Game!`;
    // } else {
    //   winnerTxt.innerText = "Tie Game";
    // }

    let player1Score = document.getElementById("player1Score");
    player1Score.textContent = `Player Score: ${playerScore}`;
    let cpuScore = document.getElementById("cpuScore");
    cpuScore.textContent = `CPU Score: ${computerScore}`;

    roundNumber.textContent = `Round Number: ${roundNumber}`;

    console.log("----New Round----");
    console.log(`Current Game Mode: ${gameMode}`);
    console.log(isGameOver(gameMode));


    if (isGameOver(gameMode)) {
      // redirect user to results page
      window.location.href = "/pages/1PlayerGameWinner.html";
      // player1Score = 0;
      // cpuScore = 0;
    } else {
      // keep playing
    }

  };

  function isGameOver(gameMode) {
    if (gameMode === "OneRound") {
      return true;
    } else if (gameMode === "BestOf5") {
      return (playerScore === 3 && computerScore < 3) || (computerScore === 3 && playerScore < 3) || roundsPlayed === 5;
    } else if (gameMode === "BestOf7") {
      return (playerScore === 4 && computerScore < 4) || (computerScore === 4 && playerScore < 4) || roundsPlayed === 7;
    } else {
      return false;
    }
  }

});
