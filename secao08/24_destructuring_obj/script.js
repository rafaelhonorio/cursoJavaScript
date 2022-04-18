let obj = {
    rodas: 4,
    portas: 4,
    tetosolar: true,
    motor: '2.0'
}
/*
Para desestruturar o objeto é necessário receber ele com um "="
e colocar ":" entre a variavel dentro do objeto e a variavel que é necessária para a desestruturação
*/
const {rodas: vRodas, portas: vPortas, tetosolar: vTetoSolar, motor: vMotor} =  obj

console.log(vRodas)
console.log(vPortas)