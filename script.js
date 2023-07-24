/* para pegarmos um seletor do html usaremos "querySelector()" para pegarmos a classe do mario para pegarmos a imagem do mario*/
const mario = document.querySelector('.mario');
/* para pegarmos um seletor do html usaremos "querySelector()" para pegarmos a classe pipe para pegarmos a imagem do tubo*/
const pipe = document.querySelector('.pipe');
/*função jump*/
const jump = ()=>{
    mario.classList.add('jump')/*acessamos a classe mario e iremos adcionar uma nova classe à classe do mario, será a classe jump, isso fará com que a imagem mario agora também tenha a animação de saltar*/
    setTimeout(()=>{
        mario.classList.remove('jump');/*remove a classe antes adicionada*/
    }, 500);
}
document.addEventListener('keydown', jump)/* adicionando um escutador de eventos, o addEventListener, por meio dele é possível detectar um evevento, acima ele dectará o evento pressionar uma tecla, adicionamos uma função a jump, que será acionada ao tocar em uma tecla*/

/*loop para verificar se o mario perdeu ou não perdeu: */
const loop = setInterval(()=>{
    /*é adicionada uma função anomnima e um tempo*/
    const pipeposition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')
    if(pipeposition<= 120 && pipeposition > 0 && marioPosition < 80){/*se a posição da imagem menor ou igual 120px para a nimação*/
        pipe.style.animation = 'none';
        pipe.style.offsetLeft = '${pipePosition}px';
        mario.style.animation = 'none';
        mario.style.offsetLeft = '${marioPosition}px';
        mario.src='imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';
        clearInterval(loop);/*para encerrar o loop ao perder*/
    }
}, 10);
