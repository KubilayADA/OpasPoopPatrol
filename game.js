const startButton = document.querySelector('.start-button');
const gameScreen = document.getElementById('game-screen');
const headerImage = document.querySelector('.header-image');
const arrowImage = document.querySelector('.arrows-image');
const paragraph = document.querySelector('p'); 
const paragraph1 = document.querySelector('p1');
const gardenImage = document.querySelector('.garden-image');
const startPage = document.querySelector('.start-page');

startButton.addEventListener('click', () => {
    
    startButton.style.display = 'none';
    headerImage.style.display = 'none';
    arrowImage.style.display = 'none';
    paragraph.style.display = 'none';
    paragraph1.style.display = 'none';
    
    gameScreen.style.display = 'flex';
    gardenImage.style.display = 'block';
    startPage.style.display = 'block';
    
    startGame();
});

function startGame() {
    

    console.log('game started');   
}
function initializeGame() {
    
}
