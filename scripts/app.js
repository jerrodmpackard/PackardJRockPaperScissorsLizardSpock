let player1Choice;
let playerScore = 0;
let computerScore = 0;
let winner = "";
let roundsPlayed = 1;

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

  let roundNumber = document.getElementById("roundNumber");
  if (roundNumber) {
    roundNumber.textContent = `Round Number: ${roundsPlayed}`;
  }

  let oneRound1P = document.getElementById("oneRound1P");
  if (oneRound1P) {
    oneRound1P.addEventListener("click", function () {
      console.log("Click event triggered!");
      let userChoice = "OneRound";
      redirectTo1PGameplay(userChoice);
    });
  }

  let bestOf51P = document.getElementById("bestOf51P");
  if (bestOf51P) {
    bestOf51P.addEventListener("click", function () {
      let userChoice = "BestOf5";
      redirectTo1PGameplay(userChoice);
    });
  }

  let bestOf71P = document.getElementById("bestOf71P");
  if (bestOf71P) {
    bestOf71P.addEventListener("click", function () {
      let userChoice = "BestOf7";
      redirectTo1PGameplay(userChoice);
    });
  }



  function redirectTo1PGameplay(userChoice) {
    console.log(`Redirecting to 1P Gameplay with choice: ${userChoice}`);
    let nextPageURL = `http://127.0.0.1:5500/pages/1Player.html?mode=${userChoice}`;
    window.location.href = nextPageURL;
  };



  function OnePlayerGameplay(player1Choice) {
    const choices = ["rock", "paper", "scissors", "lizard", "spock"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(`Computer chose ${computerChoice}`);

    // playerScore = 0;
    // computerScore = 0;

    if (player1Choice === computerChoice) {
      // do nothing
      roundsPlayed++;
    } else if (player1Choice === "rock" && computerChoice === "scissors") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "rock" && computerChoice === "lizard") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "paper" && computerChoice === "rock") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "paper" && computerChoice === "spock") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "scissors" && computerChoice === "paper") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "scissors" && computerChoice === "lizard") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "lizard" && computerChoice === "spock") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "lizard" && computerChoice === "paper") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "spock" && computerChoice === "scissors") {
      playerScore++;
      roundsPlayed++;
    } else if (player1Choice === "spock" && computerChoice === "rock") {
      playerScore++;
      roundsPlayed++;
    } else {
      computerScore++;
      roundsPlayed++;
    }

    console.log(playerScore);
    console.log(computerScore);

    // if (playerScore == 0 && computerScore == 0) {
    //   winner = "Tie game";
    //   console.log("Tie game");
    // } else if (playerScore == 1 && computerScore == 0) {
    //   winner = "Player 1";
    //   console.log("Player 1 Wins!");
    // } else {
    //   winner = "CPU";
    //   console.log("Computer Wins!");
    // }

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

    roundNumber.textContent = `Round Number: ${roundsPlayed}`;

    console.log("----New Round----");



    // return winner here? Need to go to winner screen and output winner with image and continue/main menu buttons
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
