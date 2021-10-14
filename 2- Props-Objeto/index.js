let carro = {
    porta: 4,
    cor: 'preta'
}

console.log(carro.cor);
console.log(carro.porta);

if(carro.porta > 2){
    console.log('Carro mais Caro')
}

let pessoa = {
    nome: 'Jeniffer',
    idade: 27
}

if (pessoa.idade >= 18) {
    console.log(pessoa.nome + ' é Maior de idade');
} else {
    console.log(pessoa.nome + ' é Menor de idade');
}

let nomePessoa = pessoa.nome;

console.log(pessoa.nome.length); //mostra o tamanho
console.log(nomePessoa.length);
