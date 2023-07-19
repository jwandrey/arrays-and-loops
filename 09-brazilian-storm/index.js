function solucao(notas) {
    //varrer o array e procurando pela maior e menor nota
    //descartar maior e menor nota
    //fazer a media das notas restantes
    //retornar a media

    let maiorNota = notas[0];
    let menorNota = notas[0];
    let soma = 0;

    for (let nota of notas) {
        if (nota > maiorNota) {
            maiorNota = nota;
        }
        if (nota < menorNota) {
            menorNota = nota;
        }
    }

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    let media = (soma - maiorNota - menorNota) / (notas.length - 2);

    console.log(media);
}