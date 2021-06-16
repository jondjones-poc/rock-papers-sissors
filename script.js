const playerScoreEl = document.querySelector('.player-score p');
const computerScoreEl = document.querySelector('.computer-score p');
const optionButtons = document.querySelectorAll('.options button');
const playButton = document.querySelector('.intro button');
const introSection = document.querySelector('.intro');
const match = document.querySelector('.match');
const computerHand = document.querySelector('.computer-hand');
const playerHand = document.querySelector('.player-hand');
const winner = document.querySelector('.winner');
const hands = document.querySelectorAll('.hands img');

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    const numberToWin = 1;

    const startGame = () => {
        playButton.addEventListener('click', () => {
            introSection.classList.add('fadeOut');
            match.classList.add('fadeIn');
        })
    }

    const playMatch = () => {
        const gameOptions = ['rock', 'paper', 'scissors'];

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            })
        })
   
        optionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const computerRoll = Math.floor(Math.random() * 3);
                const computerChoice = gameOptions[computerRoll];

                winner.textContent = '';
                
                setTimeout(() => {
                    compareHands(button.classList.value, computerChoice);
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png`
                }, 2000);

                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            })
        })
    }

    const reset = () => {
        playerScoreEl.textContent = 0;
        playerScore = 0;
        computerScoreEl.textContent = 0;
        computerScore = 0;
    }

    const updateScore = () => {
        if (playerScore > numberToWin) {
            winner.textContent = 'Player wins match!';
            reset();
        } else if (computerScore > numberToWin) {
            winner.textContent = 'Computer wins match!';

        } else {
            playerScoreEl.textContent = playerScore; 
            computerScoreEl.textContent = computerScore;
        }
    }

    const compareHands = (playerChoice, computerChoice) => {
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie';
        } else if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player wins';
                playerScore++;
            } else {
                winner.textContent = 'Computer wins';
                computerScore++;
            }
        } else if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer wins';
                computerScore++;
            } else {
                winner.textContent = 'Player wins';
                playerScore++;
            }
        } else {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer wins';
                computerScore++;
            } else {
                winner.textContent = 'Player wins';
                playerScore++;
            }
        }

        updateScore();
    }

    startGame();
    playMatch();
}

game();