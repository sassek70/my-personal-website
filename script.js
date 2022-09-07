const block = document.getElementById('block');
const player = document.getElementById('player');
const score = document.getElementById('score');
const highScore = document.getElementById('highScore')
let playerScore = 0;
let restartPlayerScore = 0;
let newHighScore = 0;
score.textContent = "Current Score: " + playerScore;
highScore.textContent = "High Score: " + newHighScore ;

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    newColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    return newColor;
}

// Sets initial block to match animation values, otherwise first block will be one solid block for the 
// entire play area height.
const gameStart = block.addEventListener('animationstart',(e) => {
    restartPlayerScore = 0;
    score.textContent = restartScore();
    let randomTop = parseInt((Math.random()*300)+75);
    let randomWide = parseInt((Math.random()*100)+40);
    block.style.animationDelay = "2s";
    
    if (randomTop >= 345) {
       randomTop = 345;
    }
    
    block.style.backgroundColor = randomColor();
    block.style.top = randomTop + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomTop + "px";
    block.style.fontSize = "20px";
    hitPlayer();
    blockSlider;
});

// Repeats the steps to create random height and width blocks with random colors 
const blockSlider = block.addEventListener('animationiteration', () => {
    
    //Variables to set random value of 0-1, multiply by 300 set to 0-300. Add 75 to set a maximum
    //height of 75px from top of play area. Also set random width of each block.
    let randomTop = parseInt((Math.random()*300)+75);
    let randomWide = parseInt((Math.random()*100)+70);
    
    //sets limit for block size, to 345px. Block will always be larger than player. 
    if (randomTop >= 345) {
        randomTop = 345;
    }
    
    block.style.backgroundColor = randomColor();
    block.style.top = randomTop + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomTop + "px";
    block.style.fontSize = "20px";
    hitPlayer();
    score.textContent = updateScore();
    highScore.textContent = "High Score: " + updateHighScore();
});


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

//Resets player score to 0 after game over.
function restartScore () {
    gameStart;
    return "Current Score: " + restartPlayerScore;
}

function updateScore() {
    blockSlider;
    restartPlayerScore++;
    return "Current Score: " + restartPlayerScore};

function updateHighScore () {
    if (newHighScore <= restartPlayerScore) {
        newHighScore = restartPlayerScore;
    };
        return newHighScore};


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

        
             if ((playerBottom <= (blockBottom + 400)) && (blockLeft <= playerLeft) && (blockRight <= 720)) {
                block.style.animation = "none";
                    updateHighScore();
                    alert('you lose');
                    gameStart;
                    block.style.animation = "block 5s infinite linear"
                };                
            },2)};
