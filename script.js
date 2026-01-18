// Choices Button for Player
const buttons = document.querySelectorAll("#rockButtton, #paperButtton, #scissorsButtton");


// Elements to display choices
const playerChoice = document.getElementById('playerChoice');
const compChoice = document.getElementById('computerChoice');

// Element to display winner
const winnerElement = document.getElementById("winnerDisplay");

// Elements to display score
const computScore = document.getElementById("compScore");
const playerScore = document.getElementById("playerScore");

// Elements to display result
const resultDisplay = document.querySelector(".displayResult");
// Score Variables
let humanScore = 0;
let computerScore = 0;


// Listener for Button
function listenerForChoice(callback){
 let playChoice;
    buttons.forEach(element => {
    element.addEventListener("click", (button) =>{
        id = button.currentTarget.id;
        switch(id){
            case "rockButtton":
                playChoice = "rock"; 
                break;
            case "paperButtton":
                playChoice = "paper";
                break;
            case "scissorsButtton":
                playChoice = "scissor";
                break;
        }
        callback(playChoice);
    })  
})
};

listenerForChoice(humanChoice =>{
    let humanSelection = humanChoice;
    let computerSelection = computerChoice();
    playGame(humanSelection, computerSelection);
})

function computerChoice(){
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    switch (randomNumber) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }}

 function playGame(humanSelection,computerSelection){
    winnerElement.textContent = "";
    
    playerChoice.textContent = `Human: ${humanSelection}`;
    compChoice.textContent = `Computer: ${computerSelection}`;
        if(computerSelection == humanSelection) resultDisplay.textContent = "Tie !!";
        else{
            if(computerSelection == "rock" && humanSelection== "scissor"){
                resultDisplay.textContent = "You Loose ! rock beats scissor";
                computerScore++;
            }
            else if(computerSelection == "scissor" && humanSelection == "rock"){
                resultDisplay.textContent = "You Win ! rock beats scissor";
                humanScore++;
            }
            else if(computerSelection == "paper" && humanSelection == "rock"){
                resultDisplay.textContent = "You Loose ! paper beats rock";
                computerScore++;
            }
            else if(computerSelection == "rock" && humanSelection == "paper"){
                resultDisplay.textContent = "You Win ! paper beats rock";
                humanScore++;
            }
            else if(computerSelection == "paper" && humanSelection == "scissor"){
                resultDisplay.textContent = "You Win ! scissor beats paper";
                humanScore++;
            }
            else if(computerSelection == "scissor" && humanSelection == "paper"){
                resultDisplay.textContent = "You Loose ! scissor beats paper";
                computerScore++;
            }}
            computScore.textContent = `Comput : ${computerScore}`;
            playerScore.textContent = `Human: ${humanScore}`;
    
    if(computerScore === 5 || humanScore === 5){
        computerScore === 5 ? winnerElement.textContent = "The Winner is Computer":winnerElement.textContent = "The Winner is Human";
        computerScore = 0;
        humanScore = 0;
        return;
    }};
