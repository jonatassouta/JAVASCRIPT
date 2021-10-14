/* let nome = prompt("Digite o seu nome")
console.log(nome);

let valor = parseFloat(prompt("Digite a idade"));
console.log(typeof(valor)); */

let jogador = {
    classe: 'profissional',
    arma: 'faca',
    qtd: 10,
    
    lancarFaca(){
        this.qtd -= 1;
    },

    exibirQtdGranada(){
        console.log("Resta(m): " + this.qtd)
    }
}

let jogador2 = {
    classe: 'profissional',
    arma: 'faca',
    qtd: 10,
}

jogador.exibirQtdGranada();
jogador.lancarFaca();
/* jogador2.lancarFaca();
jogador2.lancarFaca(); */
jogador.lancarFaca();
jogador.lancarFaca();
jogador.lancarFaca();
jogador.exibirQtdGranada();