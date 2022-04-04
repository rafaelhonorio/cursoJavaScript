function checarNumero(num){
    let number = Number(number);
    if(Number.isNaN(number)){
        console.log("Por faovr, passe só números para o programa");
    }else{
        return number;
    }
}

checarNumero(3);
checarNumero("sadh");

let number = prompt("Digite um número");

checarNumero(number);