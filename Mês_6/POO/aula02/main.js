// const pessoa = {
//   nome: "Geovane",
//   idade: 23,
//   cidade: "Cajari",
//   profissao: function () {
//     console.log("Programador");
//   },
// };

// const pessoa2 = {
//   nome: "Renata",
//   idade: 25,
//   cidade: "Gameleira",
//   profissao: function () {
//     console.log("Emfermeira");
//   },
// };

// const pessoa3 = {
//   nome: "Fabío",
//   idade: 33,
//   cidade: "Cajari",
//   profissao: function () {
//     console.log("Professor");
//   },
// };

// const pessoa4 = {
//   nome: "Iury",
//   idade: 25,
//   cidade: "Cajari",
//   profissao: function () {
//     console.log("Programador");
//   },
// };

// const pessoa5 = {
//   nome: "Ovlaques",
//   idade: 50,
//   cidade: "Gamleira",
//   profissao: function () {
//     console.log("Professor");
//   },
// };

class Usuario {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  profissao2() {
    console.log("Programador");
  }
}

const pessoa1 = new Usuario("Geovane", 23, "Cajari");
const pessoa2 = new Usuario("Renata", 25, "Gameleira");
const pessoa3 = new Usuario("Fabio", 33, "Cajari");
const pessoa4 = new Usuario("Iury", 25, "Cajari");
const pessoa5 = new Usuario("Aurora", 15, "Natal");

console.log(pessoa1);
console.log(pessoa2);
console.log(pessoa3);
console.log(pessoa4);
console.log(pessoa5);

//

class Car {
  constructor(modelo, ano, marca) {
    this.modelo = modelo;
    this.ano = ano;
    this.marca = marca;
  }

  buzina = () => {
    console.log("Biiiimmmmmm");
  };
}

const newCar = new Car("HB20", 2023, "Hindai");

console.log(newCar);
newCar.buzina();

//
import { Pessoa } from "./minhaClasse.js";

const user = new Pessoa("Geovane", 23, "Cajari");

console.log(user);

user.profissao("Programador");

//
import { Frutas } from "./minhaClasse.js";

const debs = new Frutas("Geovane", 23, "Cajari", "Manga");

console.log(debs);

console.log(debs.profissao("Programador"));

//
import { Square } from "./minhaClasse.js";

const square = new Square(3)

console.log(square.area);

square.area = 16;

console.log(square.size);
