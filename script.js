const block = document.getElementById('block');
const player = document.getElementById('player');
const score = document.getElementById('score');
const highScore = document.getElementById('highScore');
const button = document.getElementsByClassName('button')[0];
let playerScore = 0;
let restartPlayerScore = 0;
let newHighScore = 0;
score.textContent = "Current Score: " + playerScore;
highScore.textContent = "High Score: " + newHighScore ;

function toggleButton(){
<<<<<<< Updated upstream
      button.classList.remove('active');
      button.classList.add('hidden');
      button
      startGame();
    };


function startGame(){


block.style.animation = "block";
block.style.animationDuration = "5s";
block.style.animationTimingFunction = "linear";
block.style.animationIterationCount = "infinite";

=======
        button.classList.remove("active");
        button.classList.add("hidden");

        startGame();
};

function startGame(){
    animationStart();
    animationCycle();
    

function createBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    block.id = 'block'
    blockGame.append(block);
    blockProperties();
};

function removeBlock() {
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    const blockWidth = parseInt(window.getComputedStyle(block).getPropertyValue("width"));
    const payerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
>>>>>>> Stashed changes

    if(blockLeft + blockWidth < 0) {
        block.remove();
    };
};

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    newColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    return newColor;
}

function blockProperties () {
const block = document.getElementById('block')

//Variables to set random value of 0-1, multiply by 300 set to 0-300. Add 75 to set a maximum
//height of 75px from top of play area. Also set random width of each block.
let randomTop = parseInt((Math.random()*300)+75);
let randomWide = parseInt((Math.random()*100)+40);
//sets limit for block size, to 345px. Block will always be larger than player. 
if (randomTop >= 345) {
    randomTop = 345;
};
block.style.animation = "block";
block.style.animationDuration = "5s";
block.style.animationDelay = "2s";
block.style.animationTimingFunction = "linear";
block.style.animationIterationCount = "infinite";
block.style.border= "1px solid black";
block.style.backgroundColor = randomColor();
block.style.top = randomTop + "px";
block.style.width = randomWide + "px";
};

function animationStart(){
    createBlock();
    blockProperties();
    block.addEventListener('animationstart',(e) => {
        restartPlayerScore = 0;
        score.textContent = restartScore();
        block.style.animationDelay = "2s";
    });
    if (hitPlayer()){
        return
    };
    removeBlock();
};

function animationCycle(){
    // Repeats the steps to create random height and width blocks with random colors 
    createBlock();
   block.addEventListener('animationiteration', () => {
        blockProperties();
        updateSpeed()
        // block.style.animationDelay = "0s";
        score.textContent = updateScore();
        highScore.textContent = "High Score: " + updateHighScore();
        if (hitPlayer()) {
            return
        }
        removeBlock();
    });
};


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


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
        playerJump()    
        
    }
})

document.getElementById('block-game').addEventListener("click", (e) => {
    playerJump();
})

//Resets player score to 0 after game over.
function restartScore () {
    // gameStart;
    return "Current Score: " + restartPlayerScore;
}

function updateScore() {
    // blockSlider;
    restartPlayerScore++;
    return "Current Score: " + restartPlayerScore};

function updateHighScore () {
    if (newHighScore <= restartPlayerScore) {
        newHighScore = restartPlayerScore;
    };
        return newHighScore};


 function updateSpeed() {
     let currentSpeed = parseFloat(window.getComputedStyle(block).getPropertyValue("animation-duration"));
     let checkSpeed = restartPlayerScore%5;
     // console.log("current: " + restartPlayerScore + " check: " + checkSpeed);
     if ((checkSpeed == 0) && (currentSpeed > 1))  {
         let newSpeed = ((currentSpeed - 0.2) + 's');
         console.log("current: " + restartPlayerScore + " check: " + checkSpeed + " change: " + newSpeed)
         return newSpeed};
     console.log("current: " + restartPlayerScore + " check: " + checkSpeed)
    //  blockSlider;
 };



//Collision detection based on object edge locations
function hitPlayer() {
        setInterval(function() {
             const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
             const blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"));
            //  const blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
             const blockBottom = parseInt(window.getComputedStyle(block).getPropertyValue("bottom"));
            //  const blockWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"));
             const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
            //  const playerRight = parseInt(window.getComputedStyle(player).getPropertyValue("right"));
            //  const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
             const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
            //  const playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"));

            //  console.log("block left " + blockLeft + "; " + "block right " + blockRight + "; "  + "block bottom " + blockBottom + "; " + "block top " + blockTop + "; " + "block width " + blockWidth);
       
            //  console.log("player left " + playerLeft + "; " + "player right " + playerRight + "; " + "player bottom " + playerBottom + "; " + "player top " + playerTop + "; " + "player width " + playerWidth);

        
             if ((playerBottom <= (blockBottom + 400)) && (((blockLeft <= playerLeft + 40) && (blockRight <= 720)) || ((blockLeft <= playerLeft + 40) && (blockRight >= 720) && (blockRight <= 760)))) {
                    gameOver();
                
                };             
            },2)};
        
        function gameOver(){
            block.style.animation = "none";
            updateHighScore();
            alert('you lose');
            removeBlock();
            button.classList.remove('hidden');
            button.classList.add('active');
            button.textContent = "Restart";
            blockGame.removeChild(block);

        }
        
        };