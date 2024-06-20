class Dog {
    constructor(dogImage, gameScreen, speed = 10) {
        this.dogImage = dogImage;
        this.gameScreen = gameScreen;
        this.direction = 1;
        this.speed = speed;
        this.pooSpeed = 3;
        this.pooInterval = 1000;

        this.moveDog = this.moveDog.bind(this);
        this.releasePoo = this.releasePoo.bind(this);
        this.poos = [];
    }

    moveDog() {
        const currentLeft = parseInt(this.dogImage.style.left) || 0; 
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

    releasePoo() {
        const dogLeft = parseInt(this.dogImage.style.left) || 0;
        const dogWidth = this.dogImage.offsetWidth;
        const startX = dogLeft + Math.random() * dogWidth;

        const newPoo = new Poo(this.gameScreen, startX, this.pooSpeed);
        this.poos.push(newPoo);
    }

    start() {
        this.moveInterval = setInterval(this.moveDog, 20); 
        this.pooInterval = setInterval(this.releasePoo, this.pooInterval);
    }

    stop() {
        clearInterval(this.moveInterval);
        clearInterval(this.pooInterval);
    }
}