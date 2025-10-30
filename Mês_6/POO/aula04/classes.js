//Exercício 1: Classe Básica de Pessoa

export class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade}`;
  }
}

//Exercício 2: Classe de Carro com Método de Aceleração

export class Carro {
  constructor(marca, modelo, velocidade) {
    this.marca = marca;
    this.modelo = modelo;
    this.velocidade = 0;
  }

  acelerar() {
    this.velocidade += 10;
    return `Velocidade atual ${this.velocidade} km/h`;
  }

  frear() {
    this.velocidade -= 5;
    return `Velocidade atual ${this.velocidade} km/h`;
  }
}

//Exercício 3: Herança com Classe Animal e Cachorro

class Animal {
  constructor(nome, som) {
    this.nome = nome;
    this.som = som;
  }

  fazerSom() {
    return "O Animal esta fazendo um som";
  }
}

export class Cachorro extends Animal {
  constructor(nome, som) {
    super(nome, som);
  }

  fazerSom() {
    return `O ${this.nome}, esta fazendo um som ${this.som}`;
  }
}
