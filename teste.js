// test.js
const assert = require('assert');

function testIMCCalculator() {
    // Teste 1: IMC normal
    assert.strictEqual(classificarIMC(22), 'Normal');

    // Teste 2: Sobrepeso
    assert.strictEqual(classificarIMC(27), 'Sobrepeso');

    // Teste 3: Obesidade grau I
    assert.strictEqual(classificarIMC(31), 'Obesidade grau I');

    // Teste 4: Obesidade grau II
    assert.strictEqual(classificarIMC(37), 'Obesidade grau II');

    // Teste 5: Obesidade grau III
    assert.strictEqual(classificarIMC(42), 'Obesidade grau III');

    // Teste 6: Magreza
    assert.strictEqual(classificarIMC(16), 'Magreza');
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        return 'Normal';
    } else if (imc >= 25 && imc <= 29.9) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc <= 34.9) {
        return 'Obesidade grau I';
    } else if (imc >= 35 && imc <= 39.9) {
        return 'Obesidade grau II'
Enviaste
} else {
        return 'Obesidade grau III';
    }
}

// Executar os testes
testIMCCalculator();
console.log('Todos os testes passaram!');