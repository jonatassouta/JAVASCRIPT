let maquina = {
    material: "ferro",
    equipamentos: ['pistoes','alça','bolsa'],
    vaiMontada: false,
    numeroDePecas: 3
}

console.log(maquina);
console.log(maquina.material);
console.log(maquina.equipamentos[1]);
console.log(maquina.vaiMontada);
console.log(maquina.numeroDePecas);

console.log('------Array------');

for (let i=0;i < maquina.equipamentos.length; i++) {
    console.log(maquina.equipamentos[i]);
}

console.log('----Fim Array----');