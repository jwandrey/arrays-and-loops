function solucao(resultados) {

let soma = 0;

    for (let partida of resultados) {
        if (partida === "V") {
            soma += 3;
        } else if (partida === "E") {
            soma += 1;
        } else {
            soma = soma;
        }
    }

    console.log(soma);
}