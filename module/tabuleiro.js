export default class Tabuleiro{
    constructor(){
        this.letrasColunas = ['a','b','c','d','e','f','g','h'];
        this.numeroLinha = ['1','2','3','4','5','6','7','8']
    }
    criarCubo(linha) {
        for(let i = 0; i <= 7; i++) {
           const quadrado = document.createElement('div');
           quadrado.classList.add('quadrado');
           quadrado.dataset.local = this.letrasColunas[i]; //tentando nomear as colunas
           linha.appendChild(quadrado)
        };
    }
    criarLinha(){
        for(let i = 0; i <= 7; i++){
            const linha = document.createElement('div');
            linha.classList.add('linha');
            linha.dataset.local = this.numeroLinha[i];
            this.criarCubo(linha);
            const tabuleiro = document.querySelector('.tabuleiro');
            tabuleiro.appendChild(linha);
            this.ImparPar();

        }
    }
    ImparPar(){
        const linhaAll = document.querySelectorAll('.linha');
        linhaAll.forEach((iten,index)=>{
            if(index%2 == 0){
                iten.classList.add('par');
                Array.from(iten.children).forEach((iten,index)=>{
                    if(index%2 != 0){
                        iten.classList.add('ativo');
                    }
                })
            }else{
                Array.from(iten.children).forEach((iten,index)=>{
                    if(index%2 == 0){
                        iten.classList.add('ativo');
                    }
                })
            } 
        })
    }
    init(){
        this.criarLinha();
    }
}