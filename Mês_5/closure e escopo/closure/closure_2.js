// closures
function someFunction() {
    let text = "Alguma coisa";

    function display() {
        console.log(text);
    }

    display();
}

someFunction();

// closures
const multiplicarClosure = (n) =>{
    return (m) =>{
        return n * m;
    }
}

const c1 = multiplicarClosure(5);
const c2 = multiplicarClosure(10);

console.log(c1(5));
console.log(c2(10));

//Javascript Closure
let x = 1;

const functionPai = () =>{
    let myValue = 2;
    console.log(x);
    console.log(myValue);
    
    const childFunction = () =>{
        console.log(x += 5);
        console.log(myValue += 1);
    }

    return childFunction;
}

const result = functionPai();
console.log(result);

result();
result();
result();
console.log(x);

//closure
const privateCounter = (() =>{
    let count = 0;
    console.log(`initial value: ${count}`);
    return () => {count += 1; console.log(count);}
})();

privateCounter();
privateCounter();
privateCounter();

//exercicos de closure

//🧩 Exercício 1 — Saudação Personalizada
function criarSaudacao(nome) {

    function Saudacao() {
        console.log(`Olá ${nome}`);
    }

    Saudacao()
}

criarSaudacao("Grazi");

//🧩 Exercício 2 — Contador Simples

function contador() {
    let contagem = 0;
    return function contar() {
        return contagem++;
    }
}

const contar = contador();
console.log(contar());
console.log(contar());
console.log(contar());

//🧩 Exercício 3 — Multiplicador
function multiplicarFator(fator) {
    return (x) =>{
        return fator * x;
    }
}

const duplica = multiplicarFator(2);
console.log(duplica(5));

const triplicar = multiplicarFator(3);
console.log(triplicar(5));

//🧩 Exercício 4 — Mensagens com Prefixo
function prefixador(prefixo) {
    return (texto) =>{
        return `${prefixo} ${texto}`
    }
}

const alerta = prefixador("[ALERTA]");
console.log(alerta('Sistema fora do ar'));

const alerta2 = prefixador("[INFO]");
console.log(alerta2('Servidor iniciado'));

//🧩 Exercício 5 — Banco Simples
function criarBando(saldoInicial) {
    let saldo = saldoInicial;

    return {
        depositar(valor){
            if (valor > 0) {
                saldo += valor;
                console.log(`Deposito de ${valor} realizado. Novo saldo: ${saldo}`);
            }else{
                console.log("O valor do depósito deve ser positivo");
            }
        },
        sacar(valor){
            if (valor > 0 && valor <= saldo) {
                saldo -= valor;
                console.log(`Saque de ${valor} realizado. Novo saldo: ${saldo}`);
            }else if(valor > saldo){
                console.log("Saldo insuficiente para saque.");
            }else{
                console.log("O valor do saque deve ser positivo");
            }
        },

        verSaldo(){
            return saldo;
        }
    };
}

const conta = criarBando(100);
conta.depositar(50);
conta.sacar(30);
conta.verSaldo();

//🧩 Exercício 6 — Lista Privada
function criarLista() {
    let lista = [];

    return {
        adicionar(item){
            lista.push(item);
            console.log(`${item} adicionado à lista`);
        },
        remover(item){
            const index = lista.indexOf(item);
            if (index !== -1) {
                lista.splice(index, 1);
                console.log(`${item} removido da lista`);   
            }else{
                console.log(`${item} não encontrado`);
            }
        },

        mostrar(){
            console.log("Itens atuais:", lista);
            return [...lista];
        }
    }
}

const lista = criarLista();
lista.adicionar("JS");
lista.adicionar("HTML");
lista.remover("JS");

