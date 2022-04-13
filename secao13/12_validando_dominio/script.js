const validaDominio = /[?www.] \w+\.com.br|.com/;

console.log(validaDominio.test("www.amassaoscaras.com.br")); //True
console.log(validaDominio.test("www.amassaoscaras.com"));  //True
console.log(validaDominio.test("amassaoscaras.com.br"));  //True
console.log(validaDominio.test("www.amassaoscaras")); //False