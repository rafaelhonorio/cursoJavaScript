function recebeString(texto){
    if(texto.length > 10){
        console.log("Texto muito longo")
    }else{
        console.log("Texto dentro do limite")
    }
}

recebeString('texto')
recebeString('limite')
recebeString('texto muito grande')