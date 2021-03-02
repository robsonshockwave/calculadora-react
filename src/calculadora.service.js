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

    return [
        calcular, 
        soma,
        subtracao,
        divisao,
        multiplicacao,
    ];
}

export default CalculadoraService;