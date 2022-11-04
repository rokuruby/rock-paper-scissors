//Generates random computer choice and process it as all caps and as a string and stores it in ComChoice

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
    console.log("User = " + userCap);
   }

if (typeof userCap === 'string') {
    console.log('userCap is a string');
  } else {
    console.log('userCap is not a string');
  }

//write a playRound() function that uses to compare UserChoice against ComChoice. one by one and store the result and CPU & player score into variables

function playRound(playerSelection,computerSelection) {


  if (playerSelection === computerSelection) {
    alert ("Both of you chose the same thing. The result is a tie! No one wins!");
    console.log("The result is a tie!");
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "SCISSORS") {
      alert ("CPU chose Scissors. You chose Rock. YOU WIN!");
      console.log("rock/player wins");
    } else {
      alert ("CPU chose Paper. You chose Rock. YOU LOSE!");
      console.log("paper wins/CPU wins");
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "ROCK") {
      alert ("CPU chose Rock. You chose Paper.YOU WIN!!!");
      console.log("paper wins/Player wins");
    } else {
      alert ("CPU chose Scissors. You chose Paper. YOU LOSE!!!");
      console.log("scissors wins/CPU wins");
    }
  } else if (playerSelection == "SCISSORS") {
    if (computerSelection == "PAPER") {
      alert ("CPU chose Paper. You chose Scissors. YOU WIN!");
      console.log("scissors wins/Player wins");
    } else {
      alert ("CPU chose Rock. You chose Scissors. YOU LOSE!");
      console.log("rock wins/CPU wins");
    }
  }
}

playRound(userCap,ComChoiceCaps);


//make a new game() function that calls playRound() function and loops it for 5 times each time each time reporting and updating the CPU and player score
//the game() function ,at the end of the loop report who is the overall winner by comparing the scores..