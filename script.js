const block = document.getElementById('block');
const player = document.getElementById('player');

// const hole = document.getElementById('hole');

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
    let randomTop = parseInt((Math.random()*300)+75);
    const randomWide = parseInt(Math.random()*100)+40;
    
    if (randomTop >= 345) {
        randomTop = 345;
    }
    
    block.style.backgroundColor = randomColor();
    block.style.top = randomTop + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomTop + "px";
    block.style.fontSize = "20px";
    console.log("initial top " + randomTop)
    // collision();
    blockSlider;
});

// Repeats the steps to create random height and width blocks with random colors 
const blockSlider = block.addEventListener('animationiteration', () => {
    
    //Variables to set random value of 0-1, multiply by 300 set to 0-300. Add 75 to set a maximum
    //height of 75px from top of play area
    let randomTop = parseInt((Math.random()*300)+75);
    let randomWide = parseInt(Math.random()*100)+40; //same method for height, but sets block width
    // setInterval(function(){
    //     const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    //     block.style.left = (blockLeft - 50) + "px";
    // },15);
    
    
    //sets limit for block size, to 345px. Block will always be larger than player. 
    if (randomTop >= 345) {
        randomTop = 345;
    }
    
    block.style.backgroundColor = randomColor();
    block.style.top = randomTop + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomTop + "px";
    block.style.fontSize = "20px";
    // collision();
    console.log("random top: " + randomTop)
    console.log("block left: " + block.style.left)
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
        player.style.bottom = `${playerJump + 50}px`;
}

document.addEventListener("keydown", function (e){
    if (e.key === "ArrowUp") {
        playerJump()    
        
    }
})


// for (let score = 0; block.addEventListener('animationiteration', ()=> {});


// function collision(){
//     if (
//         block.style.left <= 40
//         // player.style.bottom <= block.style.top
//         ){
//         // player.y + player.height >= block.y ||
//         // player.y <= block.y + block.height) 
//         alert("you lose")
//     };
// };