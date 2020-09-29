function computerPlay() 
{
    let choice = ['rock', 'paper', 'scissors'];
    return choice[Math.floor(Math.random() * choice.length)]
}   

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
       //return "Draw";
       results.textContent = 'draw';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors' ||
        playerSelection == 'paper' && computerSelection == 'rock' ||
        playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore++;
            //return "You win, " + playerSelection + " beats " + computerSelection;
            results.textContent = playerSelection + " beats " + computerSelection;
    } else {
        computerScore++;
        //return "You lose, " + computerSelection + " beats " + playerSelection;
        results.textContent = computerSelection + " beats " + playerSelection;
    }
    pScore.textContent = playerScore;
    cScore.textContent = computerScore;

    if (playerScore == 5 || computerScore == 5)
    {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        endgame();
    }
}

function endgame()
{
    if (playerScore > computerScore)
    {
        reset.textContent = "you win";
    }
    else
    {
        reset.textContent = "you lose";
    }
    resetBtn.style.display = "block";
}

var playerScore = 0;
var computerScore = 0;
let playerSelection = '';
const computerSelection = computerPlay();
var results = document.getElementById('results');
var reset = document.getElementById('reset');
var resetBtn = document.getElementById('resetBtn');

resetBtn.style.display = "none";

resetBtn.addEventListener('click', function() {
   location.reload();
});

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
  
rock.addEventListener('click', function(e) {
    playRound(e.target.value);
});
  
paper.addEventListener('click', function(e) {
    playRound(e.target.value);
});
  
scissors.addEventListener('click', function(e) {
    playRound(e.target.value);
});

var pScore = document.getElementById('pScore');
var cScore = document.getElementById('cScore');


