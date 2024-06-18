const startButton = document.querySelector('.start-button');
const gameScreen = document.getElementById('game-screen');
const headerImage = document.querySelector('.header-image');
const arrowImage = document.querySelector('.arrows-image');
const paragraph = document.querySelector('p'); 
const stats = document.querySelector('.stats'); 
const gardenImage = document.querySelector('.garden-image');
const startPage = document.querySelector('.start-page');
const playerImage = document.querySelector('.player-image');
const poo = document.getElementById('poo');

 let playerPosition = {
        x: 200, 
        y: window.innerHeight - playerImage.clientHeight
    };

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    headerImage.style.display = 'none';
    arrowImage.style.display = 'none';
    paragraph.style.display = 'none';
    stats.style.display = 'none';
    
    gameScreen.style.display = 'flex';
    gardenImage.style.display = 'block';
    startPage.style.display = 'block';

    
    
    startGame();
});

function startGame() {
    document.addEventListener('keydown', handleKeyDown);
}

function handleKeyDown(event) {
    const speed = 30;
    switch (event.key) {
        case 'ArrowLeft':
            movePlayer(-speed, 0);
            break;
        case 'ArrowRight':
            movePlayer(speed, 0);
            break;
    }
}

function movePlayer(moveX, moveY) {
    
    playerPosition.x += moveX;
    playerPosition.y += moveY;

    const gameScreenLimit = gameScreen.getBoundingClientRect();
    const playerLimit = playerImage.getBoundingClientRect();

    const maxX = gameScreenLimit.width - playerLimit.width;
    const maxY = gameScreenLimit.height - playerLimit.height;

   
    if (playerPosition.x < 0) {
        playerPosition.x = 0;
    } else if (playerPosition.x > maxX) {
        playerPosition.x = maxX;
    }

    if (playerPosition.y < 0) {
        playerPosition.y = 0;
    } else if (playerPosition.y > maxY) {
        playerPosition.y = maxY;
    }
    playerImage.style.left = playerPosition.x  + 'px';
    playerImage.style.top = playerPosition.y + 'px';
}

const dogImage = document.querySelector('.dog-image');
let direction = 1; 
let speed = 10;
function moveDog() {
    const currentLeft = parseInt(window.getComputedStyle(dogImage).left);
    const containerWidth = document.querySelector('.game-screen').offsetWidth;
    const dogWidth = dogImage.offsetWidth;
  
    if (currentLeft + dogWidth >= containerWidth) {
      direction = -1; // Change direction to left
    } else if (currentLeft <= 0) {
      direction = 1; // Change direction to right
    }
  
    // Calculate new position
    const newLeft = currentLeft + direction * speed;
    dogImage.style.left = newLeft + 'px';
  }
  
  // Call moveDog every 20 milliseconds (adjust as needed)
  setInterval(moveDog, 20);
