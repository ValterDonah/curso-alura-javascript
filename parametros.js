// parâmetros de função

function soma(a = 0, b = 0){
    return a + b;
}

console.log(soma(1, 2))
console.log(soma(30, 54))
console.log(soma(10, -2))

// ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e minha idade é ${idade}.`
}

console.log(nomeIdade('10', 'Sheik'))
console.log(nomeIdade('Sheik', '10'))

function multiplica(a = 1, b = 1) {
    return a * b;
}

console.log(multiplica(soma(3, 4), soma(2, 1)))
console.log(multiplica(soma(3, 4)))