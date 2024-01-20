let player1Choice; // stores player 1's choice for comparison
let player2Choice; // stores player 2's choice for comparison
let playerScore = 0; // tracks player 1 score
let playerScoreAgain = 0; // tracks player 2 score
let computerScore = 0; // tracks CPU score
let winner = ""; // stores the winner of each game
let roundNumber = 1; // tracks the round number. this is what displays during the game play screen
let gameMode = localStorage.getItem("gameMode");
let computerChoice; // stores the RNG choice for the CPU
let roundsPlayed = localStorage.getItem("roundNumber"); // NOT CURRENTLY UTILIZED (use this to store local storage variable of roundNumber) (need to create ID for this on HTML results pages)
let revealWinner = localStorage.getItem("winner"); // stores the winner variable to a new variable for reference on a new HTML page
let score1 = localStorage.getItem("playerScore"); // stores the playerScore variable (tracking player 1 score) for reference on a new HTML page

console.log(`Current Game Mode: ${gameMode}`);
console.log(`Score1 is: ${score1}`);

document.addEventListener("DOMContentLoaded", function () { // document.addEventListener checks to see if the DOM element exists before creating event listeners. This helps control console errors when switching between HTML pages in case the element does not exist on that page
  let rock = document.getElementById("rock"); // creates ID for rock and creates event listener to set player 1 choice and add shake class so icon shakes on button click
  if (rock) {
    rock.addEventListener("click", function () {
      player1Choice = "rock";
      rock.classList.add("shake");
      console.log("Player 1 chose rock");
    });
  }
  let rock2 = document.getElementById("rock2"); // creates ID for rock and creates event listener to set player 2 choice and add shake class so icon shakes on button click
  if (rock2) {
    rock2.addEventListener("click", function () {
      player2Choice = "rock";
      rock2.classList.add("shake");
      console.log("Player 2 chose rock");
    });
  }

  let paper = document.getElementById("paper"); // creates ID for paper and creates event listener to set player 1 choice and add shake class so icon shakes on button click
  if (paper) {
    paper.addEventListener("click", function () {
      player1Choice = "paper";
      paper.classList.add("shake");
      console.log("Player 1 chose paper");
    });
  }
  let paper2 = document.getElementById("paper2"); // creates ID for paper and creates event listener to set player 2 choice and add shake class so icon shakes on button click
  if (paper2) {
    paper2.addEventListener("click", function () {
      player2Choice = "paper";
      paper2.classList.add("shake");
      console.log("Player 2 chose paper");
    });
  }

  let scissors = document.getElementById("scissors"); // creates ID for scissors and creates event listener to set player 1 choice and add shake class so icon shakes on button click
  if (scissors) {
    scissors.addEventListener("click", function () {
      player1Choice = "scissors";
      scissors.classList.add("shake");
      console.log("Player 1 chose scissors");
    });
  }
  let scissors2 = document.getElementById("scissors2"); // creates ID for scissors and creates event listener to set player 2 choice and add shake class so icon shakes on button click
  if (scissors2) {
    scissors2.addEventListener("click", function () {
      player2Choice = "scissors";
      scissors2.classList.add("shake");
      console.log("Player 2 chose scissors");
    });
  }

  let lizard = document.getElementById("lizard"); // creates ID for lizard and creates event listener to set player 1 choice and add shake class so icon shakes on button click
  if (lizard) {
    lizard.addEventListener("click", function () {
      player1Choice = "lizard";
      lizard.classList.add("shake");
      console.log("Player 1 chose lizard");
    });
  }
  let lizard2 = document.getElementById("lizard2"); // creates ID for lizard and creates event listener to set player 2 choice and add shake class so icon shakes on button click
  if (lizard2) {
    lizard2.addEventListener("click", function () {
      player2Choice = "lizard";
      lizard2.classList.add("shake");
      console.log("Player 2 chose lizard");
    });
  }

  let spock = document.getElementById("spock"); // creates ID for spock and creates event listener to set player 1 choice and add shake class so icon shakes on button click
  if (spock) {
    spock.addEventListener("click", function () {
      player1Choice = "spock";
      spock.classList.add("shake");
      console.log("Player 1 chose spock");
    });
  }
  let spock2 = document.getElementById("spock2"); // creates ID for spock and creates event listener to set player 2 choice and add shake class so icon shakes on button click
  if (spock2) {
    spock2.addEventListener("click", function () {
      player2Choice = "spock";
      spock2.classList.add("shake");
      console.log("Player 2 chose spock");
    });
  }

  let shootBtn = document.getElementById("shootBtn"); // creates event listener for shoot button. on click, runs 1P Gameplay function and removes shake classes from all input icons
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
  let shoot2 = document.getElementById("shoot2"); // creates event listener for shoot button. on click, runs 2P Gameplay function and removes shake classes form all input icons
  if (shoot2) {
    shoot2.addEventListener("click", function () {
      if (player1Choice != null && player2Choice != null) {
        TwoPlayerGameplay(player1Choice, player2Choice);
        player1Choice = null;
        player2Choice = null;

        rock.classList.remove("shake");
        paper.classList.remove("shake");
        scissors.classList.remove("shake");
        lizard.classList.remove("shake");
        spock.classList.remove("shake");

        rock2.classList.remove("shake");
        paper2.classList.remove("shake");
        scissors2.classList.remove("shake");
        lizard2.classList.remove("shake");
        spock2.classList.remove("shake");
      } else {
        alert("Please select an icon before clicking the shoot button.");
      }
    });
  }

  // let roundNum = document.getElementById("roundNum"); // roundNum is the counter for the round on the gameplay screen
  // if (roundNum) {
  //   roundNum.textContent = `Round Number: ${roundNumber}`;
  // }

  let oneRound1P = document.getElementById("oneRound1P"); // This sets the game mode to 1 Player, One Round
  if (oneRound1P) {
    oneRound1P.addEventListener("click", function () {
      console.log("Click event triggered!");
      console.log(`Current Game Mode: ${gameMode}`);
      localStorage.setItem("gameMode", "OneRound");
    });
  }
  let oneRound2P = document.getElementById("oneRound2P"); // This sets the game mode to 2 Player, One Round
  if (oneRound2P) {
    oneRound2P.addEventListener("click", function () {
      console.log("Click event triggered!");
      console.log(`Current Game Mode: ${gameMode}`);
      localStorage.setItem("gameMode", "OneRound");
    });
  }

  let bestOf51P = document.getElementById("bestOf51P"); // This sets the game mode to 1 Player, Best of 5
  if (bestOf51P) {
    bestOf51P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf5");
    });
  }
  let bestOf52P = document.getElementById("bestOf52P"); // This sets the game mode to 2 Player, Best of 5
  if (bestOf52P) {
    bestOf52P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf5");
    });
  }

  let bestOf71P = document.getElementById("bestOf71P"); // This sets the game mode to 1 Player, Best of 7
  if (bestOf71P) {
    bestOf71P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf7");
    });
  }
  let bestOf72P = document.getElementById("bestOf72P"); // This sets the game mode to 2 Player, Best of 7
  if (bestOf72P) {
    bestOf72P.addEventListener("click", function () {
      localStorage.setItem("gameMode", "BestOf7");
    });
  }


  let winnerTxt = document.getElementById("winnerTxt"); // winnerTxt is the headline of the results page where it should display who wins the game. Or tie game
  // if (winnerTxt) {
    function whoWon(){
      
    }
  if (winner == "Player 1" || winner == "CPU") {
    winnerTxt.textContent = `${winner} Wins The Game!`;
    console.log("test1")
  }
  // } else {
  //   winnerTxt.textContent = "Tie Game";
  //   console.log("test2")
  //   console.log(winner);
  // }
  // }

  let player1ScoreWin = document.getElementById("player1ScoreWin");
  if (player1ScoreWin) {
    player1ScoreWin.textContent = `Player 1 Score: ${score1}`;
  }

  let player2ScoreWin = document.getElementById("player2ScoreWin");
  if (player2ScoreWin) {
    player2ScoreWin.textContent = `Player 2 Score: `;
  }



  async function GetCPUChoice() { // Function to get random choice for CPU
    const promise = await fetch("https://rpslsapi.azurewebsites.net/RPSLS");

    const data = await promise.text();

    computerChoice = data.toLowerCase();

    return computerChoice;
  }


  async function OnePlayerGameplay(player1Choice) { // Function to handle One Player game mode
    await GetCPUChoice();
    console.log(`Computer chose ${computerChoice}`);

    // playerScore = 0;
    // computerScore = 0;

    if (player1Choice === computerChoice) { // This if statement handles the comparisons to determine a winner. It increments the scores and round numbers on screen. It saves the player score to local storage
      // do nothing
      console.log("Tie Game");
    } else if (player1Choice === "rock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");
    } else if (player1Choice === "rock" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "paper" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "paper" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "scissors" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "scissors" && computerChoice === "lizard") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "lizard" && computerChoice === "spock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "lizard" && computerChoice === "paper") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "spock" && computerChoice === "scissors") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else if (player1Choice === "spock" && computerChoice === "rock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      localStorage.setItem("roundNumber", roundNumber);
      console.log("Player wins");

    } else {
      computerScore++;
      roundNumber++;
      localStorage.setItem("roundNumber", roundNumber);
      console.log("CPU wins");
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`CPU Score: ${computerScore}`);


    let player1Score = document.getElementById("player1Score"); // this shows the player 1 score on the gameplay screen
    player1Score.textContent = `Player Score: ${playerScore}`;

    let cpuScore = document.getElementById("cpuScore"); // this shows the CPU score on the gameplay screen
    cpuScore.textContent = `CPU Score: ${computerScore}`;

    roundNum.textContent = `Round Number: ${roundNumber}`; // this shows the round number on the gameplay screen




    console.log("----New Round----");

    if (playerScore > computerScore) {
      winner = "Player 1";
      localStorage.setItem("winner", "Player 1");
      console.log("player win block")
    } else {
      winner = "CPU";
      localStorage.setItem("winner", "CPU");
      console.log("CPU win block")
    }



    if (isGameOver1P(gameMode)) { // this checks to see if the isGameOver function is returning true. if true, it redirects the player to the results screen
      // redirect user to results page
      console.log(`PlayerScore is: ${playerScore}`);

      window.location.href = "/pages/1PlayerGameWinner.html";
      let player1ScoreWin = document.getElementById("player1ScoreWin"); // MAYBE PULL THIS OUT AND PUT IT ABOVE THE GAMEPLAY FUNCTIONS
      player1ScoreWin.textContent = `Player Score: ${score1}`;
      // player1Score = 0;
      // cpuScore = 0;
    } else {
      // keep playing
    }

  };
  // End of 1 player gameplay function


  function TwoPlayerGameplay(player1Choice, player2Choice) { // Function to handle 2 Player game mode
    if (player1Choice === player2Choice) { // This if statement handles the comparisons to determine a winner. It increments the scores and round numbers on screen. It saves the player score to local storage
      // do nothing
      console.log("Tie Game");
    } else if (player1Choice === "rock" && player2Choice === "scissors") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");
    } else if (player1Choice === "rock" && player2Choice === "lizard") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "paper" && player2Choice === "rock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "paper" && player2Choice === "spock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "scissors" && player2Choice === "paper") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "scissors" && player2Choice === "lizard") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "lizard" && player2Choice === "spock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "lizard" && player2Choice === "paper") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "spock" && player2Choice === "scissors") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else if (player1Choice === "spock" && player2Choice === "rock") {
      playerScore++;
      roundNumber++;
      localStorage.setItem("player1Score", playerScore);
      console.log("Player 1 wins");

    } else {
      playerScoreAgain++;
      roundNumber++;
      console.log("Player 2 wins");
    }

    let player1Score = document.getElementById("player1Score"); // this shows the player 1 score on the gameplay screen
    player1Score.textContent = `Player 1 Score: ${playerScore}`;

    let player2Score = document.getElementById("player2Score"); // this shows the player 2 score on the gameplay screen
    player2Score.textContent = `Player 2 Score: ${playerScoreAgain}`;

    roundNum.textContent = `Round Number: ${roundNumber}`; // this shows the round number on the gameplay screen


    if (isGameOver2P(gameMode)) {
      // redirect user to results page
      console.log(`Player 1 Score is: ${playerScore}`);
      console.log(`Player 2 Score is: ${playerScoreAgain}`);

      window.location.href = "/pages/2PlayerGameWinner.html";

    } else {
      // keep playing
    }


    if (playerScore == computerScore || playerScore == computerScore || playerScore == computerScore) { // this determines a winner and stores the winner to the winner variable in local storage
      winner = "Tie Game";
      localStorage.setItem("winner", "Tie Game");
      console.log("tie game block");
    } else if (playerScore > computerScore || playerScore > computerScore || playerScore > computerScore) {
      winner = "Player 1";
      localStorage.setItem("winner", "Player 1");
      console.log("player win block");
    } else {
      winner = "Player 2";
      localStorage.setItem("winner", "Player 2");
      console.log("Player 2 win block");
    }

  }
  // End of 2 player gameplay function


  function isGameOver1P(gameMode) { // this 
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

  function isGameOver2P(gameMode) { // this 
    if (gameMode === "OneRound") {
      return true;
    } else if (gameMode === "BestOf5") {
      return (playerScore === 3 && playerScoreAgain < 3) || (playerScoreAgain === 3 && playerScore < 3);
    } else if (gameMode === "BestOf7") {
      return (playerScore === 4 && playerScoreAgain < 4) || (playerScoreAgain === 4 && playerScore < 4);
    } else {
      return false;
    }
  }



});
