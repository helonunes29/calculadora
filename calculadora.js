/*
            Resultado abaixo de 17 - Muito abaixo do peso; 
            Resultado entre 17 e 18,49 - Abaixo do peso;
            Resultado entre 18,5 e 24,99 - Peso ideal; 
            Resultado entre 25 e 29,99 - Sobrepeso; 
            Resultado entre 30 e 34,9 - Obesidade Grau I;
            Resultado entre 35 e 39,9 - Obesidade Grau II (severa);
            Resultado acima de 40 - Obesidade Grau III (morbida); 
 */
var altura;
var peso;
var imc;
var resultado;

function calcular(event) {
    event.preventDefault();

    peso = parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

    imc = peso / (altura * altura);
    console.log(imc);
    resultado = document.getElementById("resultado");
    if (imc < 17) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc + "<br/> Cuidado, voce esta muito abaixo do peso!";
    } else if (imc >= 17 && imc <= 18.49) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Abaixo do peso!";
    } else if (imc >= 18.5 && imc <=24.99) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Voce esta no peso ideal!";
    } else if (imc >= 25 && imc <= 29.99) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Voce esta sobrepeso!"
    } else if (imc >= 30 && imc <= 34.99) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO!, obesidade grau I"
    } else if (imc >= 35 && imc <= 39.99) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO!, obesidade grau II"
    } else if (imc >= 40) {
        resultado = document.getElementById("resultado")
        resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> CUIDADO!, obesidade grau III"
    }
}




