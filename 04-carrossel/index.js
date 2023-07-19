sequencia = ">>><>";

function solucao(sequencia) {

let posicao = 0

for (let clique of sequencia) {
    if (clique === ">") {
        posicao += 1;
    } else if (clique === "<") {
        posicao -= 1;
    }
        if (posicao < 0) {
        posicao = posicao + 7;
    } else if (posicao > 6) {
        posicao = posicao - 7;
    }
}
console.log(posicao)
}

solucao(sequencia);