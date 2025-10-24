//Escopo var
var animal = "Cat";

function sayAnimal() {
var animal;
animal  = "cat";
console.log(animal);
}

console.log(animal);

sayAnimal();

//Escopo let
var sound = "meow meow";
console.log(sound);

{
let sound = "meow";
console.log(sound);
}

console.log(sound);

//Escopo const
const nome = "Chrysthy Hevylly Wylly Thyffany Neto";
console.log(nome);

user = {
    nome: "Geovane",
    idade: 23,
}

console.log(user.nome = "Aurora");

user2 = {
    nome: "Chrysthy",
    idade: 20,
}

Object.freeze(user2);

console.log(user2);

//Temporal Dead Zone
console.log(cat);
var cat = "meoww";

// Introdução Arrow Function
const ireland = ["Dublin", "Galway", "Cork"];

const loveArrow = ireland.map((nome)=>{
    return `I love ${nome}`
})

console.log(loveArrow);

//Arrow
const loveArrowSingle = ireland.map(nome=>{
    return `I love ${nome}`
})

console.log(loveArrow);

//Arrow
const loveArrowOneLine = ireland.map(nome => `I love ${nome}`)

console.log(loveArrow);

//Arrow
const loveChain = ireland
.filter(nome => nome === "Dublin")
.map(nome => `I love ${nome}`);

console.log(loveChain);

//Arrow function e o this
const sadwin = {
    bread: "White",
    chease: "Chedder",

    prepare: function(){
        return `I want a sandwich with ${this.bread} bread ande ${this.chease}`
    },

    make: function(){
        window.setTimeout(()=>{
            console.log(this.prepare);
        },1000)
    }
};

const btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    sadwin.make()
})

//Template Literal
const ireland2 = {
    live: "Dublin",
    love: "Galway",
};

const text = "Eu mora em" + ireland2.live + "E sou apaixonado por" + ireland2.love + "!";

const newText = `Eu mora em ${ireland2.live} E sou apaixonado por ${ireland2.love} !`;

console.log(newText);

//Template Literal
const city = "Dublin";
const something = "Guinnes";
const otherThing = "Leprechaums";

function green(templates, ...values) {
    return templates.reduce((acc, part, i) =>{
        let value = values[i - 1];
        if (value) {
            return ` ${acc} <span class="green">${value.toUpperCase()}</span>`
        }
        return `${acc}${part}`;
    }, "");
}

const ireland3 = green`I live in ${city} the city of ${something} and ${otherThing}!`;

//document.body.innerHTML = ireland3;

// Shorthand Properties
let nome2 = "Geovane";
let idade2 = 23;
let cidade = "Cajari";

const pessoa = {
    nome2,
    idade2,
    cidade,

    ola(){
        console.log(`Olá ${nome2}!!`);
    }
}

console.log(pessoa);

pessoa.ola();

//Default Parameters
function Ola(nome = "Geovane", sobreNome = "Silva"){
    console.log(`Olá ${nome}, seu sobrenome é ${sobreNome}`);
}

Ola();

Ola("Aurora", "Neto");

//Metódos strings - startsWith, endsWith, includes
let text2 = "por se tratar de um conteúdo mais antigo, a qualidade de imagem";

console.log(text2.startsWith("por"));

console.log(text2.endsWith("imagem"));

console.log(text2.includes("Geovane"));

console.log("lol".repeat(10));

//Método array.from
const lista2 = document.querySelectorAll('#lista li');

const lista2Array = Array.from(lista2);

console.log(lista2Array);

const nomesLista2 = lista2Array.map((nome) => nome.textContent);

console.log(nomesLista2);

//Método array.of
const arrayOf = Array.of("Geovane", 23, {cidade: "Cajari"});

console.log(arrayOf);

//Método array.find e array.findIndex
const sampArray = [3, 7, -9, 0, 10, -5]

const underFind = sampArray.find(x => x < 0);

console.log(underFind);

const underFindIndex = sampArray.findIndex(x => x < 0);

console.log(underFindIndex);

const data = [
    {
        nome: "Geovane",
        idade: 23,
        cidade: "Cajari",
    },
    {
        nome: "Chrysthy",
        idade: 20,
        cidade: "Goinanhinha",
    },
]

const dadaFind = data.find(meuNome => meuNome.nome === "Geovane");

console.log(dadaFind);

const dadaFindIndex = data.findIndex(minhaCidade => minhaCidade === "Goinanhinha");

console.log(dadaFindIndex);
