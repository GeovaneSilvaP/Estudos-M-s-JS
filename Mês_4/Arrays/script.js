//1. Exercícios com map
const lista = [1, 2, 3, 4, 5];

const novaLista = lista.map((list)=>{
    return list * list;
})

console.log(novaLista);

//2-Exercícios com map
const lista2 = ["apple", "banana", "cherry"];

const novaLista2 = lista2.map((list)=>{
    return list.toUpperCase();
})

console.log(novaLista2);

//3-Exercícios com map
const lista3 = [1, 2, 3, 4, 5];

const novaLista3 = lista3.map((list)=>{
    return (list + 10) * 2;
})

console.log(novaLista3);

//4. Exercícios com filter
const lista4 = [1, 2, 3, 4, 5, 6];

const novaLista4 = lista4.filter((list)=>{
return list %2 === 0;
});

console.log(novaLista4);

//5 - Exercícios com filter
const lista5 = ["python", "java", "ruby", "go"];

const novaLista5 = lista5.filter((list)=>{
    return list.length >= 4;
}).map((list)=>{
    return list.toUpperCase();
})

console.log(novaLista5);

//6 - Exercícios com filter
const lista6 = [10, 15, 20, 25, 30, 35];

const novaLista6 = lista6.filter((list)=>{
    return list % 5 === 0 && list > 20;
})

console.log(novaLista6);

//7. Exercícios com reduce
const lista7 = [1, 2, 3, 4];

const novaLista7 = lista7.reduce((acc, valor)=>{
    return acc + valor;
});

console.log(novaLista7);

//8. Exercícios com reduce
const lista8 = [1, 2, 3, 4];

const novaLista8 = lista8.reduce((acc, valor)=>{
    return acc * valor;
})

console.log(novaLista8);

//9. Exercícios com reduce
const lista9 = [5, 2, 8, 1, 9];

const novaLista9 = lista9.reduce((acc, valor)=> (acc > valor ? acc : valor), lista9[0])

console.log(novaLista9);

//Exercícios Combinados (Desafio)
const array = [1, 2, 3, 4, 5, 6];

const arr1 = array
.filter((arr)=>{
    return arr %2 !== 0;
})
.map((arr)=>{
    return arr ** 2;
})
.reduce((acc, valor)=>{
    return acc + valor;
})

console.log(arr1);

//Exercícios Combinados (Desafio)
const array2 = ["hello", "world", "python", "code"];

const testeArray = array2
.filter((arr) =>{
    return arr.length > 4;
})
.map((arr)=>{
    return arr.toUpperCase();
})
.reduce((acc, palavra)=>{
    return acc + " " + palavra
})

console.log(testeArray);
