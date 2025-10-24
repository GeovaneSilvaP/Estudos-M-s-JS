function meuTeste(x, y) {
    return new Promise((resolve, reject) => {
        const calculo = x * y;
        resolve(calculo)
    })
}

meuTeste(5, 5)
.then((resultado)=>{
    console.log("Resultado:", resultado);
})

