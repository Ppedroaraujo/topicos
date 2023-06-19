import { describe, test, expect } from '@jest/globals'

import { describe, test, expect } from '@jest/globals'
import { Operacoes } from '../src/op'
import { Erro } from '../src/erro'

let operacoes = new operacoes   

describe('Soma', () =>{
    test('Recebe dois números e retorna a soma', () =>{
        expect(operacoes.sum(5, 2)).toBe(7)
    })
})

describe('Sub', () =>{
    test('Recebe dois números e retorna a subtração', () =>{
        expect(operacoes.sub(10, 2)).toBe(8)
    })

    test('Recebe um dos parâmetros como zero e retorna o número negativo correspondente', () =>{
        expect(operacoes.sub(0, 5)).toBe(-5)
        expect(operacoes.sub(10, 0)).toBe(10)
      })
})

describe('Mult', () =>{
    test('Recebe dois números e retorna a multiplicação', () =>{
        expect(operacoes.mult(1, 2)).toBe(2)
    })

    test('Recebe um dos parâmetros como zero ', () =>{
        expect(operacoes.mult(0, 5)).toBe(0)
        expect(operacoes.mult(10, 0)).toBe(0)
      })
})

describe('Div', () =>{
    test('Recebe dois números e retorna a divisão', () =>{
        expect(operacoes.div(10,2)).toBe(5)
    })

    test('Recebe o primeiro parâmetro como zero ', () =>{
        expect(operacoes.div(0, 5)).toBe(0)
        expect(operacoes.div(0, -2)).toBe(0)
    })

    test('Divisao por 1', () =>{
        expect(operacoes.div(10, 1)).toBe(10)
        expect(operacoes.div(-5, 1)).toBe(-5)
    })

    test('Recebe o segundo parametro com o valor zero',()=>{
        expect(operacoes.div(10, 0)).toBe(ErrorMessage.PARAM_ERROR_DIV_ZERO)
    })
})