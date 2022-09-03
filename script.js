const block = document.getElementById('block');
// const hole = document.getElementById('hole');

block.addEventListener('animationiteration', () => {
    const random = parseInt(-(Math.random()*300)-50);
    block.style.bottom = random + "px";
    block.textContent = random + "px";
    block.style.fontSize = "20px";
});