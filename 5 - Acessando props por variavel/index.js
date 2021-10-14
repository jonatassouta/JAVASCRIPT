let cavalo = {
    patas: 4,
    cor: 'preto',
    n: 'alguma coisa'
}

let jacare = {
    patas: 3,
    cor: 'preto',
    n: 'alguma coisa'
}

const p = "patas";

console.log(cavalo.patas);
console.log(p);
console.log(cavalo[p]);

//ao criar um novo "objeto" posso referenciar a mesma contante
//indicando a classe
console.log('-------jacare-------');
console.log(jacare[p]);