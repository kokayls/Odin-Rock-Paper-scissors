class Game{
    constructor(){
        this.playerChoice = null;
        this.computerChoice = null;
        this.numberofRounds = 5;
        this.round = 1;
        this.playerScores = 0;
        this.computerScores = 0;
        console.log("game started");
    }

    play(){
        // if(this.round >= this.numberofRounds){
        //     
        // }
        while (this.round <= this.numberofRounds) {
            //play a round
            //console.log("play one round");
            this.computerChoice = this.getComputerChoice();
            this.playerChoice = this.getComputerChoice();
            //this.printChoices();
            this.setRoundWinner();
            this.round++;
            this.computerChoice = null;
            this.playerChoice = null;
        }

        this.endGame();
    }
    endGame(){
        console.log("The is ended!")
        if(this.playerScores > this.computerScores){
            console.log("You win!");
        }else if(this.playerScores == this.computerScores){
            console.log("It's a draw!");
        }else console.log("You lost!");

        this.playerChoice = null;
        this.computerChoice = null;
        this.numberofRounds = 5;
        this.round = 1;
        this.playerScores = 0;
        this.computerScores = 0;

    }

    getComputerChoice(){
        let number = Math.floor(Math.random() * (3 ));
        return Math.floor(Math.random() * (3 ));
    }
    
    printChoices(){

        console.log(`Player has chosen: ${this.choiceToItem(this.playerChoice)}, Computer has chosen: ${this.choiceToItem(this.computerChoice)}`);
    }
    
    setRoundWinner(){
        this.printChoices();
        if (this.playerChoice == this.computerChoice) {
            console.log("each player have choosen the same");

        }
        else if(this.playerChoice == 0){
            if(this.computerChoice == 1){
                console.log("Computer won this round");
                this.computerScores++;
            }else if(this.computerChoice == 2){
                console.log("Player won this round");
                this.playerScores++;
            }
        }
        else if(this.playerChoice == 1){
            if(this.computerChoice == 0){
                console.log("Player won this round");
                this.playerScores++;
            }else if(this.computerChoice == 2){
                console.log("Computer won this round");
                this.computerScores++;
            }
        }
        else if(this.playerChoice == 2){
            if(this.computerChoice == 0){
                console.log("Computer won this round");
                this.computerScores++;
            }else if(this.computerChoice == 1){
                console.log("Player won this round");
                this.playerScores++;
            }
        }
        
    }
    choiceToItem(choice){
        if(choice == 0) return "rock";
        else if(choice == 1) return "paper";
        else if(choice == 2) return "scissor";
        
    }
}