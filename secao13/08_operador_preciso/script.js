const cep = /\d{5}-\d{3}/;

console.log(cep.test("88117-500"));
console.log(cep.test("asd"));
console.log(cep.test("881-50"));
console.log(cep.test("99999-999"));

const cel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(cel.test("(61)9999-9999"));
console.log(cep.test("(21)55555-5555"));