//✅ 1. Exercícios Básicos

//1) Extraia o nome e a idade usando destructuring:

const pessoa = {nome: "Ana", idade: 25, cidade: "São Paulo"};

const {nome, idade} = pessoa;

console.log(nome, idade);

//2) Faça destructuring do array para pegar os valores:

const numeros = [10, 20, 30];

const [valor1, valor2] = numeros

console.log(valor1, valor2);

//3) Atribua valores padrão caso não existam:

const user = {name: "Carlos"};

const {name, anos = 18} = user;

console.log(name, anos);

//4) Faça destructuring ignorando o segundo item:

const cores = ["vermelho", "verde", "azul"];

const [cor1, , cor3] = cores;

console.log(cor1, cor3);

//✅ 2. Exercícios Intermediários

//5) Troque os valores das variáveis usando destructuring:

let x = 15;
let y =100;

[x, y] = [y, x];

console.log("X:" + x, "Y:" + y);

//6) Faça destructuring de um objeto dentro de outro:

const produto = {
  nome: "Notebook",
  preco: 2500,
  fabricante: {
    nome: "Dell",
    pais: "EUA"
  }
};

const {preco, fabricante: { pais } } = produto;

console.log(preco, pais);

//7) Destructure com rest operator:

const letras = ["A", "B", "C", "D"];

const [primeiraLetra, ...rest] = letras;

console.log(primeiraLetra, rest);

//8) Renomeie a propriedade durante o destructuring:

const carro = { marca: "Toyota", ano: 2020 };

const {marca, ano: anoFabricado } = carro;

console.log(marca, anoFabricado);

console.log(anoFabricado);

//✅ 9. Rest Operator com objetos

const alunos = {aNome: "João", aIdade: 12, serie: "7º ano"};

const {aNome, ...aRest} = alunos;

console.log(aNome, aRest);

//✅ 10. Destructuring retornando de função

function getLocation() {
  return { lat: -23.55, lng: -46.63, cidade: "SP" };
}

const {lat, lng} = getLocation();

console.log(lat, lng);

//✅ 11. Array dentro de objeto

const pessoa11 = {
  nome: "Lia",
  hobbies: ["Ler", "Dançar", "Desenhar"]
};

const [, segundoHobby] = pessoa11.hobbies

console.log(segundoHobby);

