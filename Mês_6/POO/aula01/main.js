//Orientação a Objetos

// import { capitalizado, ordenacao, caixaAlta } from "./funcoes.js";

 //const ingredientes = ["mel", "água", "sal", "mostarda"];

// const resultadoCapitalizado = capitalizado(ingredientes);
// const resultadoOrdenado = ordenacao(resultadoCapitalizado);
// const resultadoCaixaAlta = caixaAlta(ingredientes);

// console.log(resultadoCapitalizado);
// console.log(resultadoOrdenado);
// console.log(resultadoCaixaAlta);

import { ingredientes } from "./ingredientes.js";

import { capitalizarNovo } from "./funcoes.js";

const resultadoCapitalizarNovo = capitalizarNovo(ingredientes, "nome");

console.log(resultadoCapitalizarNovo);
