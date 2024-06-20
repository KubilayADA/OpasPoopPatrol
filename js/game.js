class Game {
    constructor() {
        this.startScreen = document.querySelector('.start-page');
        this.gameScreen = document.querySelector('#game-screen');
        this.gameEnd = document.querySelector('#game-end');
        this.startButton = document.getElementById('start-button'); 
        this.arrowsImage = document.querySelector('.arrows-image');
        this.dogImage = document.querySelector('.dog-image');
        this.stats = document.querySelector('.stats');
        this.livesBar = document.querySelector('.lives');
        this.scoreBar = document.querySelector('.score');
        this.paragraph = document.querySelector('.guide');
        this.playerImage = document.querySelector('.player-image');

        this.score = 0;
        this.lives = 3;
        this.gameOver = false;

        this.startButton.addEventListener('click', () => {
            this.startGame();
        });
    }

    startGame() {
        this.arrowsImage.style.display = 'none';
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.dogImage.style.display = 'block';
        this.playerImage.style.display = 'block';
        this.updateStats();

        this.player = new Player(this.gameScreen, this.playerImage);
        this.dog = new Dog(this.dogImage, this.gameScreen);
        this.dog.start();

        this.gameLoop = setInterval(() => {
            this.updateGame();
        }, 1000 / 60);
    }

    updateGame() {
        for (let i = this.dog.poos.length - 1; i >= 0; i--) {
            const poo = this.dog.poos[i];
            poo.move()
            if (this.checkCollision(poo)) {
                this.updateScore();
                poo.pooImage.remove();
                this.dog.poos.splice(i, 1);
                i--
            } else if (poo.position.y > this.gameScreen.clientHeight) {
                this.dog.poos.splice(i, 1);
                i--
                poo.pooImage.remove();
                this.loseLife();
            }
        }
    }

    updateScore() {
        this.score++;
        this.updateStats();
    }

    loseLife() {
        this.lives--;
        this.updateStats();
        if (this.lives <= 0) {
            this.endGame();
        }
    }
    

    updateStats() {
        this.scoreBar.textContent = this.score;
        this.livesBar.textContent = `${this.lives} ${Array.from({length: this.lives}, () => '💩').join('')}`;
    }

    checkCollision(poo) {
        const playerRect = this.player.playerImage.getBoundingClientRect();
        const pooRect = poo.pooImage.getBoundingClientRect();


        const didCollide = playerRect.left < pooRect.right &&
            playerRect.right > pooRect.left &&
            playerRect.top < pooRect.bottom &&
            playerRect.bottom >pooRect.top
        return didCollide
    }

    endGame() {
        clearInterval(this.gameLoop);
        this.dog.stop();
        // Show the grandpa
        alert(`DAS IST KEIN FAHRRAD WEG!
Do you want to restart the game ?`);
        this.resetGame();
    }

    resetGame() {
        this.score = 0;
        this.lives = 3;
        this.gameOver = false;
        this.dog.poos.forEach(poo => poo.pooImage.remove());
        this.dog.poos = [];
        this.updateStats();
        this.startScreen.style.display = 'block';
        this.arrowsImage.style.display = 'block';
        this.gameScreen.style.display = 'none';
        this.dogImage.style.display = 'none';
        this.playerImage.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});