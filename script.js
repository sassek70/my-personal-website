const block = document.getElementById('block');
const player = document.getElementById('player');
const score = document.getElementById('score');
let playerScore = 0;
score.textContent = playerScore + " points";

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    newColor = "rgb(" + red + "," + green + "," + blue + ")"; 
    return newColor;
}

// Sets initial block to match animation values, otherwise first block will be one solid block for the 
// entire play area height.
block.addEventListener('animationstart',(e) => {
    const randomTop = parseInt((Math.random()*300)+75);
    const randomWide = parseInt(Math.random()*100)+40;
    let playerScoreNew = playerScore++;

    if (randomTop >= 345) {
        randomTop = 345;
    }
    
    score.textContent = playerScoreNew + " points";
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
    //height of 75px from top of play area
    let randomTop = parseInt((Math.random()*300)+75);
    let randomWide = parseInt(Math.random()*100)+40; //same method for height, but sets block width

    //sets limit for block size, to 345px. Block will always be larger than player. 
    if (randomTop >= 345) {
        randomTop = 345;
    }
    
    score.textContent = playerScore++ + " points";
    block.style.backgroundColor = randomColor();
    block.style.top = randomTop + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomTop + "px";
    block.style.fontSize = "20px";
    hitPlayer();
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


function updateScore() {
    block.addEventListener('animationstart'), () => {
    let playerScoreNew = playerScore++;
    score.textContent = playerScoreNew + " points";
};
    blockSlider;
};

function hitPlayer() {
        setInterval(function() {
             const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
             const blockRight = parseInt(window.getComputedStyle(block).getPropertyValue("right"))
             const blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"))
             const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"))
             const playerRight = parseInt(window.getComputedStyle(player).getPropertyValue("right"))
             const playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
             const blockWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))
             const playerWidth = parseInt(window.getComputedStyle(player).getPropertyValue("width"))

             console.log("block left " + blockLeft)
             console.log("player right " + playerRight)
             console.log("block right " + blockRight)
             console.log("player left " + playerLeft);
             console.log("block top " + blockTop);
             console.log("player bottom " + playerBottom);

            
             if ((playerBottom <= blockTop) && (blockLeft <= playerLeft) && (blockWidth >= playerWidth)) {
                block.style.animation = "none";
                    alert('you lose')};
                
                
            },2)};
            
           
