// "=="" comparacao implícita

const numero = 5;
const texto = '5';

console.log(numero == texto);
console.log(numero === texto);
console.log(numero === Number(texto));


// == só compara o valor
// === compara o valor e o tipo de dado