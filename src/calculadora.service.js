function CalculadoraService() {

    const soma = '+';
    const subtracao = '-';
    const divisao = '/';
    const multiplicacao = '*';

    function calcular(numero1, numero2, operacao) {
        let resultado;

        switch(operacao) {
            case soma:
                resultado = numero1 + numero2;
                break;
            case subtracao:
                resultado = numero1 - numero2;
                break;
            case divisao:
                resultado = numero1 / numero2;
                break;
            case multiplicacao:
                resultado = numero1  * numero2;
                break;
            default:
                resultado = 0;
        }

        return resultado;
    }

    function concatenarNumero(numAtual, numConcat) {
        // caso contenha apenas '0' ou null, reinicia o valor
        if (numAtual === '0' || numAtual === null) {
            numAtual = '';
        }

        // primeiro digito for '.', concatena '0' antes do ponto
        if (numConcat === '.' && numAtual === '') {
            return '0.';
        }

        // caso '.' digitado e já contenha um ponto, apenas retornar
        if (numConcat === '.' && numAtual.indexOf('.') > -1) {
            return numAtual;
        }

        return numAtual + numConcat;
    }

    return [
        calcular, 
        concatenarNumero,
        soma,
        subtracao,
        divisao,
        multiplicacao,
    ];
}

export default CalculadoraService;