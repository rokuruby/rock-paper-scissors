//Generates random computer choice and process it as all caps and as a string and stores it in ComChoice
function getComputerChoice() {
    const Choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * Choices.length);
    let ComChoice = Choices[random];
    let ComChoiceCaps = ComChoice.toUpperCase();
    console.log("CPU = " + ComChoiceCaps);
    
}

//prompt() for user to input a variable that is stored as UserCap and process it as all caps as a string
function userInput() {
  var userType = prompt("Please type/enter Rock, Paper or Scissors");
  let userCap = userType.toUpperCase();
    if (userCap === "ROCK" || userCap === "PAPER" || userCap === "SCISSORS") {
    alert("Valid input");
    } else {
    alert("Invalid input");
    }
console.log("User = " + userCap);

if (typeof userCap === 'string') {
    console.log('userCap is a string');
  } else {
    console.log('userCap is not a string');
  }
  
}

//write a playRound() function that uses to compare UserChoice against ComChoice. one by one and store the result and CPU & player score into variables

function playRound(userCap,ComChoiceCaps) {


  if (userCap === ComChoiceCaps) {
    alert ("The result is a tie!");
  } else if (userCap === "ROCK") {
    if (ComChoiceCaps === "SCISSORS") {
      alert ("rock wins");
    } else {
      alert ("paper wins");
    }
  } else if (userCap === "PAPER") {
    if (comChoiceCaps === "ROCK") {
      alert ("paper wins");
    } else {
      alert ("scissors wins");
    }
  } else if (userCap === "SCISSORS") {
    if (ComChoiceCaps === "PAPER") {
      alert ("scissors wins");
    } else {
      alert ("rock wins");
    }
  }
}

playRound("ROCK","PAPER");


//make a new game() function that calls playRound() function and loops it for 5 times each time each time reporting and updating the CPU and player score
//the game() function ,at the end of the loop report who is the overall winner by comparing the scores..