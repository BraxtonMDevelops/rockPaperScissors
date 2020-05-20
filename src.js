game();


    function game(){
        let playerScore, computerScore, count = 0;
        while((playerScore || computerScore) < 5){
            if(count != 0){
                let playerMove = prompt("Choose Rock, Paper or Scissors.");
                let computerMove = prompt("Choose Rock, Paper or Scissors.");//computerPlay();
            }
    
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
        }
    }
       
    function playRound(playerMove, computerMove){
        // this line below allows us to normalize player input, since the comptuer should output the same thing everytime and we don't know
        // what the player will input into the game.
        playerMove = playerMove.toLowerCase();
        if(playerMove == computerMove){
            alert("You tied the computer!");
            return 0;
        }    
        if(((playerMove == "rock") && (computerMove == "Scissors"))||((playerMove == "paper") && (computerMove == "Rock"))||((playerMove == "scissors") && (computerMove == "Paper"))){
            alert("You won this round!");
            // this line allows us to signify playerScore needs an update.
            return 1;
        }
        else{
            alert("The computer won this round!");
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