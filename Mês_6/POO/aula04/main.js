//Exercício 1: Classe Básica de Pessoa
import { Pessoa } from "./classes.js";
const teste1 = document.getElementById("teste1");

const pessoa = new Pessoa("Geovane", 23);

teste1.textContent = pessoa.apresentar();

//Exercício 2: Classe de Carro com Método de Aceleração
import { Carro } from "./classes.js";

const teste2 = document.getElementById("teste2");
const btnAcelerar = document.getElementById("acelerar");
const btnAFrear = document.getElementById("frear");

const carro = new Carro("Volkswagen", "Polo Track");

btnAcelerar.addEventListener("click", () => {
  teste2.textContent = carro.acelerar();
});

btnAFrear.addEventListener("click", () => {
  teste2.textContent = carro.frear();
});

//Exercício 3: Herança com Classe Animal e Cachorro

import { Cachorro } from "./classes.js";

const teste3 = document.getElementById("teste3");

const animal = new Cachorro("Cachorro", "Auau");

teste3.textContent = animal.fazerSom();

