//global dom defintions
const rockIconEle = document.querySelector('.rock_icon');
const paperIconEle = document.querySelector('.paper_icon');
const scissorsIconEle = document.querySelector('.scissors_icon');
const roundNumberEle = document.querySelector('.round_number');
const playerScoreEle = document.querySelector('.player_score');
const computerScoreEle = document.querySelector('.computer_score');
const displayPlayerChoiceEle = document.querySelector('.display_player_choice')
const displayComputerChoiceEle = document.querySelector('.display_computer_choice')

function computerPlay () {
    const choices = ['rock','paper','scissors']
    const randomChoice = choices[Math.floor(choices.length * Math.random())];
    return randomChoice
}

/*function playerPlay () {
    const playerChoice = 'rock'
    return playerChoice
}*/

let playerScore = 0;
let computerScore = 0; 
let round = 0;
let playerSelection = ''

function playRound () {
    //const playerSelection = playerPlay()
    const computerSelection = computerPlay()

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++
        computerScoreEle.textContent = 'Computer Score: '+computerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Lose! Paper beats Rock. Computer Wins. '

    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++
        playerScoreEle.textContent = 'Player Score: '+playerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Win! Rock beats Scissors. Player Wins '

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++
        playerScoreEle.textContent = 'Player Score: '+playerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Win! Paper beats Rock. Player Wins '

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++
        computerScoreEle.textContent = 'Computer Score: '+computerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Lose! Scissors beats Paper. Computer Wins '

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++
        computerScoreEle.textContent = 'Computer Score: '+computerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Lose! Rock beats Scissors. Computer Wins '

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++
        playerScoreEle.textContent = 'Player Score: '+playerScore
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection
        //return 'You Win! Scissors beats Paper. Player Wins '

    } else if (playerSelection == computerSelection) {
        displayPlayerChoiceEle.textContent = 'Player Choose: '+playerSelection+', It\'s a tie!' 
        displayComputerChoiceEle.textContent = 'Computer Choose: '+computerSelection+', It\'s a tie!' 
        //return 'It\'s a tie! Both players choose '+playerSelection
    }
}

//apend element, insert "winner tag"

function game () {
    rockIconEle.addEventListener('click', () => {
        playerSelection = 'rock'
        round++
        roundNumberEle.textContent = 'Round: '+round
        playRound(playerSelection)
        declareWinner ()
    });
    paperIconEle.addEventListener('click', () => {
        playerSelection = 'paper'
        round++
        roundNumberEle.textContent = 'Round: '+round
        playRound(playerSelection)
        declareWinner ()
    });
    scissorsIconEle.addEventListener('click', () => {
        playerSelection = 'scissors'
        round++
        roundNumberEle.textContent = 'Round: '+round
        playRound(playerSelection)
        declareWinner ()
    });
}

function declareWinner () {
    if (playerScore == 5 ) {
        playerScoreEle.textContent = 'Player Score: Winner!'
    } else if (computerScore == 5 ) {
        computerScoreEle.textContent = 'Computer Score: Winner!'  
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0; 
    round = 0;
}

game()

/*
function game () {
    //play 5 founds 
    for (let i=0; i < 5; i++) {
        console.log (playRound())
        console.log ('playerScore:',playerScore, 'computerScore: ',computerScore)
    }

    //annouces winner after 5 rounds
    if (playerScore > computerScore) {
        console.log ('Player Wins!')
    } else if (playerScore < computerScore) {
        console.log ('Computer Wins!')
    } else {
        console.log ('It\'s a tie!')
    }
}

game()
*/