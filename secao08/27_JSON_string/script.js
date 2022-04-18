let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video Game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa)

console.log(pessoaTexto)
// console.log(pessoaTexto.nome) Printa Undefined afinal o array não consegue ler o .nome, pq isso é apenas para JSON.

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)
console.log(pessoaJSON.hobbies[0])