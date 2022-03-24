const calculadora = {
    soma: function(a,b){
        return a + b
    },
    subtrair: function(a,b){
        return a - b
    },
    multiplicacao: function(a,b){
        return a * b
    },
    dividir: function(a,b){
        return a / b
    }
}

console.log(calculadora.somar(1,2))
console.log(calculadora.subtrair(1,2))
console.log(calculadora.multiplicar(2,2))
console.log(calculadora.dividir(4,4))