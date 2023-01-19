function apresentar(nome){
    return `Meu nome é ${nome}.`
}

// Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if(num1 > 10 || num2 > 10) {
        return "Somente números menores de 9!";
    } else {
        return num1 + num2;
    }
}

console.log(apresentar("Thor"))
console.log(apresentarArrow("Sheik"))
console.log(somaNumerosPequenos(15, 3))
console.log(somaNumerosPequenos(3, 5))