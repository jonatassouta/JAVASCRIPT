/* let a=10;
console.log(a*a);

function quadrado(numero){
    return numero * numero;
}

console.log(quadrado(5));

//nova Classe (object)
let pessoa = {
    nome: 'Jeniffer',

    //declarando um método
    falar: function(){
        console.log('Me chamo ' + pessoa.nome);
    }
}


console.log(pessoa);
pessoa.falar(); */


let pessoa = {
    nome: 'Antonio',

    getNome: function(){
        console.log('O nome é: '+ this.nome);
    },

    setNome: function(novoNome){
        this.nome = novoNome
    }
}

pessoa.getNome();
pessoa.setNome('Jeniffer')
pessoa.getNome();