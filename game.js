const startButton = document.querySelector('.start-button');
const gameScreen = document.getElementById('game-screen');
const headerImage = document.querySelector('.header-image');
const arrowImage = document.querySelector('.arrows-image');
const paragraph = document.querySelector('p'); 
const paragraph1 = document.querySelector('p1');
const gardenImage = document.querySelector('.garden-image');
const startPage = document.querySelector('.start-page');
const playerImage = document.querySelector('.player-image');

let playerPosition = {
    x: 20,
    y: 40
};

startButton.addEventListener('click', () => {
    
    startButton.style.display = 'none';
    headerImage.style.display = 'none';
    arrowImage.style.display = 'none';
    paragraph.style.display = 'none';
    paragraph1.style.display = 'none';
    if (paragraph1) {
        paragraph1.style.display = 'none';
    }
    
    gameScreen.style.display = 'flex';
    gardenImage.style.display = 'block';
    startPage.style.display = 'block';
    
    startGame();
});

function startGame() {
    
    document.addEventListener('keydown', handleKeyDown);
  
}
function handleKeyDown(event) {
    const speed = 10;
    switch (event.key) {
        case 'ArrowLeft':
            movePlayer(-speed,0);
            break;
            case 'ArrowRight':
                movePlayer(+speed, 0);
                break;
    }
}
function movePlayer(exxenX, exxenY) {
    playerPosition.x += exxenX;
    playerPosition.y += exxenY;

    const gameScreenLimit = gameScreen.getBoundingClientRect();
    const playerLimit = playerImage.getBoundingClientRect();

    const maxX = gameScreenLimit.width - playerLimit.width;
    const maxY = gameScreenLimit.height - playerLimit.height;

    if(playerPosition.x < 0) {
        playerPosition = 0;
    } else if (playerPosition.x > maxX) {
        playerPosition.x = maxX;
    }

    if (playerPosition.y < 0) {
        playerPosition.y = 0;
    } else if (playerPosition.y > maxY) {
        playerPosition.y = maxY;
    }

    playerImage.style.left = playerPosition.x + 'px';
    playerImage.style.top = playerPosition.y + 'px';
}


