class Dog {
    constructor(dogImage, gameScreen, speed = 10) {
        this.dogImage = dogImage;
        this.gameScreen = gameScreen;
        this.direction = 1;
        this.speed = speed;
        this.moveDog = this.moveDog.bind(this); 
    }

    moveDog() {
        const currentLeft = parseInt(window.getComputedStyle(this.dogImage).left);
        const containerWidth = this.gameScreen.offsetWidth;
        const dogWidth = this.dogImage.offsetWidth;
    
        if (currentLeft + dogWidth >= containerWidth) {
            this.direction = -1; 
        } else if (currentLeft <= 0) {
            this.direction = 1; 
        }
    
        const newLeft = currentLeft + this.direction * this.speed;
        this.dogImage.style.left = newLeft + 'px';
    }

    start() {
        this.interval = setInterval(this.moveDog, 10);
    }

    stop() {
        clearInterval(this.interval);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dogImage = document.querySelector('.dog-image');
    const gameScreen = document.querySelector('.game-screen');
    
    const dog = new Dog(dogImage, gameScreen);
    dog.start();
});