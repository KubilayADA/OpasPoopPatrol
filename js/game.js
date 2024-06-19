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
        this.gardenImage = document.querySelector('.garden-image');
        this.width = 500;
        this.height = 600;

        this.currentFrame = 0;
     
        this.gameOver = false;

        this.startButton.addEventListener('click', () => {
            this.startGame();
        });
        this.player = new Player(this.gameScreen, this.playerImage);
    }

    startGame() {
        this.arrowsImage.style.display = 'none';
        this.startScreen.style.display = 'none';
        this.gameScreen.style.display = 'block';
        this.dogImage.style.display = 'block';
        this.playerImage.style.display = 'block';
        this.gardenImage.style.display = 'block';
        this.livesBar.style.display = 'block';
        this.scoreBar.style.display = 'block';
        this.pooImage.style.display ='block'; 
        
       
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
});