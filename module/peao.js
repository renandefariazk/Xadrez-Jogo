export default class Peao{
    constructor(){
        this.letrasColunas = ['a','b','c','d','e','f','g','h'];
        this.numeroLinha = ['1','2','3','4','5','6','7','8']
    }
    localColuna(element){
        console.log('coluna',element.path[1].attributes[1].value)//pegar a letra da coluna
        // console.log('segundo maneira de fazer',element.path[1].dataset.local)
        const coluna = element.path[1].attributes[1].value;
        return coluna

    }
    localLinha(element){
        console.log('linha',element.path[2].attributes[1].value)//pegar o numero da linha
        // console.log('segundo maneira de fazer',element.path[2].dataset.local)
        const linha = element.path[2].attributes[1].value;
        return linha
    }
    localMove(element){
        console.log(this.letrasColunas.indexOf(this.localColuna(element))); //mapear as casas proximas
        console.log(this.numeroLinha.indexOf(this.localLinha(element))); //mapear as casa proximas
    }
    init(element){ //pegar o elemento da interação do click
        this.localMove(element);
    }
    
}