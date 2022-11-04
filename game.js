//Generates random computer choice and process it as all caps and as a string and stores it in ComChoice

    const Choices = ["Rock","Paper","Scissors"];
    const random = Math.floor(Math.random() * Choices.length);
    let ComChoice = Choices[random];
    let ComChoiceCaps = ComChoice.toUpperCase();
    console.log("CPU = " + ComChoiceCaps);
    

//prompt() for user to input a variable that is stored as UserCap and process it as all caps as a string

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
  

//write a playRound() function that uses to compare UserChoice against ComChoice. one by one and store the result and CPU & player score into variables

function playRound(playerSelection,computerSelection) {


  if (playerSelection === computerSelection) {
    alert ("The result is a tie!");
  } else if (playerSelection == "ROCK") {
    if (computerSelection == "SCISSORS") {
      alert ("rock wins");
    } else {
      alert ("paper wins");
    }
  } else if (playerSelection == "PAPER") {
    if (computerSelection == "ROCK") {
      alert ("paper wins");
    } else {
      alert ("scissors wins");
    }
  } else if (playerSelection == "SCISSORS") {
    if (computerSelection == "PAPER") {
      alert ("scissors wins");
    } else {
      alert ("rock wins");
    }
  }
}

playRound(userCap,ComChoiceCaps);


//make a new game() function that calls playRound() function and loops it for 5 times each time each time reporting and updating the CPU and player score
//the game() function ,at the end of the loop report who is the overall winner by comparing the scores..