let player1Choice;
let player2Choice;
let playerScore = 0;
let playerScoreAgain = 0;
let computerScore = 0;
let winner = "";
let roundNumber = 1;
let gameMode = localStorage.getItem("gameMode");
let computerChoice;
let numberOfWins;
let numberOfRounds;
let roundsPlayed = 0;
let revealWinner = localStorage.getItem("winner");
let score1 = localStorage.getItem("playerScore");

console.log(`Current Game Mode: ${gameMode}`);
console.log(`Score1 is: ${score1}`);

document.addEventListener("DOMContentLoaded", function () {
  let rock = document.getElementById("rock");
  if (rock) {
    rock.addEventListener("click", function () {
      player1Choice = "rock";
      rock.classList.add("shake");
      console.log("Player 1 chose rock");
    });
  }
  let rock2 = document.getElementById("rock2");
  if (rock2) {
    rock2.addEventListener("click", function () {
      player2Choice = "rock";
      rock2.classList.add("shake");
      console.log("Player 2 chose rock");
    });
  }

  let paper = document.getElementById("paper");
  if (paper) {
    paper.addEventListener("click", function () {
      player1Choice = "paper";
      paper.classList.add("shake");
      console.log("Player 1 chose paper");
    });
  }
  let paper2 = document.getElementById("paper2");
  if (paper2) {
    paper2.addEventListener("click", function () {
      player2Choice = "paper";
      paper2.classList.add("shake");
      console.log("Player 2 chose paper");
    });
  }

  let scissors = document.getElementById("scissors");
  if (scissors) {
    scissors.addEventListener("click", function () {
      player1Choice = "scissors";
      scissors.classList.add("shake");
      console.log("Player 1 chose scissors");
    });
  }
  let scissors2 = document.getElementById("scissors2");
  if (scissors2) {
    scissors2.addEventListener("click", function () {
      player2Choice = "scissors";
      scissors2.classList.add("shake");
      console.log("Player 2 chose scissors");
    });
  }

  let lizard = document.getElementById("lizard");
  if (lizard) {
    lizard.addEventListener("click", function () {
      player1Choice = "lizard";
      lizard.classList.add("shake");
      console.log("Player 1 chose lizard");
    });
  }
  let lizard2 = document.getElementById("lizard2");
  if (lizard2) {
    lizard2.addEventListener("click", function () {
      player2Choice = "lizard";
      lizard2.classList.add("shake");
      console.log("Player 2 chose lizard");
    });
  }

  let spock = document.getElementById("spock");
  if (spock) {
    spock.addEventListener("click", function () {
      player1Choice = "spock";
      spock.classList.add("shake");
      console.log("Player 1 chose spock");
    });
  }
  let spock2 = document.getElementById("spock2");
  if (spock2) {
    spock2.addEventListener("click", function () {
      player2Choice = "spock";
      spock2.classList.add("shake");
      console.log("Player 2 chose spock");
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
      console.log(`Current Game Mode: ${gameMode}`);
      localStorage.setItem("gameMode", "OneRound");
    });
  }

  let bestOf51P = document.getElementById("bestOf51P");
  if (bestOf51P) {
    bestOf51P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf5");
    });
  }

  let bestOf71P = document.getElementById("bestOf71P");
  if (bestOf71P) {
    bestOf71P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf7");
    });
  }


  let winnerTxt = document.getElementById("winnerTxt");
  if (winnerTxt) {
    if (winner == "Player 1" || winner == "CPU") {
      winnerTxt.textContent = `${revealWinner} Wins The Game!`;
      console.log("test1")
    } else {
      winnerTxt.textContent = "Tie Game";
      console.log("test2")
      console.log(winner);
    }
  }


  async function GetCPUChoice() {
    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");

    const data = await promise.text();

    computerChoice = data.toLowerCase();

    return computerChoice;
  }


  async function OnePlayerGameplay(player1Choice) {
    await GetCPUChoice();
    console.log(`Computer chose ${computerChoice}`);

    //  playerScore = 0;
    // computerScore = 0;

    if (player1Choice === computerChoice) {
      // do nothing
      console.log("Tie Game");
    } else if (player1Choice === "rock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");
    } else if (player1Choice === "rock" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "paper" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "paper" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "scissors" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "scissors" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "lizard" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "lizard" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "spock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else if (player1Choice === "spock" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      roundsPlayed++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player wins");

    } else {
      computerScore++;
      roundNumber++;
      roundsPlayed++;
      console.log("CPU wins");
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`CPU Score: ${computerScore}`);


    let player1Score = document.getElementById("player1Score");
    player1Score.textContent = `Player Score: ${playerScore}`;

    let cpuScore = document.getElementById("cpuScore");
    cpuScore.textContent = `CPU Score: ${computerScore}`;

    roundNum.textContent = `Round Number: ${roundNumber}`;




    console.log(`Is game over? ${isGameOver(gameMode)}`);
    console.log("----New Round----");
    // console.log(`Current Game Mode: ${gameMode}`);

    if (playerScore == computerScore || playerScore == computerScore || playerScore == computerScore) {
      winner = "Tie Game";
      localStorage.setItem("winner", "Tie Game");
      console.log("tie game block")
    } else if (playerScore > computerScore || playerScore > computerScore || playerScore > computerScore) {
      winner = "Player 1";
      localStorage.setItem("winner", "Player 1");
      console.log("player win block")
    } else {
      winner = "CPU";
      localStorage.setItem("winner", "CPU");
      console.log("CPU win block")
    }



    if (isGameOver(gameMode)) {
      // redirect user to results page
console.log(`PlayerScore is: ${playerScore}`);

      window.location.href = "/pages/1PlayerGameWinner.html";
      let player1ScoreWin = document.getElementById("player1ScoreWin");
      player1ScoreWin.textContent = `Player Score: ${score1}`;
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
      return (playerScore === 3 && computerScore < 3) || (computerScore === 3 && playerScore < 3);
    } else if (gameMode === "BestOf7") {
      return (playerScore === 4 && computerScore < 4) || (computerScore === 4 && playerScore < 4);
    } else {
      return false;
    }
  }

});
