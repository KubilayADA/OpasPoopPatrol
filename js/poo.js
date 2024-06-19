class Poo {
    constructor(pooImage, gameScreen, speed = 5) {
        this.pooImage = pooImage;
        this.gameScreen = gameScreen;
        this.speed = speed;
        this.pooPosition = {
            x: Math.random() * (this.gameScreen.offsetWidth - this.pooImage.clientWidth),
            y: -this.pooImage.clientHeight
        };

        this.movePoo = this.movePoo.bind(this);
        this.updatePooPosition();
    }

    movePoo() {
        this.pooPosition.y += this.speed;
        this.updatePooPosition();

       
        if (this.pooPosition.y > this.gameScreen.offsetHeight) {
            this.resetPoo();
        }
    }

    updatePooPosition() {
        this.pooImage.style.left = this.pooPosition.x + 'px';
        this.pooImage.style.top = this.pooPosition.y + 'px';
    }

    resetPoo() {
        this.pooPosition.x = Math.random() * (this.gameScreen.offsetWidth - this.pooImage.clientWidth);
        this.pooPosition.y = -this.pooImage.clientHeight;
        this.updatePooPosition();
    }

    start() {
        this.interval = setInterval(this.movePoo.bind(this), 50); 
    }

    stop() {
        clearInterval(this.interval);
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const gameScreen = document.getElementById('game-screen');
    const pooImage = document.querySelector('.poo-image');


    const poo = new Poo(pooImage, gameScreen);
    poo.start();
});
