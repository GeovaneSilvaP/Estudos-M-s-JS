//✅ 1. Consumindo API (fetch)

async function getUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const {name, email, id} = await response.json();

    console.log(name, email, id);
    
}

getUser();

//✅ 2. React (muito comum!)

// function Card({ title, description }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>
//   );
// }

//Card()

//✅ 3. Configurações de função

function crateUser({name, age, admin = false}){
    console.log(name, age, admin);
}

crateUser({name: "Ana", age: 23});

//✅ 4. Extraindo dados de arrays (tipo coordenadas)

const coordenadas = [40.73, -73.93];

const [lat, lng] = coordenadas;

console.log(lat, lng);

//✅ 5. Ignorando valores que não importam

const [first, ,third] = ["Js", "Ts", "Node"];

console.log(first, third);

//✅ 6. REST operator (pegando “o resto” dos dados)

const user = {id: 1, name1: "João", password: "1234"};

const {password, ...rest} = user;

console.log(password, rest);

//✅ 7. Destructuring direto no retorno

function usePosition(){
    return{x: 10, y: 20}
}

const {x, y} = usePosition()

console.log(x, y);

//✅ 8. Switch mais limpo com destructuring

const linha = ["Ana", "Silva", 18];

const [nome8, sobrenome] = linha;

console.log(nome8, sobrenome);

//✅ 1. Destructuring em Arrays (básico)

const numeros11 = [10, 20, 30];

const [num1, num2, num3] = numeros11;

console.log(num1, num2, num3);

//✅ 2. Pular elementos no destructuring

const cores = ["vermelho", "azul", "verde"];

const [cor1, ,cor3] = cores;

console.log(cor1, cor3);

//✅ 3. Destructuring com valor padrão

const paleta = ["roxo", "amarelo"];

const [cor4, cor5, corPadrao = "sem cor"] = paleta;

console.log(cor4, cor5, corPadrao);

//✅ 4. Destructuring em Objetos (básico)

const pessoa = { nome: "Ana", idade: 25, cidade: "SP" };

const {nome, idade} = pessoa;

console.log(nome, idade);

//✅ 5. Renomeando variáveis no destructuring

const user5 = { nome: "Carlos", idade: 40 };

const {nome: primeiroNome} = user5;

console.log(primeiroNome);

//✅ 6. Valores padrão no objeto

const cliente = { nomeG: "Mariana" };

const {nomeG, pais = "Brasil"} = cliente;

console.log(nomeG, pais);

//✅ 7. Destructuring em função (parâmetros)

const carro = {marca: "Toyota", ano: 2020};

function mostarCarro({marca, ano}) {
    console.log(marca, ano);
}

mostarCarro(carro);

//✅ 8. Destructuring aninhado (objeto dentro de objeto)

const pessoa2 = {
  nome: "Julia",
  endereco: {
    rua: "Rua A",
    cidade: "Rio"
  }
};

const {endereco: {cidade} } = pessoa2;

console.log(cidade);

//✅ 9. Destructuring em array de objetos

const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 100 }
];

const [{preco}] = produtos

console.log(preco);

//✅ 10. Destructuring + Rest operator

const frutas = ["maçã", "banana", "uva", "pera"];

const [item1, ...restF] = frutas;

console.log(item1, restF);
