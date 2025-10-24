//Herança Prototipal (Prototypes)
function animal(kind, sound){
    this.kind = kind;
    this.sound = sound;
}

animal.prototype.hello = function(){
    console.log(`${this.sound} I am a ${this.kind}!`);
}

const dog = new animal("Cachorro", "auau");
const cat = new animal("Gato", "miau")

//Trabalhando com Classes 

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    ola(){
        console.log(`${this.nome} sua idade é ${this.idade}`);
    }

    static info(){
        console.log("Muito prazer em te conhcer");
    }

    get seuNome(){
        console.log(`${this.idade} numero da sua idade`);
    }

    set nickName(nick){
        this.nick = nick
    }
}

const nome = new Pessoa("Geovane", 23);
const nome2 = new Pessoa("Aurora", 16);

//Estendendo Classes
class Computador{
    constructor(pecas){
        this.pecas = pecas;
    }

    meuPc(){
        console.log(`Esta faltando a ${pecas}`);
    }
}

class Memoria extends Computador{
    constructor(pecas, mPc){
        super(pecas);
        this.meuPc = mPc;
    }

    barck(){
        console.log(`${this.meuPc} Im ${this.pecas}`);
    }
}

const pecas = new Computador("Placa de video");
const pc = new Computador("Placa Mãe", "zummm");