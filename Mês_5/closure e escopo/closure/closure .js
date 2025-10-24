//Closure

function init(){
    const nome = "Geovane";
    function exibir() {
        console.log(nome);
    }
    exibir();
}

init();

//Closure
const external = () =>{
    const book = "Sapiens: Uma História da Humanidade";

    const internal = () =>{
        console.log(book.toUpperCase());
    }
    internal();
}

external();

//Closure

function init2(){
    const nome = "Aurora";
    function exibirNome(){
        console.log(nome);
    }

    return exibirNome;
}

const minhaFuncao = init2();
minhaFuncao();

//Closure
function criarContadora(){
    let contador = 0;

    return () => {
        console.log(contador);
        contador++;
    }
}

const contadora = criarContadora();
contadora();
contadora();
contadora();

//Closure
function soma(num1){
    return (num2) => {
        if (!num2) {
            return num1;
        }
        return soma(num1 + num2);
    }
}

console.log(soma(2) (3) (5) (10) (4) (-1) ());


//Closure - 🧩 Exercício 3 — Multiplicador
function criarMultiplicador(multiplicador){
    return function (numero){
        return numero * multiplicador;
    }
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
const quadruplicar = criarMultiplicador(4);

console.log(dobrar(5));
console.log(triplicar(10));
console.log(quadruplicar(7));


//Closure - 🧩 Exercício 4 — Lista Privada
function criarLista(){
    let lista = [];

    return {
        adicionar(item){
            lista.push(item);
            console.log(`"${item}" adiconado á lista!`);
        },
        mostrar(){
            console.log("Itens na lista:", lista);
            return [...lista];
        }
    }
}

const minhaLista = criarLista();

minhaLista.adicionar("Maça");
minhaLista.adicionar("Banana");
minhaLista.adicionar("Uva");  

minhaLista.mostrar();

//Closure - 🧩 Exercício 5 — Banco Simples
function criarConta(){
    let saldo = 0;

    return {
        depositar(valor){
            if (valor > 0) {
                saldo += valor;
                console.log(`Depósito de R$${valor} realizado com sucesso.`);
            }else{
                console.log("Valor inválido para depósito.");
            }
        },

        sacar(valor){
            if (valor <= 0) {
                console.log("Valor inválido para saque.");
                return;
            }

            if (valor > saldo) {
                console.log("Saldo insuficiente!");
            }else{
                saldo -= valor;
                console.log(`Saque de R$${valor} realizado com sucesso.`);
            }
        },

        verSaldo(){
            console.log(`💰 Saldo atual: R$${saldo}`);
            return saldo
        }
    };
}

const conta = criarConta();

conta.depositar(100);
conta.sacar(30);
conta.verSaldo();

console.log(conta.saldo);

//🧩 Exercício 6 — Temporizador
  function criarTemporizador(segundos){
    let tempoRestante  = segundos;

    return () => {
        if (tempoRestante > 0 ) {
        console.log(`⏳ Faltam ${tempoRestante} segundos`);
        tempoRestante--;
    }else{
        console.log("✅ Tempo esgotado!");
    }
    }
  }

const temporizador = criarTemporizador(5);

temporizador(); 
temporizador(); 
temporizador(); 
temporizador(); 
temporizador(); 
temporizador(); 
temporizador();

