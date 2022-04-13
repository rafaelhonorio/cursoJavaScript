const reg1 = /[12345]/

console.log(reg1.test("temos o número 6"));
console.log(reg1.test("temos o número 2"));
console.log(reg1.test("temos o número 23"));
console.log(reg1.test("temos o número 60"));

const reg2 = /[0-9]/

console.log(reg1.test("Temos o número 1837031695375835123"));
console.log(reg1.test("Temos o número"));