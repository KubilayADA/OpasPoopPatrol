class Poo {
    constructor(gameScreen, startX, speed = 2) {
        this.gameScreen = gameScreen;
        this.pooImage = document.createElement('img');
        this.pooImage.src = 'images/poo.png'; 
        this.pooImage.classList.add('poo-image');
        this.gameScreen.appendChild(this.pooImage);

        this.position = {
            x: startX,
            y: 0
        };
        this.speed = speed;
        this.pooImage.style.left = `${this.position.x}px`;
        this.pooImage.style.top = `${this.position.y}px`;
    }

    move() {
        this.position.y += this.speed;
        this.pooImage.style.top = `${this.position.y}px`;
    }
}
