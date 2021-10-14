/* Exe 01

Crie um objeto com 3 propriedades;
A primeira deve ser uma string, a segunda um number e a terceira um boolean; */
 
console.log('--------EX 1---------');

let Shinobi = {
    nome: 'Naruto Uzumaki',
    shurikens: 18,
    nivelGenin: true
}

console.log(Shinobi);

/* Exe02

Crie um objeto Pessoa, que tem uma propriedade nome;
Crie um método que exibe o nome do objeto Pessoa; */
 

console.log('--------EX 2---------');

let pessoa = {
    nome: 'Jonatas',

    exibirNome(){
        console.log(this.nome);
    }
}

pessoa.exibirNome();

/* Exe03

Crie um objeto Ninja, por constructor function;
Com a propriedade de nome do ninja e o método atirarShuriken; */
 
console.log('--------EX 3---------');

function Ninja(nome, shuriken){
    this.nome = nome;
    this.shuriken = shuriken;

    this.atirarShuriken = function(){

        if (this.shuriken >= 1) {
            this.shuriken = this.shuriken - 1;
        } else {
            console.log(this.nome + " não tem mais Shuriken!!");
        }
    }

    this.exibirQuantidade = function(){
        console.log('Resta(m): ' + this.shuriken + " Suriken(s)");
    }
}

let naruto = new Ninja('Naruto', 5);
let sakura = new Ninja('Sakura', 12)

console.log(naruto);
console.log(sakura);

/* Exe04

No objeto ninja que a propriedade shuriken, com uma quantidade de estrelas ninjas;
A cada método do disparo subtraia uma;
O ninja não pode jogar mais shurikens caso elas tenham acabado; */
 
console.log('--------EX 4---------');

console.log(naruto);
console.log(sakura);

naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.exibirQuantidade();

/* Exe05

Crie um objeto Inimigo, com as propriedades nome e vivo (que é um boolean e inicie como true);
O método atirarShuriken do exercício passado deve ‘matar’ o Inimigo, setando a propriedade do Inimigo vivo como false; */
 
console.log('--------EX 5---------');

function Inimigo(nome, vivo){
    this.nome = nome;
    this.vivo = vivo;

    this.exibirInimigo = function(){
        if (this.vivo == false) {
            console.log(this.nome + " está morto");
        } else {
            console.log(this.nome +" está Vivo");
        }     
    }
}

let Zabuza = new Inimigo('Zabuza Momochi', true);
console.log(Zabuza);
sakura.atirarShuriken();
sakura.atirarShuriken();
sakura.atirarShuriken();
sakura.exibirQuantidade();
if (sakura.shuriken < 10) {
    Zabuza.vivo = false;
}
Zabuza.exibirInimigo();
console.log(Zabuza);

/* Exe06 (instaceof)

Crie uma função que retorna se o objeto é uma instância de outro objeto;
Deve apresentar no console as mensagens de positivo e negativo; */
 
console.log('--------EX 6---------');

function Objeto(nome){
    this.nome;
}

function outroOnjeto(nome){
    this.nome;
}

let objeto = new Objeto("nomedoObjeto");

let notObjeto = new outroOnjeto("nome");

console.log(notObjeto instanceof Objeto);