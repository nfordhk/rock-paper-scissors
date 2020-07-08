function computerPlay () {
    const choices = ['rock','paper','scissors']
    const randomChoice = choices[Math.floor(choices.length * Math.random())];
    return randomChoice
}

const playerSelection = 'rock'
const computerSelection = computerPlay()

function playRound (playerSelection, computerSelection) {
    if (playerSelection == 'rock' && computerSelection == 'paper') {
        return 'You Lose! Paper beats Rock'
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return 'You Win! Rock beats Scissors'
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return 'You Win! Paper beats Rock'
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You Lose! Scissors beats Paper'
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return 'You Lose! Rock beats Scissors'
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You Win! Scissors beats Paper'
    } else if (playerSelection == computerSelection) {
        return 'It\'s a tie! Both players choose '+playerSelection
    }
}

//console.log(playRound(playerSelection, computerSelection))
