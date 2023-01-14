const texto01 = "Olá, mundo!";
const texto02 = "Olá, mundo!";
const senha = "senhaSuperSegura456!";
const stringDeNumeros = "34567";

const citacao = 'Meu nome é ';
const meuNome = "Valter";

// concatenação (+)

console.log(citacao + meuNome + "!")

// template string Ou template literal

// Codificação de strings

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// Trabalhando com strings

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade02 = "belo horizonte";
const input02 = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

const senha02 = "minhaSenha123"
console.log(senha02.length) // 13 caracteres
