const player = document.getElementById('player');
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');
const blockGame = document.getElementById('block-game');
let playerScore = 0;
let restartPlayerScore = 0;
let newHighScore = 0;
score.textContent = "Current Score: " + playerScore;
highScore.textContent = "High Score: " + newHighScore ;
let blockSpeed;
let generateBlock;
const blockSpawnMin = 500
const blockSpawnMax = 2000

//Core game loop. Sets game timing to frame render rate of the browser
let lastTime = 0;
function updateLoop(time) {
    if (lastTime == null){
        lastTime = time
        return
    };
    const delta = time - lastTime;
    lastTime = time
    updateBlock(delta);
    console.log(delta);
    // if(isCollision(playerRect, blockRect)) {
    //     updateHighScore();
    //     alert('you lose');
    // }
    window.requestAnimationFrame(updateLoop)
}
window.requestAnimationFrame(updateLoop)


function createBlock () {
    const generateBlock = document.createElement('div');
    generateBlock.dataset.block = true;
    generateBlock.classList.add('block');
    getElem(generateBlock, "--left", 100)
    let randomTop = parseInt((Math.random()*300)+75);
    let randomWide = parseInt((Math.random()*100)+40);
    if (randomTop >= 345) {
    randomTop = 345;
    }  
    generateBlock.style.backgroundColor = randomColor();
    generateBlock.style.top = randomTop + "px";
    generateBlock.style.width = randomWide + "px";
    blockGame.append(generateBlock);
}

function destroyBlock () {
    block.remove()
}


//
let nextBlockInterval = blockSpawnMin
function updateBlock(delta, speedScale){
    document.querySelectorAll('block').forEach (generateBlock =>{
    incrementUpdate(generateBlock, "--left", delta * 2 * -1)})
    if(nextBlockInterval <= blockSpawnMin) {
        createBlock()
        nextBlockInterval = randomSpawnInterval(blockSpawnMin, blockSpawnMax) / speedScale;
    }
    nextBlockInterval -= delta;
    // if(((blockRect.x + blockRect.width) + "px") < (0 + "px")) {
    //     destroyBlock();
    // };
    // if(playerRect.x >= blockRect.x + blockRect.width) {
    //     updateScore()
    // };
};

//Create a random spawn interval by generating a random number between defined min/max variables. Adding "1" and Min value to ensure return value is within the defined range.
function randomSpawnInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min);
}

//Remove string from element, return as an integer.
function getElem(elem, property) {
    return parseInt(getComputedStyle(elem).getPropertyValue(property)) || 0;
} 

//Update given Element's property.
function setElemValue(elem, property, value) {
    elem.style.getElem(property, value);
};

//Change give Element's property by a specified amount.
function incrementUpdate(elem, property, increment) {
    return setElemValue(elem, property, getElem(elem,property) + increment)
    
}


// let playerRect = player.getBoundingClientRect('player');
// let blockRect = generateBlock.getBoundingClientRect('block');


function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    newColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    return newColor;
}

//function to simulate gravity. Calculates player bottom position in play area and removes 3px every 
//15ms unless player is on bottom of play area.
 setInterval(function(){
        const charBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
              
        if (charBottom > 0) {
            player.style.bottom = (charBottom - 3) + "px";
        }
    },15);

function playerJump(){
        const jump = player.style.bottom.replace('px','')
        const playerJump = parseInt(jump, 10)
        player.style.bottom = `${playerJump + 75}px`;
        if (playerJump >= 300) {
            player.style.bottom = 370 + "px"}
        }


document.addEventListener("keydown", function (e){
    if (e.key === "ArrowUp") {
        playerJump()    
        
    }
})

document.addEventListener("click", function () {
    playerJump();
})

//Resets player score to 0 after game over.
function restartScore () {
    gameStart;
    return "Current Score: " + restartPlayerScore;
}

function updateScore() {
    restartPlayerScore++;
    return "Current Score: " + restartPlayerScore};

function updateHighScore () {
    if (newHighScore <= restartPlayerScore) {
        newHighScore = restartPlayerScore;
    };
        return newHighScore};

//Set speed modifier.
 function updateSpeed(delta) {
     let currentSpeed = parseFloat(window.getComputedStyle(block).getPropertyValue("animation-duration"));
     let checkSpeed = restartPlayerScore%5;
     // console.log("current: " + restartPlayerScore + " check: " + checkSpeed);
     if ((checkSpeed == 0) && (currentSpeed > 1))  {
         let newSpeed = (currentSpeed - 0.2);
         console.log("current: " + restartPlayerScore + " check: " + checkSpeed + " change: " + newSpeed)
         return newSpeed};
     console.log("current: " + restartPlayerScore + " check: " + checkSpeed)
 };


function isCollision (rect1, rect2) {
    if( rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {

    };
};

