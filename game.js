//Generates random computer choice and process it as all caps and as a string and stores it in ComChoice
var cpuScore = 0;
var userScore = 0;

function activateScript() {
    const Choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * Choices.length);
    let ComChoice = Choices[random];
    let ComChoiceCaps = ComChoice.toUpperCase();
    console.log("CPU = " + ComChoiceCaps);  

//prompt() for user to input a variable that is stored as UserCap and process it as all caps as a string

  var userType = prompt("Please type/enter Rock, Paper or Scissors");
  let userCap = userType.toUpperCase();

    if (userCap !== "ROCK" && userCap !== "PAPER" && userCap !== "SCISSORS") {
    alert("ERROR! Invalid input! . Please type/enter Rock, Paper or Scissors");
    } 
   else {
    console.log("Player = " + userCap);
   }

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
console.log(i);
document.getElementById("playerscore").innerHTML = userScore;
document.getElementById("cpuscore").innerHTML = cpuScore;
}
/*
//at the end of the loop report who is the overall winner by comparing the scores..
if (userScore > cpuScore) {
  alert("YOU WIN OVERALL!! CONGRATULATIONS!");
} else if(userScore == cpuScore){
  alert("Woah a Draw!!")
} else alert( "SORRY YOU LOSE OVERALL!");

userScore = 0
cpuScore = 0
*/
}

