// Este es el código del cuadrado

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}

// Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    const outputPerimetro = document.getElementById("outputPerimetro");
    outputPerimetro.innerHTML = "El perimetro del cuadrado es: " + perimetro + " cm";
}

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    const outputArea = document.getElementById("outputArea");
    outputArea.innerHTML = "El área del cuadrado es: " + area + " cm cuadrados";
}

// Este es el código del triangulo

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Aquí interactuamos con el HTML

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("inputTrianguloUno");
    const input2 = document.getElementById("inputTrianguloDos");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const perimetroTriangle = perimetroTriangulo(value1, value2, value3);
    const outputPerimetroTriangulo = document.getElementById("outputPerimetroTriangulo");
    outputPerimetroTriangulo.innerHTML = "El perimetro del trianguelo es: " + perimetroTriangle + " cm";
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("inputTrianguloUno");
    const input2 = document.getElementById("inputTrianguloDos");
    const input3 = document.getElementById("inputTrianguloBase");
    const value1 = parseFloat(input1.value);
    const value2 = parseFloat(input2.value);
    const value3 = parseFloat(input3.value);
    const base = value3;
    const altura = Math.sqrt((value2 ** 2)-((base/2) ** 2));
    const areaTriangle = (Math.round(areaTriangulo(base, altura)*100)) / 100;
    const outputAreaTriangulo = document.getElementById("outputAreaTriangulo");
    outputAreaTriangulo.innerHTML = "El area del trianguelo es: " + areaTriangle + " cm"}

// Este es el código del círculo

function diametroCirculo(radio) {
    return radio * 2;
}

// // PI
const PI = Math.PI; 

// Aquí interactuamos con el HTML

function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetroCirculo = (diametroCirculo(value)*PI);
    const perimetroCirculo1 = (Math.round(perimetroCirculo*100)) / 100;
    const outputPerimetroCirculo = document.getElementById("outputPerimetroCirculo");
    outputPerimetroCirculo.innerHTML = "El perimetro del círculo es: " + perimetroCirculo1 + " cm";
}

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = (value ** 2)*PI;
    const areaCirculo = (Math.round(area*100)) / 100;
    const outputAreaCirculo = document.getElementById("outputAreaCirculo");
    outputAreaCirculo.innerHTML = "El área del círculo es: " + areaCirculo + " cm";
}


