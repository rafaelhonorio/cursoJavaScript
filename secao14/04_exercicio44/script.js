const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("8.8.8.8"));
console.log(validaIP.test("192.168.0.62"))
console.log(validaIP.test("8"));
console.log(validaIP.test("192.168"))
console.log(validaIP.test("8.8.8.8.8.8.8"));
console.log(validaIP.test("19216062"))