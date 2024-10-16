let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choice =  Math.floor(Math.random() * 3) + 1
    if (choice === 1) {
        return 'rock'
    } else if (choice === 2) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    const choice = prompt('rock, paper or scissors?').toLowerCase()
    return choice
}

function playRound(humanChoice, computerChoice) {
    console.log(humanChoice)
    console.log(computerChoice)
    if (humanChoice === computerChoice) {
        return 'this is a tie!'
    }
    if (humanChoice === 'rock') {
        if (computerChoice == 'scissors') {
            humanScore++
            return 'you win!'
        } else {
            computerScore++
            return 'you lose!'
        }
    }
    if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            humanScore++
            return 'you win!'
        } else {
            computerScore++
            return 'you lose!'
        }
    }
    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++
            return 'you win!'
        } else {
            computerScore++
            return 'you lose'
        }
    }   
}

function playGame() {
    for (let i = 0; i < 5; i++){
        console.log(playRound(getHumanChoice(), getComputerChoice()))
    }

    console.log(humanScore)
    console.log(computerScore)
}

playGame()