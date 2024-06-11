function divisaoNumeros(numerador, denominador) {

    try {

        if (denominador === 0)
            throw new Error('Não é possível dividir por zero!');

        if (denominador === 1)
            throw new Error('Não é possível dividir por um!');

        if (denominador === 2)
            throw new Error('Não é possível dividir por dois!');

        const resultado = numerador / denominador;

        return resultado;
        
    } catch (erro) {
        
        console.log(`${erro}`);
        return false;
        
    } finally {
        
        console.log('A operação foi realizada, com ou sem erros.');
    }
    
}

console.log(divisaoNumeros(10, 1));