function gerarNumeros(max, min){
    return Math.random() * (max - min) + min
}

console.log(gerarNumeros(1, 50))