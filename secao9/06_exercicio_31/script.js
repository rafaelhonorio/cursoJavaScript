let array = [1,2,3,4,5,6]
let array1 = [1,2,3,4]

function verificaElementosArray(arr){
    if(arr.length >= 5){
        console.log("Muitos Elementos")
    }else{
        console.log("Poucos Elementos")
    }
}

verificaElementosArray(array)
verificaElementosArray(array1)