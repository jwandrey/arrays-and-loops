let disparos = [0, 10, 50, 70, 80, 30];

function solucao(disparos) {
    //varrer o array procurando valores maiores de 70
    //criar array com esses acertos
    //mais de 3 - imprimir na tela: qtd de acertos
    //menos de 3 - imprimir na tela: ELIMINADO

let pontosAcima70 = [];

for (let pontos of disparos) {
    if (pontos > 70) {
        pontosAcima70.push(pontos);
    } 
}
    
    if (pontosAcima70.length < 3) {
        console.log("ELIMINADO");
    } else {
        console.log(pontosAcima70.length);
    }
}

solucao(disparos)