
Enviaste
function calcularIMC() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;

    if (peso && altura) {
        var imc = peso / (altura * altura);
        var resultado = document.getElementById('resultado');

        resultado.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${classificarIMC(imc)}`;
    } else {
        alert('Por favor, preencha peso e altura.');
    }
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
        return 'Obesidade grau II';
    } else {
        return 'Obesidade grau III';
    }
}