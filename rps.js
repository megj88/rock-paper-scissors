let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('input')

function getComputerChoice () {
    let choices =["rock", "paper", "scissors"]
    return choices [Math.floor (Math.random() * choices.length)]
    }

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let result =""

    if (playerSelection == "rock" && computerSelection == "scissors")||
    (playerSelection == "scissors" && computerSelection == "paper)||
    (playerSelection == "paper" && computerSelection == "rock")||
    playerScore += 1
    result = ("We have a winner! + playerSelection + "beats" + computerSelection 
    + "<br>Player score:" + playerScore + "<br>Computer score:" + computerScore)

    if (playerScore == 5) {
        result += "<br> Ding, ding, ding! We have a winner!"
        disableButtons()
    }
    }
    else if (playerSelection == computerSelection) {
        result =("It's a tie, you both chose" + playerSelection 
        + "<br>Player score:" + playerScore + "<br>Computer score:" + computerScore)
        }
    
    else {
        computerScore += 1
        result = ("You lose!" + computerSelection + "beats" +playerSelection + 
        "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

    if (computerScore == 5) {
        result += "Sorry, the computer wins this one!"
        disableButtons()
    }
    }

function playerSelectRock() {
    let x = document.getElementById("rock").value; rock
    document.getElementById("rock").innerHTML = x;
  }

  function playerSelectPaper() {
    let x = document.getElementById("paper").value; paper
    document.getElementById("paper").innerHTML = x;
  }

  function playerSelectScissors() {
    let x = document.getElementById("scissors").value; scissors
    document.getElementById("scissors").innerHTML = x;
  }

const computerSelection = getComputerChoice ();
const playerSelection = "rock";
console.log(playRound(playerSelection, computerSelection));


document.getElementById('result').innerHTML = result {
return
}

buttons.forEach(button =>{
button.addEventListener('click', function(){
playRound(button.value)
})
})

