const precos = [100, 500, 100, 200, 50];

function solucao(precos) {
    let somaTotal = 0;
    let menorPreco = precos[0];

//se a quantidade de itens for igual ou maior a 5
    if (precos.length >= 5) {
        for (let preco of precos) {
            if (preco < menorPreco) {
                menorPreco = preco;
//ate entao o menorPreco eh o primeiro
//se o item verificado for menor que o primeiro
//ele vira o menorPreco
        }
//primeiro o valor da soma total
            somaTotal = somaTotal + preco;
        }
//soma total com o desconto
        somaTotal = somaTotal - menorPreco;

//se a quantidade for menor
//valor normal
    } else {
        for (let preco of precos) {
            somaTotal = somaTotal + preco;
        }
    }
console.log(somaTotal);
}

solucao(precos);