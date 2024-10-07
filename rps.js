function playGame() {

    let humanScore = 0
    let computerScore = 0

    function getComputerChoice() {
        const choice =  Math.random()
        if (choice < 0.33) {
            return 'rock'
        } else if (choice > 0.66) {
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
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()
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

    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())

    console.log(humanScore)
    console.log(computerScore)
}

playGame()