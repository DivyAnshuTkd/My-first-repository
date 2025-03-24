let score =JSON.parse(localStorage.getItem('score')) || 
        {
        wins:0,
        losses:0,
        ties:0
    };

updateScoreElement(); //this is used to get html element (paragraph) into javascript and will print the result in a single line aur hume button ke baad paragraph hi toh chahiye

//if(score===null)
/*if(!score) //shortcut for above line
{
    score={
        wins:0,
        losses:0,
        ties:0
    };
}
    */

        //console.log(JSON.parse(localStorage.getItem('score')));    //converted JSON string back to an object

        function playGame(playerMove) {
            const computerMove = pickComputerMove();  //this computermove variable is different from the computerMove which is in script mein jo function hai
            let result = '';
            if (playerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'You lose.';
                }
                else if (computerMove === 'paper') {
                    result = 'You win.';
                }
                else if (computerMove === 'scissors') {
                    result = 'Tie.';
                }
            }

            else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'You win.';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie.';
                }
                else if (computerMove === 'scissors') {
                    result = 'You lose.';
                }
            }

            else if (playerMove === 'rock') {

                if (computerMove === 'rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'paper') {
                    result = 'You lose.';
                }
                else if (computerMove === 'scissors') {
                    result = 'You win.';
                }
            }

            if (result === 'You win.') {
                score.wins += 1;
            }
            else if (result == 'You lose.') {
                score.losses += 1;
            }
            else if (result == 'Tie.') {
                score.ties += 1;
            }


localStorage.setItem('score', JSON.stringify(score));


document.querySelector('.js-result')
.innerHTML = result;

document.querySelector('.js-moves')
.innerHTML = `You
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMove}-emoji.png" class="move-icon">
Computer`;

updateScoreElement();

        }



function updateScoreElement()
{
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

        function pickComputerMove() {
            const randomNumber = Math.random();
            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            }

            else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
                computerMove = 'paper';
            }

            else if (randomNumber > 2 / 3 && randomNumber <= 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }