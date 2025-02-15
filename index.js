scores = 0;
cross = true;
document.onkeydown = function (e) {
    if (e.key === "ArrowUp") {
        jumpaudio.play();
        dino = document.querySelector('.car');
        dino.classList.add('Animatedino');
        setTimeout(() => {
            dino.classList.remove('Animatedino')
        }, 1000);
    }
    if (e.key === "ArrowRight") {
        dino = document.querySelector('.car');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinox + 100 + 'px'
    }
    if (e.key === "ArrowLeft") {
        dino = document.querySelector('.car');
        dinox = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinox - 100) + 'px'
    }
}

setInterval(() => {
    dino = document.querySelector('.car')
    gameover = document.querySelector('.gameover')
    danger = document.querySelector('.danger')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'));

    ox = parseInt(window.getComputedStyle(danger, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(danger, null).getPropertyValue('bottom'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 110 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        danger.classList.remove('Animationdanger')
        startaudio.pause();
        overaudio.play();
        danger.style.display='none';
    }
    else if (offsetX < 140 && cross) {
        scores += 1;
        updatescore(scores)
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000)
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(danger, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.3;
            danger.style.animationDuration = newdur + 's'
        }, 5000)

    }

}, 100)

function updatescore(scores) {
    score.innerHTML = "Your Score :" + scores
}

startaudio=new Audio("01. Above Ground BGM.mp3");
jumpaudio=new Audio("jump-15984.mp3");
overaudio=new Audio("smb_gameover.wav");
startaudio.play();
setTimeout(()=>{
    startaudio.play();
},1000)