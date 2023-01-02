<h1>Rock Paper Scissors</h1>

This is a simple implementation of the classic game Rock Paper Scissors in JavaScript as part of my learning project for The Odin Project web development course.

<h2>How to play</h2>

Press the buttons labeled "Rock", "Paper", or "Scissors" to make your selection. The computer will also make a selection at random. The winner of the round will be announced in an alert box. The score will also be updated on the page.

The first player to reach 5 points wins the overall game. The scores will reset automatically and you can play again.

You can also reset the scores manually by pressing the "Reset Scores" button.
Code Overview

When a button is clicked, the activateScript function is called with the button's label as an argument. The computer's selection is generated at random from the choices "Rock", "Paper", and "Scissors".

The playRound function compares the player's and computer's selections and determines the winner. The scores are updated with the userWin and cpuWin functions and the results are displayed on the page.

An if statement checks if either the player or the computer has reached 5 points. If so, an alert is displayed and the scores are reset.

The scores can also be reset manually by calling the resetScore function, which sets both the player's and computer's scores to 0 and updates the score display on the page.

There is also a console.log statement in the activateScript function that displays the player's and computer's selections for debugging purposes.
