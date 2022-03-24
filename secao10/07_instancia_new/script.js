function criaCachorro(raca,patas,cor){
    this.raca = raca;
    this.patas = patas;
    this.cor = cor;
    this.uivar = function(){
        console.log("Auuuuu");
    }
}

let husky = new criaCachorro('Husky', 4, 'cinza');

husky.uivar();