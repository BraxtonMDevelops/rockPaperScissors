game();

    function game(){
        let playerScore = 0;
        let computerScore = 0;
        while((playerScore || computerScore) < 5){

            let playerMove = prompt("Choose Rock, Paper, or Scissors.");
            let computerMove = computerPlay();
            
            let x = playRound(playerMove, computerMove);
            
            //count++;
            switch(x){
                case 1:
                    playerScore++;
                    break;
                case -1:
                    computerScore++;
                    break;
                default:
                    break;
            }
            alert(`You have a score of ${playerScore}`);
            alert(`the computer has a score of ${computerScore}`);
        }
        let delta = (computerScore - playerScore);
        if((computerScore == 5) && (delta > 2)){
            alert(`The computer rocked you this game! You lost by ${delta} points!`);        
        }
        else if ((computerScore == 5) && (delta < 2)){
            alert(`You lost to the computer but at least it was only by ${delta} points.`);
        }
        else if ((playerScore == 5) && (delta > -2)){
            alert(`You beat the computer but it was only by ${Math.abs(delta)} points.`);
        }
        else{
            alert(`You rocked the computer this game! You beat it by ${Math.abs(delta)} points!`);
        }

    }
       
    function playRound(playerMove, computerMove){
        // this line below allows us to normalize player input, since the comptuer should output the same thing everytime and we don't know
        // what the player will input into the game.
        playerMove = playerMove.toLowerCase();
        if(playerMove == computerMove){
            alert(`You tied the computer, you both had ${playerMove}.`);
            return 0;
        }    
        if(((playerMove == "rock") && (computerMove == "Scissors"))||((playerMove == "paper") && (computerMove == "Rock"))||((playerMove == "scissors") && (computerMove == "Paper"))){
            computerMove = computerMove.toLowerCase();
            alert(`You won this round with ${playerMove}, which dominated the computer's ${computerMove}.`);
            // this line allows us to signify playerScore needs an update.
            return 1;
        }
        else{
            computerMove = computerMove.toLowerCase();
            alert(`The computer won this round with ${computerMove}, which dominated your ${playerMove}.`);
            // this line allows us to signify computerScore needs an update.
            return -1;    
        }    
    }
    
    function computerPlay(){
        let choices = ["Rock", "Paper", "Scissors"];
        // Randomization of between 1 and 3 to select an element of the array.
        let selection = Math.floor((Math.random() * 3)+ 1); 
        // In order to ensure no out of bounds errors and that rock gets picked we subtract 1.
        return choices[selection - 1];
    }