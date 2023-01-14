const primeiroNumero = 5;
const segundoNumero = 10;

console.log(primeiroNumero == segundoNumero)
console.log(primeiroNumero === segundoNumero)
console.log(primeiroNumero != segundoNumero)
console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero < segundoNumero)

let cadastroAtivado = true;

const texto01 = "Alura";
const texto02 = "alura";

console.log("Sem toLowerCase: ")
console.log(texto01 === texto02)
console.log("Com toLowerCase: ")
console.log(texto01.toLowerCase() === texto02.toLowerCase())

// tipos null e undefined

let input = null;

if (input === null) {
    console.log('não há informação');
} else {
    console.log(input);
}

let input02 = null;
let input03;

console.log(input02);
console.log(input03);

console.log(null == undefined); // true
console.log(null === undefined); // false