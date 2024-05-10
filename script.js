// Abaixo de 17 -> Muito abaixo do peso
// Entre 17 e 18,49 -> Abaixo do peso
// Entre 18,5 e 24,99 -> Peso normal
// Entre 25 e 29,99 -> Acima do peso
// Entre 30 e 39,9 -> Obesidade
// Maior que 40 -> Obesidade Grave


let peso;
let altura;
let imc;
let resultado;

function calcular(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    imc = peso / (altura * altura);

    resultado = document.getElementById('resultado');

    if(imc < 17) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Você está muito abaixo do peso!'
        resultado.style.color = "#ff2400"
    } else if(imc > 17 && imc <= 18.49) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Você está abaixo do peso!'
        resultado.style.color = "#dd6e78"
    } else if(imc >= 18.5 && imc <= 24.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Parabéns! Você está no peso ideal!'
        resultado.style.color = "#48a45e"
    } else if(imc >= 25 && imc <= 29.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Você está acima do peso!'
        resultado.style.color = "#f1ad44 "
    } else if(imc >= 30 && imc <= 39.99) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Obesidade!'
        resultado.style.color = "#dd6e78"
    } else if(imc >= 40) {
        resultado.innerHTML = '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado! Obesidade Grave!'
        resultado.style.color = "#ff2400"
    } 

    document.getElementById('peso').value = '';
    document.getElementById('altura').value = '';
}