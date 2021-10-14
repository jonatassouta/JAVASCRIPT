function Pessoa(nome, granada){
    this.nome = nome
    this.granada = granada

    this.atiraGranada = function()   {
        this.granada = this.granada - 1;
    }
    this.exibirQtdGranadas = function() {
        console.log("Resta(m) "+ this.granada);
    }
}

let jogador1 = new Pessoa('Jonatas', 10);
let jogador2 = new Pessoa('Ricardo', 10);

console.log(jogador1);
console.log(jogador2);

jogador1.exibirQtdGranadas();
jogador1.atiraGranada();
jogador1.exibirQtdGranadas();