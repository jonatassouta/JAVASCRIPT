const animais = [
  "Leão",
  "Macaco",
  {
    name: "Macaco",
    age: 3,
  },
];

console.log(animais[2].name);

let weigth;

console.log(typeof weigth);

//Função

//function expression
//function anonymous
let total = 0;
//parametros
const sum = function (number1, number2) {
  let total = number1 + number2; //sempre coloca palavra chave
  return total;
};

sum(2, 3); //argumentos 2 e 3
console.log(total);

//arrow function

//em vez de faezer assim
const sayMyName1 = function () {};

//se faz assim que é um geito mais resumido de se fazer uma função

const sayMyName = () => {
  console.log("Mike");
};

sayMyName();

//Callback function

function sayMyName2(name) {
  console.log("antes de executar a função callback");
  name();

  console.log("depois de executar o callback");
}

sayMyName2(() => {
  console.log('estou em uma callback("chamar de volta")');
});

//function constructor

function Person(nome) {
  this.name = nome;
  this.walk = function () {
    return "Andando";
  };
}

const jonatas = new Person("Jonatas");
const joao = new Person("João");

console.log(jonatas);
console.log(joao);
console.log(jonatas.walk);

//----------------- Manipulando dados ------------------

//Prototype
//no console "Jonatas".__proto__

// Type conversion (typecasting)-->'quando nós fazemos a converção'------ vs TYpe coersion (esse o javascript força uma troca)

console.log(Number("9") + 5);

let string = "123";
console.log(Number(string));

let number = 321;
console.log(String(number));

//contando caracteres digito

let world = "Paralelepipedo";
console.log(world.length);
console.log(String(number).length);

//Casas decimais

//(toFixed(numero de casas decimais))
//replace troca no caso abaixo o . por ,

let numero = 123213.4343242;
console.log(numero.toFixed(2).replace(".", ","));

//Maiuscula e minuscula

let p = "Progamar e tóp";

console.log(p.toLocaleLowerCase());

console.log(p.toUpperCase());

//Separando strings

let myArray = p.split(" ");

console.log(myArray);

let myArray2 = p.split("e");

console.log(myArray2);

//join juta o array

let b = myArray.join("_");
console.log(b);

//Encontrando palavra em frases

console.log(p.includes("Top"));

console.log(p.includes("tóp"));

//Crindo array com constructor

let arrayMy = new Array("a", "b", "c");
console.log(arrayMy);

//Elementos de um array

console.log(
  [
    "a",
    { type: "array" },
    function () {
      return "alo";
    },
  ].length
);

//Tranformar cadeia de caracteres em elemntos de um array

let carac = "Manipulação";

console.log(Array.from(carac));

//Manipulando Arrays
let techs = ["html", "css", "js"];

//add um item no fim
techs.push("nodejs");

//add no começo
techs.unshift("sql");

//remover fim
techs.pop();

//remover começo
techs.shift();

//pegar somente alguns elementos do array
console.log(techs.slice(1, 3));

//remover 1 ou mais intens em um array
techs.splice(1, 2);

//encontrar a posição de um elemento no array

let index = techs.indexOf("css");
console.log(index);
techs.splice(index, 1);

console.log(techs);

// ternario

let age = 16;

const canDrive = age >= 18 ? "can drive" : "can't drive";

console.log(canDrive);

//FALSY

console.log(true ? "verdadeiro" : "falso");
console.log(NaN ? "verdadeiro" : "falso");
console.log(0 ? "verdadeiro" : "falso");

//truthy

console.log(3.23 ? "verdadeiro" : "falso");
console.log("o" ? "verdadeiro" : "falso");

//Controle de fluxo

//if e else

console.log("--------------------IF ELSE------------------------");

let temperature = 36.5;

if (temperature >= 37.5) {
  console.log("Sebre Alta");
} else if (temperature < 37.5 && temperature >= 37) {
  console.log("Febre Moderada");
} else {
  console.log("Saudavel");
}
//dica tranformar as condições em  variaveis mais facil de  se entender exemplo

console.log("--------------------Exemplo------------------------");

let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if (highTemperature) {
  console.log("Sebre Alta");
} else if (mediumTemperature) {
  console.log("Febre Moderada");
} else {
  console.log("Saudavel");
}

console.log("--------------------SWITCH------------------------");

function calculate(n1, operator, n2) {
  let result;

  switch (operator) {
    case "+":
        result = n1 + n2
      break;
    case "-":
        result = n1 - n2
      break;
    case "*":
        result = n1 * n2
      break;
    case "/":
        result = n1 / n2
      break;
    default:
        console.log('não implementado')
      break;
  }

  return result
}

console.log(calculate(4, "+" , 8))

//throw try catch

console.log("--------------------Throw e Try Cath------------------------");

function meuNome(nom = '') {
    if(nom === ""){
        throw 'Nome é obrigatório'
    }

    console.log('Depois do erro')
}

try {
    meuNome()
} catch(e) {
    console.error(e)
}

//for

console.log("--------------------For-----------------------");

for ( let i = 0; i <= 9; i++) {
    console.log(i)
}

console.log("-------------Decremento------------")

for ( let i = 10; i > 0; i--) {
    console.log(i)
}