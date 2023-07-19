let letra = "m";
let palavras = [
    "mamao",
    "maca",
    "melao",
    "melancia",
    "laranja"
  ];

function solucao(letra, palavras) {
	//seu codigo aqui
    //verificar a letra sorteada
    //verificar a inicial de cada palavra
    //contar +1 a cada palavra errada - imprimir quantos perderam
    
let soma = 0;
    
    for (let palavra of palavras) {
        if (palavra[0] !== letra) {
            soma += 1;
        }
    }
    console.log(soma)
}

solucao(letra, palavras);