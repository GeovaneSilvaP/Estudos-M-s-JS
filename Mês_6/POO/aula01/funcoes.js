export function capitalizado(vetor) {
  let modoficado = [];

  for (let i = 0; i < vetor.length; i++) {
    let letraInicial = vetor[i].charAt(0).toUpperCase();
    let restoTexto = vetor[i].slice(1);
    let resultado = letraInicial + restoTexto;

    modoficado[i] = resultado;
  }

  return modoficado;
}

export function ordenacao(vetor) {
 return vetor.sort(function (a, b) {
    return a.localeCompare(b);
  });

}

export function caixaAlta(vetor){
    let modoficado = [];
    for (let i = 0; i < vetor.length; i++) {
        modoficado[i] = vetor[i].toUpperCase();
    }
    return modoficado;
}