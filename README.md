<h1>Rock Paper Scissors</h1><p>This project is a simple implementation of the classic game Rock Paper Scissors in JavaScript. The project is part of tThe Odin Project web development course learning.</p><h2>How to play</h2><p>Press the buttons labeled "Rock", "Paper", or "Scissors" to make your selection. The computer will also make a selection at random. The winner of the round will be announced in an alert box. The score will also be updated on the page.</p><p>The first player to reach 5 points wins the overall game. The scores will reset automatically and you can play again.</p><p>You can also reset the scores manually by pressing the "Reset Scores" button.</p><h2>Code Overview</h2><p>When a button is clicked, the <code>activateScript</code> function is called with the button's label as an argument. The computer's selection is generated at random from the choices "Rock", "Paper", and "Scissors".</p><p>The <code>playRound</code> function compares the player's and computer's selections and determines the winner. The scores are updated with the <code>userWin</code> and <code>cpuWin</code> functions and the results are displayed on the page.</p><p>An If statement checks if either the player or the computer has reached 5 points. If so, an alert is displayed and the scores are reset.</p><p>The scores can also be reset manually by calling the <code>resetScore</code> function, which sets both the player's and computer's scores to 0 and updates the score display on the page.</p><p>There is also a <code>console.log</code> statement in the <code>activateScript</code> function that displays the player's and computer's selections for debugging purposes.</p>
