//ESCOPO

//escopo global
var x = 5;

let y = 10;

console.log(x, y);


//escopo local
function teste(){
    const z = 7;

    console.log(z);

    //é possivel ascesar o valor dos escopos global em funções

    console.log(x, y);
    
    
}

teste();

//não é possivel ascesar o valor do escopo local fora de uma função
//exempo: console.log(z);

//Exercício de ESCOPO

//🧩 Exercício 1 — Escopo Global

let contador = 0;

function incrementar(){
    contador++
    console.log("Incrementando... contador agora é:", contador);
}

console.log(contador);
incrementar();
incrementar();

//🧩 Exercício 2 — Escopo Local (Função)

function teste2() {
    let mensagem  = "Olá, escopo local!"
    console.log(mensagem );
}

teste2();
//console.log(mensagem );

//🧩 Exercício 3 — Escopo de Bloco

if (true) {
    var nome1 = "Var";
    let nome2 = "Let";
    const nome3 = "Const";
}

console.log(nome1);
//console.log(nome2);
//console.log(nome3);

//🧩 Exercício 4 — Escopo e Loop

// for (let i = 0; i < 3; i++) {
//     console.log("Dentro do loop:", i);
    
// }

// console.log("Fora do loop com var:", i);

// for (let j = 0; j < 3; j++) {
//     console.log("Dentro do loop:", j);
    
// }

// console.log("Fora do loop com let:", j);

//🧩 Exercício 5 — Escopo Aninhado

function extrerna() {
    const nome = "Função Externa";

    function interna() {
        const saudacao = "Função Interna";
        console.log(nome);
        console.log(saudacao);
    }

    interna();

}

extrerna();

//🧩 Exercício 6 — Diferença entre let e var

function testeEscopo(){
    if (true) {
        var a = 10;
        let b = 20;
    }
}

//console.log(a);
//console.log(b);

testeEscopo();