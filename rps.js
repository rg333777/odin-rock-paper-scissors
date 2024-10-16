let humanScore = 0
let computerScore = 0

const humanScoreboard = document.querySelector('.hscore')
const computerScoreboard = document.querySelector('.cscore')
const result = document.querySelector('.roundResult')
const humanDisplay = document.querySelector('.humanChoice')
const computerDisplay = document.querySelector('.computerChoice')

const buttons = document.querySelectorAll('button');

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

function playRound(humanChoice, computerChoice) {
    humanDisplay.textContent = `you picked ${humanChoice}`
    computerDisplay.textContent = `the computer picked ${computerChoice}`
    if (humanChoice === computerChoice) {
        result.textContent = 'this is a tie!'
    } else {
        if (humanChoice === 'rock') {
            if (computerChoice == 'scissors') {
                humanScore++
                result.textContent = 'you win!'
            } else {
                computerScore++
                result.textContent = 'you lose!'
            }
        }
        if (humanChoice === 'scissors') {
            if (computerChoice === 'paper') {
                humanScore++
                result.textContent = 'you win!'
            } else {
                computerScore++
                result.textContent = 'you lose!'
            }
        }
        if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++
                result.textContent = 'you win!'
            } else {
                computerScore++
                result.textContent = 'you lose!'
            }
        }   
    }    
    humanScoreboard.textContent = `your score is ${humanScore}`
    computerScoreboard.textContent = `the computer score is ${computerScore}`
    if (humanScore === 5) {
        result.textContent = 'you win the game!'
        humanScore = 0
        computerScore = 0
    } else if (computerScore === 5) {
        result.textContent = 'you lose the game!'
        humanScore = 0
        computerScore = 0
    } 

}


function playGame() {
    buttons.forEach((button) => {
        button.addEventListener('click', function (e){
            if (e.target.className == 'rock') {
                playRound('rock', getComputerChoice())
            } else if (e.target.className == 'paper') {
                playRound('paper', getComputerChoice())
            } else {
                console.log(e.target.className)
                playRound('scissors', getComputerChoice())
            }
        })
    })   
}

playGame()