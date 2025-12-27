let humanScore = 0;
let computerScore = 0;

function computerChoice(){
    let randomNumber = Math.floor(Math.random()* 3) + 1;
    switch (randomNumber) {
        case 1: 
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
 }

 function getHumanChoice(){
    let userInput = prompt("Pick one between : rock - paper - scissor").toLocaleLowerCase();
    switch (userInput) {
        case "rock": 
            return userInput;
        case "paper":
            return userInput;
        case "scissor":
            return userInput;
    }

 }


 let humanSelection = getHumanChoice();
 let computerSelection = computerChoice();
    

 function playGame(humanSelection,computerSelection){
       playRound(humanSelection, computerSelection);

    for(i = 1; i<5;i++){
        humanSelection = getHumanChoice();
        computerSelection = computerChoice();
        playRound(humanSelection, computerSelection);

    }

    if(computerScore > humanScore) console.log(`Comput : ${computerScore} Human: ${humanScore} Comput WIN !!`);
    else console.log(`Human: ${humanScore}  Comput: ${computerScore} You Win !!!`)

     function playRound(HumanChoice, computerChoice){
    if(computerChoice === HumanChoice) console.log("Tie !!");
    else{
        if(computerChoice == "rock" && HumanChoice == "scissor"){
            console.log("You Loose ! rock beats scissor")
            computerScore++;
        }

        else if(computerChoice == "scissor" && HumanChoice == "rock"){
            console.log("You Win ! rock beats scissor")
            humanScore++;
        }

        else if(computerChoice == "paper" && HumanChoice == "rock"){
            console.log("You Loose ! paper beats rock")
            computerScore++;
        }
        else if(computerChoice == "rock" && HumanChoice == "paper"){
            console.log("You Win ! paper beats rock")
            humanScore++;
        }

        else if(computerChoice == "paper" && HumanChoice == "scissor"){
            console.log("You Win ! scissor beats paper")
            humanScore++;
        }

        else if(computerChoice == "scissor" && HumanChoice == "paper"){
            console.log("You Loose ! scissor beats paper")
            computerScore++;
        }

    }
 }
 }


playGame(humanSelection, computerSelection)