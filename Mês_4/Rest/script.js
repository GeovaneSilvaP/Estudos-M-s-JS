//...Rest
function soma(...valores){
    let tam = valores.length;
    let res = 0;

    for (let i = 0; i < tam; i++) {
        res += valores[i]
    }

    return res;
}

console.log(soma(1, 2, 15, 20));

//...Rest
function somaInfinita(...rest){
    return rest.reduce((acc, valor)=> acc += valor)
}

console.log(somaInfinita(1, 2, 3, 4));

//...Rest
function multiplicaPeloPrimerio(multoplicador, ...rest){
    return rest.map((num)=> {
        return multoplicador * num;
    })
}

console.log(multiplicaPeloPrimerio(2, 1, 2, 3, 4));

//...Rest
const cliente = {
    nome: "Geovane",
    cpf: "123.456.789-10",
    nacimento: "11/04/2002",
    telefone: 33561192,
    endereco: {
        rua: "Rua Clodomir Serejo",
        ciadae: "Cajari",
        estado: "MA",
        pais: "BR",
    }
}

const {nome, ...rest} = cliente;
console.log("Nome:", nome);
console.log("Resto:", rest);

//...Rest
function summ(...valores){
    return valores.reduce((acc, valor) =>{
        return acc + valor;
    })
}

console.log(summ(3, 4));

//...Rest
function filtraPares(...rest){
    return rest
    .filter((num)=>{
        return num %2 === 0
    })
    .reduce((acc, valor)=>{
        return acc + valor;
    })
}

console.log(filtraPares(10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
