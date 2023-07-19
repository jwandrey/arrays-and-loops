function solucao(palpite, palavra) {
    //verificar se palpite está incluso na palavra
    //retornar qtd de acertos
    
let qtdAcertos = 0;
    
    for (let letra of palavra) {
        if (letra === palpite) {
            qtdAcertos += 1;
        }
    }
        console.log(qtdAcertos)
}