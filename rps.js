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
    const choice = prompt('rock, paper or scissors?')
    return choice
}

console.log(getHumanChoice())