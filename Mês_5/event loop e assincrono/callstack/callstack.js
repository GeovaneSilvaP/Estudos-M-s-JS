//Exercício 1: Chamadas Simples Aninhadas
function funcao1() {
    console.log("Inicio da funçao 1");
    funcao2();
    console.log("Fim da funçao 1");
    
}

function funcao2(){
    console.log("Inicio da funçao 2");
    funcao3();
    console.log("Fim da funçao 2");
}

function funcao3() {
    console.log("Inicio da funçao 3");
    console.log("Fim da funçao 3");
}

funcao1();

//Exercício 2: Funções com Parâmetros e Retorno
function somar(x, y) {
    console.log(`Somando ${x} + ${y}`);
    return x + y
}

function multiplicar(num) {
   console.log("Multiplicando por 2");
   const resultado = somar(num, 5);
   console.log(`Resultado da soma: ${resultado}`);
   return resultado * 2;
}

function principal() {
    console.log("Iniciando principal");
    const final = multiplicar(3)
    console.log(`Valor final: ${final}`);
}

principal();

//Exercício 3: Recursão Simples (Cuidado com Stack Overflow!)
function contarAte(n) {
    console.log(`Chamando contarAte(${n})`);
    if (n <= 0) {
        console.log("Base case atingida!");
        return;
    }
    contarAte(n - 1);
    console.log(`Retornando de contarAte(${n})`);
}

contarAte(5);

//🚀 Nível 1 – Conceito aplicado (execução sequencial)
function validarCampos(nome, idade) {
    if (!nome || !idade) {
        throw new Error("Campos obrigatórios não preenchidos!")
    }
    console.log("Campos validos!");
}

function salvarNoBanco(nome, idade){
    console.log(`Salvando usuário: ${nome}, ${idade}`);
}

function exibirMensagem(){
    console.log("Usuário cadastrado com sucesso!");
}

function cadrastrarUsuario(){
    const nome = "Aurora";
    const idade = 23;

    validarCampos(nome, idade);
    salvarNoBanco(nome, idade);
    exibirMensagem();
}

cadrastrarUsuario();

//🚀 Nível 2 – Lógica em camadas
function calcularSubtotal(itens) {
    return itens.reduce((acc, item)=> acc + item.preco, 0);
}

function aplicarDesconto(subtotal) {
    return subtotal * 0.9; //10% de desconto
}

function calcularTotal(itens) {
    const subtotal = calcularSubtotal(itens);
    return aplicarDesconto(subtotal);
}

function finalizarCompra() {
    const itens = [
        {nome: "Camisa", preco: 50},
        {nome: "Calça", preco: 100},
    ];

    const total = calcularTotal(itens);
    console.log(`Total da compra: R$${total.toFixed(2)}`);
}

finalizarCompra();

//🚀 Nível 3 – DOM + Call Stack
function validarInput(valor) {
    if (!valor.trim()) {
        throw new Error("Nome vazio")
    }
}

function processarFormulario() {
    const nome = document.getElementById('nome').value;
    validarInput(nome);
    exibirMensagemForm("Formulario enviado");
}

function exibirMensagemForm(texto){
    document.getElementById('msg').textContent = texto;
}

document.getElementById('btn').addEventListener('click', ()=>{
    try{
        processarFormulario()
    }catch(err){
       document.getElementById('msg').textContent = err.message;
    }
})

//🚀 Nível 4 – Async (Stack + Callback Queue)
function buscarDadosAPI() {
    console.log("Buscando Dados.");

    setTimeout(()=>{
        console.log("Dados recebidos!");
    },1000)

    console.log("Requisição enviada.");
    
}

function carregarTela() {
    console.log("Inicando tela...");
    buscarDadosAPI();
    console.log("Tela Carregada.");
}

carregarTela();