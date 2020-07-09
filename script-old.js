function computerPlay () {
    const choices = ['rock','paper','scissors']
    const randomChoice = choices[Math.floor(choices.length * Math.random())];
    return randomChoice
}

function playerPlay () {
    const playerChoice = prompt ('Choose your element').toLocaleLowerCase()
    return playerChoice
}

//const playerSelection = playerPlay()
//const computerSelection = computerPlay()
let playerScore = 0;
let computerScore = 0; 

function playRound () {
    const playerSelection = playerPlay()
    const computerSelection = computerPlay()

    if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++
        return 'You Lose! Paper beats Rock. Computer Wins. '
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore++
        return 'You Win! Rock beats Scissors. Player Wins '

    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore++
        return 'You Win! Paper beats Rock. Player Wins '

    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore++
        return 'You Lose! Scissors beats Paper. Computer Wins '

    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore++
        return 'You Lose! Rock beats Scissors. Computer Wins '

    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore++
        return 'You Win! Scissors beats Paper. Player Wins '

    } else if (playerSelection == computerSelection) {
        return 'It\'s a tie! Both players choose '+playerSelection
    }
}

//console.log(playRound(playerSelection, computerSelection))

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