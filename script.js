const block = document.getElementById('block');
const player = document.getElementById('player');

// const hole = document.getElementById('hole');

block.addEventListener('animationiteration', () => {
    const randomBottom = parseInt(-(Math.random()*300)-50);
    const randomWide = parseInt(Math.random()*100)+40;
    block.style.bottom = randomBottom + "px";
    block.style.width = randomWide + "px";
    block.textContent = randomBottom + "px";
    block.style.fontSize = "20px";
});



setInterval(function(){
        const charTop = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
        player.style.bottom = (charTop - 3) + "px";
},10);

function playerJump(){
        const jump = player.style.bottom.replace('px','')
        const playerJump = parseInt(jump, 10)
        player.style.bottom = `${playerJump + 50}px`;
}''



document.addEventListener("keydown", function (e){
    if (e.key === "ArrowUp") {
        playerJump()    
    }
})