function gerarNumeros(qtde) {
    const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const NovoNumero = gerarNumeroNaoContido(1, 60, nums)
            return [ ...nums, NovoNumero ]
        }, [])
        .sort((n1, n2) => n1 - n2)

    return numeros
}

//console.log(gerarNumeros(7))

function gerarNumeroNaoContido(min, max, array){
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min

    return array.includes(aleatorio) ? 
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
}

//console.log(gerarNumeroNaoContido(1, 60, [0, 0, 0, 0, 0, 0]))