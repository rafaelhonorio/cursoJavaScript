function lembrarSoma(x) {
    return function(x){
        return x + y 
    }
}

let soma1 = lembrarSoma(2)

console.log(soma1(5))

let soma2 = lembrarSoma(7)

console.log(soma2(5))

function contador(){
    let cont = i 
    let somarContador = function(){
        console.log(cont)
        cont++
    }
    return somarContador
}

let meuContador = contador(5)
meuContador()
meuContador()
meuContador()
meuContador()
meuContador()

let meuContador2 = contador(1)
meuContador2()
meuContador2()
meuContador2()
meuContador2()