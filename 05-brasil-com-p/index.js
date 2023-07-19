let primeiraLetra = "c";
let segundaLetra = "v";
let palavras = ["aveia", "manha", "ave"]

function solucao(primeiraLetra, segundaLetra, palavras) {

let listaDePalavras = [];
    
for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
        listaDePalavras.push(palavra);
        console.log(palavra);
    } 
}
    if (listaDePalavras.length <= 0) {
        console.log("NENHUMA");
    }
}

solucao(primeiraLetra, segundaLetra, palavras);