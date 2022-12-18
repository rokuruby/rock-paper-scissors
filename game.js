//Generates random computer choice and process it as all caps and as a string and stores it in ComChoice
var cpuScore = 0;
var userScore = 0;

function activateScript(buttonchoice) {
    const Choices = ["ROCK","PAPER","SCISSORS"];
    const random = Math.floor(Math.random() * Choices.length);
    let ComChoiceCaps = Choices[random];
    console.log("CPU = " + ComChoiceCaps);  


//prompt() for user to input a variable that is stored as UserCap and process it as all caps as a string

  var userCap = buttonchoice;
    console.log("Player = " + userCap);
   
playRound(userCap,ComChoiceCaps);

function playRound(playerSelection,computerSelection) {
  if (playerSelection === computerSelection) {
    alert ("Both of you chose the same thing. The result is a tie! No one wins!");
    console.log("The result is a tie!");
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "SCISSORS") {
      alert ("CPU chose Scissors. You chose Rock. YOU WIN!");
      console.log("rock/player wins");
      userWin();
      
    } else {
      alert ("CPU chose Paper. You chose Rock. YOU LOSE!");
      console.log("paper wins/CPU wins");
      cpuWin();
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "ROCK") {
      alert ("CPU chose Rock. You chose Paper.YOU WIN!!!");
      console.log("paper wins/Player wins");
      userWin();
    } else {
      alert ("CPU chose Scissors. You chose Paper. YOU LOSE!!!");
      console.log("scissors wins/CPU wins");
      cpuWin();
    }
  } else if (playerSelection == "SCISSORS") {
    if (computerSelection == "PAPER") {
      alert ("CPU chose Paper. You chose Scissors. YOU WIN!");
      console.log("scissors wins/Player wins");
      userWin();
    } else {
      alert ("CPU chose Rock. You chose Scissors. YOU LOSE!");
      console.log("rock wins/CPU wins");
      cpuWin();
    }
  }

//statement/function updating the CPU and player score.
function userWin() {
  userScore = userScore +1;
 }

function cpuWin() {
  cpuScore = cpuScore +1;
 }

console.log("PlayerScore " + userScore + " CPUSCORE " + cpuScore);
document.getElementById("playerscore").innerHTML = userScore;
document.getElementById("cpuscore").innerHTML = cpuScore;
document.getElementById("playerchoice").innerHTML = userCap;
document.getElementById("cpuchoice").innerHTML = ComChoiceCaps;

//if statement to check if player or CPU reach 5 points first and to prompt the player about the overall results and who won.
//also resets the game counter for a new game automatically
//also delays executing the code for abit to update the game counter before resetting it.
setTimeout(function(){if (userScore == 5) {
  alert ("YOU WIN OVERALL! CONGRATULATIONS!! Do Play Again!")
  userScore = 0;
  cpuScore = 0;
  document.getElementById("playerscore").innerHTML = userScore;
  document.getElementById("cpuscore").innerHTML = cpuScore;
} else if (cpuScore == 5) {
  alert ("Too Bad!! You LOSE!")
  userScore = 0;
  cpuScore = 0;
  document.getElementById("playerscore").innerHTML = userScore;
  document.getElementById("cpuscore").innerHTML = cpuScore;
}
}, 100);

}
//future notes, maybe have another section and function to save and remember the previous 5 round winner and scores.
}

function resetScore() {
  userScore = 0;
  cpuScore = 0;
  document.getElementById("playerscore").innerHTML = userScore;
  document.getElementById("cpuscore").innerHTML = cpuScore;
}