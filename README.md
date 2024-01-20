Jerrod Packard
January 19, 2024
Rock Paper Scissors Lizard Spock
Created a web app that lets a user play Rock Paper Scissors Lizard Spock against a CPU or against another player with modes for 1 round, best 3 out of 5, and best 4 out of 7.
Peer review:Fernando Gutierrez
Peer review comments: First off I notice when your playing one player going against the cpu. regardless what you score it's always tied game. Recommendation make a separate function keep track of the player and winner count. and players count.  
For example :
function checkWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }

  if (
    (player === "rock" && (computer === "scissors" || computer === "lizard")) ||
    (player === "paper" && (computer === "rock" || computer === "spock")) ||
    (player === "scissors" &&
      (computer === "paper" || computer === "lizard")) ||
    (player === "lizard" && (computer === "spock" || computer === "paper")) ||
    (player === "spock" && (computer === "rock" || computer === "scissors"))
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
Also I noticed that Two player doesn't work. Dispute clicking an option I was alert. "Please select an icon before clicking the shoot button." I asen't able to check the g=figma but all and all good job ^w^