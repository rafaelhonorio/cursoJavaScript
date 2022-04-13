const reg1 = new RegExp('bola');

console.log(reg1.test('Tem bola?'));
console.log(reg1.test('não tem'));

const reg2 = /bola/;

let text = 'tem bola na cesta';

console.log(reg2.test('tem bola?'));
console.log(reg2.test('não tem'));
console.log(reg2.test(text));

console.log(/quadrado/.test('Onde tem um quadrado'));
console.log(/quadrado/.test('4391289013284901348910quadrado4371983471893246912356972'));