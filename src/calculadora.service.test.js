import React from 'react';
import ReactDOM from 'react-dom';
import CalculadoraService from './calculadora.service';

describe('Teste do CalculadoraSerive', () => {

    const [calcular, concatenarNumero, soma, subtracao, divisao, multiplicacao] = CalculadoraService();

    it('deve garantir que 1 + 4 = 5.', () => {
        let somaOperacao = calcular(1, 4, soma);
        expect(somaOperacao).toEqual(5);
    })

    it('deve garantir que 1 - 4 = -3', () => {
        let subtracaoOperacao = calcular(1, 4, subtracao);
        expect(subtracaoOperacao).toEqual(-3);
    })

    it('deve garantir que 1 / 4 = 0.25', () => {
        let divisaoOperacao = calcular(1, 4, divisao);
        expect(divisaoOperacao).toEqual(0.25);
    })

    it('deve garantir que 2 * 3 = 6', () => {
        let multiplicacaoOperacao = calcular(2, 3, multiplicacao);
        expect(multiplicacaoOperacao).toEqual(6);
    })

    it('deve retornar 0 para operação inválida', () => {
        let invalidaOperacao = calcular(1, 4, '%');
        expect(invalidaOperacao).toEqual(0)
    })
});