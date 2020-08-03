const game = () => {
    let pScore = 0;
    let cScore = 0;

    //Start the Game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");

        const computerOptions = ["Rock", "Paper", "Scissors"];
        options.forEach(option => {
            option.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice);
                //Update Images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice) => {
        //Update Text
        const winner = document.querySelector(".winner");

        //Check if tie or not and who wins
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
        } else if (playerChoice === "Rock" && computerChoice === "Scissors" || playerChoice === "Paper" && computerChoice === "Rock" || playerChoice === "Scissors" && computerChoice === "Paper") {
            winner.textContent = "Player Wins."
            pScore++;
            updateScore();
        } else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
        }
    };
    //Is call all the inner function
    startGame();
    playMatch();
};
//start the game function
game();