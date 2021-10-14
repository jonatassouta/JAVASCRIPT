let carro = {
    tipo: "mini van",
}

console.log(carro);
carro.porta = 4;
console.log(carro);

if (carro.tipo == "mini van") {
    carro.tetoSolar = true;
}

console.log(carro);

delete carro.tetoSolar;

console.log(carro);