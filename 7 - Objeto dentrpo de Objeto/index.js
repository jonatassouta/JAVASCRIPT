let pessoa = {
    nome:'Jeniffer',
    idade: 27,

    falar: function(){//javascript puro
        console.log('Me chamo: '+ this.nome);
    },

    minhaIdade(){ // é a mesma coisa que "minhaIdade: function()", ecmascript
        console.log('Minha idade atual: ' + this.idade);
    },

    aniversario(){
        this.idade += 1; //idade = idade + 1
    },

    podeDirigir(){
        if (this.idade >= 18) {
            console.log("Pode dirigir");
        }else {
            console.log("Ainda não pode dirigir");
        }
    },

    caracteristicas: {//outro onjeto, se declara com 2 pontos
        cnh: true,
        carteira: ['dinheiro', 'moeda', 'crlv']
    }
}

pessoa.falar();
pessoa.minhaIdade();
pessoa.aniversario();
pessoa.minhaIdade();
pessoa.podeDirigir();

console.log(pessoa.caracteristicas.carteira[0]);
