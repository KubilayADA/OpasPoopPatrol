class Player {
    constructor(gameScreen, playerImage) {
        this.gameScreen = gameScreen;
        this.playerImage = playerImage;
        this.playerPosition = {
            x: 200,
            y: window.innerHeight - this.playerImage.clientHeight
        };

        this.movePlayer = this.movePlayer.bind(this);
        this.updatePlayerPosition();
    }

    movePlayer(moveX, moveY) {
        this.playerPosition.x += moveX;
        this.playerPosition.y += moveY;

        const gameScreenLimit = this.gameScreen.getBoundingClientRect();
        const playerLimit = this.playerImage.getBoundingClientRect();

        const maxX = gameScreenLimit.width - playerLimit.width;
        const maxY = gameScreenLimit.height - playerLimit.height;

        if (this.playerPosition.x < 0) {
            this.playerPosition.x = 0;
        } else if (this.playerPosition.x > maxX) {
            this.playerPosition.x = maxX;
        }

        if (this.playerPosition.y < 0) {
            this.playerPosition.y = 0;
        } else if (this.playerPosition.y > maxY) {
            this.playerPosition.y = maxY;
        }

        this.updatePlayerPosition();
    }

    updatePlayerPosition() {
        this.playerImage.style.left = this.playerPosition.x + 'px';
        this.playerImage.style.top = this.playerPosition.y + 'px';
    }
}

export default Player;
