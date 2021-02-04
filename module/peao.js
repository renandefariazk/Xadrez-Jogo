export default class Peao{
    constructor(){
        this.letrasColunas = ['a','b','c','d','e','f','g','h'];
        this.numeroLinha = ['1','2','3','4','5','6','7','8']
    }
    localColuna(element){
        // console.log('coluna',element.path[1].attributes[1].value)//pegar a letra da coluna
        // console.log('segundo maneira de fazer',element.path[1].dataset.local)
        const coluna = element.path[1].attributes[1].value;
        return coluna

    }
    localLinha(element){
        // console.log('linha',element.path[2].attributes[1].value)//pegar o numero da linha
        // console.log('segundo maneira de fazer',element.path[2].dataset.local)
        const linha = element.path[2].attributes[1].value;
        return linha
    }
    localMove(element){
        // console.log(this.letrasColunas.indexOf(this.localColuna(element))); //mapear as casas proximas
        // console.log(this.numeroLinha.indexOf(this.localLinha(element))); //mapear as casa proximas
        this.casasMove(element)
    }
    casasMove(element){
        if(element.target.classList.contains('first')){
            if(element.target.classList.contains('preto')){
                this.futuraColuna = this.letrasColunas.indexOf(this.localColuna(element));
                this.futuraLinha = [this.numeroLinha.indexOf(this.localLinha(element)),
                    this.numeroLinha.indexOf(this.localLinha(element)) -1]; //um a mais por causa do 0
            }else{
                this.futuraColuna = this.letrasColunas.indexOf(this.localColuna(element));
                this.futuraLinha = [this.numeroLinha.indexOf(this.localLinha(element)) + 2,
                    this.numeroLinha.indexOf(this.localLinha(element)) + 3];
            }
            this.linhaMove = [document.querySelector(`div[data-local="${this.futuraLinha[0]}"]`),
                document.querySelector(`div[data-local="${this.futuraLinha[1]}"]`)];
        }
        else{
            if(element.target.classList.contains('preto')){
                this.futuraColuna = this.letrasColunas.indexOf(this.localColuna(element));
                this.futuraLinha = [this.numeroLinha.indexOf(this.localLinha(element))]; //um a mais por causa do 0
            }else{
                this.futuraColuna = this.letrasColunas.indexOf(this.localColuna(element));
                this.futuraLinha = [this.numeroLinha.indexOf(this.localLinha(element)) + 2];
            }
            this.linhaMove = [document.querySelector(`div[data-local="${this.futuraLinha[0]}"]`)];
        }
        //inserir uma condição se existir
        const pecaMove = element.target;
        // const linhaMove = [document.querySelector(`div[data-local="${this.futuraLinha[0]}"]`),
        // document.querySelector(`div[data-local="${this.futuraLinha[1]}"]`)];

        for(let i = 0; i < this.linhaMove.length; i++){
            const futuraCasa = Array.from(this.linhaMove[i].children)[this.futuraColuna];//casa a frente
            console.log(futuraCasa) // 
            Array.from(this.linhaMove[i].children).forEach((element)=>{
                if(element == futuraCasa){
                    element.classList.add('casaMove');
                    element.addEventListener('click',(element)=>{
                        element.preventDefault();
                        if(element.target.classList.contains('casaMove')){ //mover apenas casa open
                            element.target.appendChild(pecaMove);
                            pecaMove.classList.remove('first');
                        }else{
                            console.log('outro') //se click em outra pessa apenas tirar a class Move
                        }
                        const todosMoves = document.querySelectorAll('.casaMove');
                        todosMoves.forEach((element)=>{
                            element.classList.remove('casaMove');
                        })
                    })
                }else{
                    // exception
                }
            })
        }
    }
    init(element){ //pegar o elemento da interação do click
        this.localMove(element);
    }
    
}