function verificaTipoDeDado(dado){
    if(typeof dado === 'string'){
        console.log("Este tipo de dado é uma string")
    }else if(typeof dado === 'number'){
        console.log("Este tipo de dado é um number")
    }else if(typeof dado === 'boolean'){
        console.log("Este tipo de dado é um boolean")
    }
}

verificaTipoDeDado('asd')
verificaTipoDeDado(false)
verificaTipoDeDado(15)