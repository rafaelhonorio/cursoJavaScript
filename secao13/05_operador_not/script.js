const notab = /[^ab]/

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const nottoaz = /[^a-z]/

console.log(nottoaz.test("123 as"));
console.log(nottoaz.test("dsafiodsfiaodsufiaosdfua"));

const az = /[a-z]/;

console.log(az.test("12332audfiusdhfu"))