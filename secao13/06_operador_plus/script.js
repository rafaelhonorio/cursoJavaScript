const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("asdfdasas"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("151289873483071431218"));