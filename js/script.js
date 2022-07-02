const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')

const jump = (e) => {
    /* Alternative to e.key */
    if (e.code === 'Space') {
        mario.classList.add('jump');

        console.log('Keydown!')

        //setTimeout(funcao, tempo)
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}
const loop = setInterval(pipeAnimation, 10);

function pipeAnimation(){
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    // Esse + converte a stirng para numero, poderia usar um Number() ou algo assim

    //console.log(pipePosition);

    if(pipePosition <= 120 && marioPosition < 80 && pipePosition > 0){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        /* Para quando bate no mario */

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './images/game-over.png'
        mario.style.width = "75px";
        mario.style.marginLeft = '50px';

        clearInterval(loop); //loop para de rodar depois que acaba game
        clearInterval(interval);
    }
}

function resetGame(e) {
    if (e.key === 'Escape') {
        /*pipe.style.left = "";
        pipe.style.right = '-80px';
        pipe.style.animation = 'pipe-animation 1.5s infinite linear';
        mario.src = './images/mario.gif'
        mario.style.width = "150px";
        mario.style.marginLeft = '0';
        mario.style.animation = "";
        mario.style.bottom = '0';
        score.innerText = "0";
        score_counter = 0;
        score.innerText.innerText = '0';
        const loop = setInterval(pipeAnimation, 10);
        */
        /* More straightforward method: Reseting windows*/
        window.location.reload();
    }
};

document.addEventListener('keydown', jump);

document.addEventListener('keydown', resetGame);

var start = new Date().getTime(),
    score_counter = '0.1';

var interval = window.setInterval(function() {
  var time = new Date().getTime() - start;

  score_counter = Math.floor(time / 100);

  score.innerText = score_counter;
}, 100);

