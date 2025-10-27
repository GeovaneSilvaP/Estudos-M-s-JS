export class Pessoa {
  constructor(seuNome, suaIdade, suaCidade) {
    this.seuNome = seuNome;
    this.suaIdade = suaIdade;
    this.suaCidade = suaCidade;
  }

  profissao(job) {
    console.log(
      `Bom dia ${this.seuNome}, parabens vc esta fazendo ${this.suaIdade} anos hoje, e tem uma pizzaria muito boa para voçê visitar em ${this.suaCidade}... E parabéns por sua promossão para ${job}`
    );
  }
}

//
export class Frutas extends Pessoa {
  constructor(seuNome, suaIdade ,suaCidade, frutas) {
    super(seuNome, suaIdade, suaCidade);

    this.frutas = frutas;
  }

  profissao(job) {
    console.log(
      `Bom dia ${this.seuNome}, parabens vc esta fazendo ${this.suaIdade} anos hoje, e tem uma pizzaria muito boa para voçê visitar em ${this.suaCidade}... E parabéns por sua promossão para ${job}... Ah ia esquecendo que a sua fruta favorita é ${this.frutas}`
    );
  }
}

//
export class Square{
    constructor(size){
        this.size = size;
    }

    get area(){
        return this.size ** 2;
    }

    set area(newArea){
        this.size = newArea ** 0.5
    }
}