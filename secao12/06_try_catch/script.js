// let b = 2;

try{

let a = 2 + b;

}catch(err){
    console.log(err); //Não para o código
    throw new Error(err); //Para o código
}

console.log('Teste');