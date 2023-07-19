const stringCorrompida = "*Canis %lupus )familiaris";

function solucao(stringCorrompida) {
    let dadoPurificado = stringCorrompida.replace(/[!@#$%&*()]/gi, "");
    console.log(dadoPurificado);
}

solucao(stringCorrompida);