//Aula 01
function minhaBiblioteca(){
    function auxiliar(valor) {
        return 10 + valor;
    }

    return {
        add5(){
            return auxiliar(5);
        },
        add7(){
            return auxiliar(7);
        }
    }
}

const biblioteca = minhaBiblioteca();
console.log(biblioteca);

console.log(biblioteca.add5());
console.log(biblioteca.add7());

//
function imprimirNomeCompleto(nome){
    return function(){
        console.log(nome, "Silva");
    }
}

function inicializar() {
    let nome = "Geovane";
    setTimeout(imprimirNomeCompleto(nome), 1000)
}

inicializar();

//Aula 02
let num = 50;

function fora() {
    
    return function soma() {
        return num + 3
    }
}

const aula2 = fora()
console.log(aula2());

//TESTE SPLIT
let texto = "este é um texto para o teste";
let resultado = texto.split(" ");

console.log(resultado);

//TESTE SPLIT - parametro limite
let texto2 = "O split é um método do Javascript";
let resultado2 = texto2.split(" ", 4);

console.log(resultado2);

//TESTE SPLIT - string com virgula
let texto3 = "Laranja, Maça, Pera";
let resultado3 = texto3.split(", ");

console.log(resultado3);

//TESTE SPLIT - separar por cadeia de caracteres
let texto4 = "A divisão da string é feita procurando";
let resultado4 = texto4.split("divisão");

console.log(resultado4);

//TESTE SPLIT - reverter a string
let texto5 = "Geovane";
let resultado5 = texto5.split("").reverse().join("");

console.log(resultado5);

//TESTE SPLIT - reverter a string
let texto6 = "que é um delimitador e ele é passado no primeiro parâmetro";
let resultado6 = texto6.split("").filter(letra => letra.indexOf("e") != -1)

console.log(resultado6.length);