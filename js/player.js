class Player {
    constructor(gameScreen, playerImage) {
        this.gameScreen = gameScreen;
        console.log(this.gameScreen.clientHeight)
        this.playerImage = playerImage;
        
        this.playerPosition = {
            x: this.gameScreen.offsetWidth / 2 - this.playerImage.clientWidth / 2,
            y: this.gameScreen.offsetHeight - this.playerImage.clientHeight  / 1.5,
        };

        this.moveSpeed = 50; 
       
        this.movePlayer = this.movePlayer.bind(this);
        this.setupControls(); 
        this.updatePlayerPosition(); 
    }

    setupControls() {
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.movePlayer(-this.moveSpeed, 0); 
            } else if (event.key === 'ArrowRight') {
                this.movePlayer(this.moveSpeed, 0); 
            }
        });
    }

    movePlayer(moveX, moveY) {
        this.playerPosition.x += moveX;
        this.playerPosition.y += moveY;

       
        const maxX = this.gameScreen.offsetWidth - this.playerImage.clientWidth;
        const maxY = this.gameScreen.offsetHeight - this.playerImage.clientHeight;

   
        if (this.playerPosition.x < 0) {
            this.playerPosition.x = 0;
        } else if (this.playerPosition.x > maxX) {
            this.playerPosition.x = maxX;
        }

        this.updatePlayerPosition();
    }

    updatePlayerPosition() {
        this.playerImage.style.left = this.playerPosition.x + 'px';
        this.playerImage.style.top = this.playerPosition.y + 'px';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const gameScreen = document.getElementById('game-screen'); 
    const playerImage = document.querySelector('.player-image'); 

    //const player = new Player(gameScreen, playerImage);
});
