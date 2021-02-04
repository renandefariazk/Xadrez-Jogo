export default class Posicao{
    constructor(){

    }
    peao(){
        for(let i = 0; i <= 7; i++){
            const peao1 = document.createElement('div');
            const peao2 = document.createElement('div');
            peao1.classList.add('peao');
            peao1.classList.add('branco');
            peao1.classList.add('first'); // adicionar uma class como primeira jogada
            peao2.classList.add('peao');
            peao2.classList.add('preto'); 
            peao2.classList.add('first'); // adicionar uma class como primeira jogada
            const linha = document.querySelectorAll('.linha'); //talvez constructor
            linha[1].children[i].appendChild(peao1)
            linha[6].children[i].appendChild(peao2)
        }
    }
    pecasAltas(){
        const ordem = ['tower','bispo','cavalo','rei','rainha','cavalo','bispo','tower'];
        const ordem2 = ['tower','bispo','cavalo','rainha','rei','cavalo','bispo','tower'];
        ordem.forEach((iten,index)=>{
            const peca = document.createElement('div');
            peca.classList.add(iten);
            peca.classList.add('branco');
            const linha = document.querySelectorAll('.linha'); //talvez constructor
            linha[0].children[index].appendChild(peca)
        })
        ordem2.forEach((iten,index)=>{
            const peca = document.createElement('div');
            peca.classList.add(iten);
            peca.classList.add('preto');
            const linha = document.querySelectorAll('.linha'); //talvez constructor
            linha[7].children[index].appendChild(peca)
        })
    }
    init(){
        this.peao();
        this.pecasAltas();
    }
}