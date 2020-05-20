game();

    function game(){
        let playerScore = 0;
        let computerScore = 0;
        let count = 0;
        while(count < 5){

            let playerMove = prompt("Choose Rock, Paper, or Scissors.");
            let computerMove = computerPlay();
            
            let rWinner = determineRoundWinner(playerMove, computerMove);
            alertRound(rWinner, playerMove, computerMove);
            
            count++;

            playerScore = updatePScore(rWinner, playerScore);
            computerScore = updateCScore(rWinner, computerScore);

            alert(`You have a score of ${playerScore}`);
            alert(`the computer has a score of ${computerScore}`);
        }
        showGameResults(playerScore, computerScore);        
    }
    function showGameResults(playerScore, computerScore){
        if(playerScore > computerScore){
            alert("Congratulations you triumphed over (this extremely dumb) machine!"); 
        }
        else if(computerScore > playerScore){
            alert("Beware the might of the machines. If you don't the end might be nigh!");
        }
        else{
            alert("Welp somehow you done broke it. Be proud of yourself for getting here.")
        }
    }

    function updatePScore(rWinner, playerScore){
        if(rWinner == 1)
            return playerScore++;
        else
            return playerScore;
    }

    function updateCScore(rWinner, computerScore){
        if(rWinner == -1)
            return computerScore++;
        else
            return computerScore;
    }

    function alertRound(rWinner, playerMove, computerMove){
        switch(rWinner){
            case 1:
                alert(`You won this round with ${playerMove}, which dominated the computer's ${computerMove}.`);
                break;
            case -1:
                alert(`The computer won this round with ${computerMove}, which dominated your ${playerMove}.`);
                break;
            default:
                alert(`You tied the comptuer, you both had ${playerMove}`);
        }
    }

    function determineRoundWinner(playerMove, computerMove){
        // this line below allows us to normalize player input, since the comptuer should output the same thing everytime and we don't know
        // what the player will input into the game.
        playerMove = playerMove.toLowerCase();
        computerMove = computerMove.toLowerCase();
        if(playerMove == computerMove){
            return 0;
        }    
        if(((playerMove == "rock") && (computerMove == "scissors"))||((playerMove == "paper") && (computerMove == "rock"))||((playerMove == "scissors") && (computerMove == "paper"))){
            // this line allows us to signify playerScore needs an update.
            return 1;
        }
        else{
            alert(`The computer won this round with ${computerMove}, which dominated your ${playerMove}.`);
            // this line allows us to signify computerScore needs an update.
            return -1;    
        }    
    }
    
    function computerPlay(){
        let choices = ["Rock", "Paper", "Scissors"];
        // Randomization to select an element of the array.
        return choices[Math.floor(Math.random()* 3)];
    }