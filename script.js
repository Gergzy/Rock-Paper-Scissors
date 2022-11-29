const pScore = document.querySelector('.playerTally')

const cScore = document.querySelector('.computerTally')

let playerScore = 0;
let computerScore = 0;

const rock = document.querySelector('.rock')
rock.onclick = () => singleRound('rock')

const paper= document.querySelector('.paper')
paper.onclick = () => singleRound('paper')

const scissors = document.querySelector('.scissors')
scissors.onclick = () => singleRound('scissors')

const rAnnouncement = document.querySelector('.roundAnnouncement')
console.log(rAnnouncement)

function computerChoice() {
    let choices = Array('rock', 'paper', 'scissors');
    let compChoice = choices[Math.floor(Math.random() * choices.length)];
    return (compChoice);
}

function singleRound(playerChoice = prompt("Choose rock, paper, or scissors", 'rock'), compChoice = computerChoice()) {
    while ((playerChoice.toLowerCase() !== 'rock') && (playerChoice.toLowerCase() !== 'paper') && (playerChoice.toLowerCase() !== 'scissors'))
        { alert('Invalid selection. Try again.');
        playerChoice = prompt('Choose rock, paper, or scissors') }
    
    if (playerChoice.toLowerCase() === 'rock') {
        if (compChoice === 'rock') {
            rAnnouncement.textContent = 'This round was a tie, play again'
            return('tie');
        }
        if (compChoice === 'paper') {
            rAnnouncement.textContent = 'Paper covers rock; computer won this round!'
            cScore.textContent = ++computerScore;
        }
        if (compChoice ==='scissors') {
            rAnnouncement.textContent = 'Rock beats scissors; player won this round!'
            pScore.textContent = ++playerScore;
        }
    }

    if (playerChoice.toLowerCase() === 'paper') {
        if (compChoice === 'rock') {
            console.log('Paper covers rock; player won this round!')
            rAnnouncement.textContent = 'Paper covers rock; player won this round!'
            pScore.textContent = ++playerScore;
        }
        if (compChoice === 'paper') {
            rAnnouncement.textContent = 'This round was a tie, play again'
            return('tie');
        }
        if (compChoice ==='scissors') {
            rAnnouncement.textContent = 'Scissors cuts paper; computer won this round!'
            cScore.textContent = ++computerScore;
        }

    }

    if (playerChoice.toLowerCase() === 'scissors') {
        if (compChoice === 'rock') {
            rAnnouncement.textContent = 'Rock beats scissors; computer won this round!'
            cScore.textContent = ++computerScore;
        }
        if (compChoice === 'paper') {
            rAnnouncement.textContent = 'Scissors cuts paper; player won this round!'
            pScore.textContent = ++playerScore;
        }
        if (compChoice ==='scissors') {
            rAnnouncement.textContent = 'This round was a tie, play again'
            return('tie');
        }

    }
    if (playerScore === 5) {
        rAnnouncement.textContent = `Player has won the series with a final score of ${playerScore}-${computerScore}! Choose a weapon to play again.`;
        pScore.textContent = 0;
        cScore.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        return
    }
    if (computerScore === 5) {
        rAnnouncement.textContent = `Computer has won the series with a final score of ${computerScore}-${playerScore}! Choose a weapon to play again.`;
        pScore.textContent = 0;
        cScore.textContent = 0;
        playerScore = 0;
        computerScore = 0;
        return
    }
}
