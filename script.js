import Tabuleiro from './module/tabuleiro.js';
import Posicao from './module/posicaoInit.js';
import Peao from './module/peao.js';

const tabuleiro = new Tabuleiro();
tabuleiro.init();

const posicao = new Posicao();
posicao.init();

const peao = new Peao();
const peaoAll = document.querySelectorAll('.peao');
peaoAll.forEach((iten)=>{
    iten.addEventListener('click',(element)=>{
        peao.init(element);
    })
})

