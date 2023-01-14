// tipe Number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica)

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

console.log(numeroPontoFlutuante)
console.log(pontoFlutuanteSemZero)

const novaOpeeracao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOpeeracao)
console.log("Arredondando com Math.round: " + Math.round(novaOpeeracao))
console.log("Arredondando com toFixed: " + novaOpeeracao.toFixed(3))
console.log("Usando o método toLocaleString() - em R$: " + novaOpeeracao.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'}));

// NaN -> Not A Number

const alura = "Alura";
console.log(alura * primeiroNumero)

// divisão por zero

var a = 10
var b = 0
console.log(a/b) // Infinity

var a = 0
var b = 0
console.log(a/b) // NaN


